
import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'fs/promises';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = join(__dirname, '..');
const SOURCE_DIR = join(ROOT_DIR, 'public', 'product_data');


const CONFIG = {
    maxWidth: 1200,        
    maxHeight: 1200,       
    quality: 75,          
};

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

async function getAllImages(dir) {
    const images = [];

    async function scan(currentDir) {
        try {
            const entries = await readdir(currentDir, { withFileTypes: true });

            for (const entry of entries) {
                const fullPath = join(currentDir, entry.name);

                if (entry.isDirectory()) {
                    await scan(fullPath);
                } else if (IMAGE_EXTENSIONS.includes(extname(entry.name).toLowerCase())) {
                    images.push(fullPath);
                }
            }
        } catch (err) {
            console.error(`Error scanning ${currentDir}: ${err.message}`);
        }
    }

    await scan(dir);
    return images;
}

async function getFileSize(filePath) {
    try {
        const stats = await stat(filePath);
        return stats.size;
    } catch {
        return 0;
    }
}

function formatBytes(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function optimizeImage(imagePath) {
    const originalSize = await getFileSize(imagePath);

   
    if (originalSize < 300 * 1024) {
        return { skipped: true, originalSize, newSize: originalSize, reason: 'already small' };
    }

    const tempPath = imagePath + '.tmp';

    try {
        const image = sharp(imagePath);
        const metadata = await image.metadata();

    
        let pipeline = image;
        if (metadata.width > CONFIG.maxWidth || metadata.height > CONFIG.maxHeight) {
            pipeline = pipeline.resize(CONFIG.maxWidth, CONFIG.maxHeight, {
                fit: 'inside',
                withoutEnlargement: true,
            });
        }

     
        pipeline = pipeline.jpeg({
            quality: CONFIG.quality,
            mozjpeg: true
        });

       
        await pipeline.toFile(tempPath);

     
        const newSize = await getFileSize(tempPath);

      
        if (newSize < originalSize) {
           
            await unlink(imagePath);
            await rename(tempPath, imagePath);

            const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
            console.log(`  ✅ ${formatBytes(originalSize)} → ${formatBytes(newSize)} (-${savings}%)`);

            return { skipped: false, originalSize, newSize };
        } else {
            
            await unlink(tempPath);
            return { skipped: true, originalSize, newSize: originalSize, reason: 'no savings' };
        }
    } catch (error) {
     
        try { await unlink(tempPath); } catch { }
        console.error(`  ❌ Error: ${error.message}`);
        return { skipped: true, originalSize, newSize: originalSize, error };
    }
}

async function main() {
    console.log('\n🖼️  Image Optimization Script\n');
    console.log(`📁 Source: ${SOURCE_DIR}`);
    console.log(`📐 Max dimensions: ${CONFIG.maxWidth}x${CONFIG.maxHeight}`);
    console.log(`🎨 Quality: ${CONFIG.quality}%\n`);


    console.log('🔍 Scanning for images...');
    const images = await getAllImages(SOURCE_DIR);
    console.log(`   Found ${images.length} images\n`);

    if (images.length === 0) {
        console.log('No images found to optimize.');
        return;
    }

   
    console.log('⚙️  Optimizing images...\n');

    let totalOriginal = 0;
    let totalNew = 0;
    let processed = 0;
    let skipped = 0;

    for (const imagePath of images) {
        const shortPath = imagePath.replace(SOURCE_DIR, '').replace(/\\/g, '/');
        process.stdout.write(`  Processing: ${shortPath}... `);

        const result = await optimizeImage(imagePath);
        totalOriginal += result.originalSize;
        totalNew += result.newSize;

        if (result.skipped) {
            skipped++;
            console.log(`⏭️  (${result.reason || 'skipped'})`);
        } else {
            processed++;
        }
    }


    console.log('\n' + '='.repeat(60));
    console.log('📊 Summary');
    console.log('='.repeat(60));
    console.log(`   Images processed: ${processed}`);
    console.log(`   Images skipped: ${skipped}`);
    console.log(`   Original total: ${formatBytes(totalOriginal)}`);
    console.log(`   New total: ${formatBytes(totalNew)}`);
    const savedBytes = totalOriginal - totalNew;
    const savedPercent = totalOriginal > 0 ? (savedBytes / totalOriginal * 100).toFixed(1) : 0;
    console.log(`   Savings: ${formatBytes(savedBytes)} (${savedPercent}%)`);
    console.log('='.repeat(60) + '\n');
}

main().catch(console.error);
