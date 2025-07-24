import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { ExternalLink, FileSpreadsheet } from 'lucide-react';

interface GoogleSheetsConfigProps {
  isOpen: boolean;
  onClose: () => void;
}

const GoogleSheetsConfig: React.FC<GoogleSheetsConfigProps> = ({ isOpen, onClose }) => {
  const [sheetsUrl, setSheetsUrl] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen) {
      const savedUrl = localStorage.getItem('google_sheets_url');
      if (!savedUrl) {
        // Auto-set the deployment URL
        const deploymentUrl = 'https://script.google.com/macros/s/AKfycbxbZWiK_opM3ZSbCPtWhVQdMhKJbDJ9yLiV40_2bMvtYF7YYEqlgw6UOnsWGra2qySSVw/exec';
        setSheetsUrl(deploymentUrl);
        localStorage.setItem('google_sheets_url', deploymentUrl);
        toast({
          title: "URL configurée automatiquement",
          description: "L'URL Google Sheets a été configurée avec votre script de déploiement",
        });
      } else {
        setSheetsUrl(savedUrl);
      }
    }
  }, [isOpen, toast]);

  const handleSave = () => {
    if (!sheetsUrl.trim()) {
      toast({
        title: "URL requise",
        description: "Veuillez entrer l'URL de votre Google Apps Script",
        variant: "destructive",
      });
      return;
    }

    localStorage.setItem('google_sheets_url', sheetsUrl.trim());
    
    toast({
      title: "Configuration sauvegardée",
      description: "L'URL Google Sheets a été configurée avec succès",
    });
    
    onClose();
  };

  const handleClear = () => {
    localStorage.removeItem('google_sheets_url');
    setSheetsUrl('');
    toast({
      title: "Configuration effacée",
      description: "L'URL Google Sheets a été supprimée",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <FileSpreadsheet className="w-5 h-5 mr-2 text-green-600" />
            Configuration Google Sheets
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">✅ Configuration automatique:</h4>
            <p className="text-sm text-green-700">
              Votre URL de déploiement Google Apps Script a été configurée automatiquement. 
              Vous pouvez maintenant recevoir les commandes directement dans votre Google Sheet !
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sheets-url">URL de l'Apps Script *</Label>
            <Input
              id="sheets-url"
              type="url"
              placeholder="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
              value={sheetsUrl}
              onChange={(e) => setSheetsUrl(e.target.value)}
            />
            <p className="text-sm text-gray-500">
              L'URL de déploiement de votre Google Apps Script
            </p>
          </div>

          <div className="flex space-x-2">
            <Button onClick={handleSave} className="flex-1">
              Sauvegarder
            </Button>
            <Button variant="outline" onClick={handleClear}>
              Effacer
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GoogleSheetsConfig;
