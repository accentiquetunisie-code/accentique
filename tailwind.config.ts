
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Accentique brand colors
				gold: {
					50: '#fefbf3',
					100: '#fdf5e6',
					200: '#f9e8c1',
					300: '#f4d79c',
					400: '#efb73e',
					500: '#d4af37',
					600: '#b8941f',
					700: '#8a6f17',
					800: '#5c4a0f',
					900: '#2e2508',
				},
				blush: {
					50: '#fef7f7',
					100: '#fdeef0',
					200: '#f9d5d9',
					300: '#f4bcc2',
					400: '#ea8b94',
					500: '#e1697a',
					600: '#d84860',
					700: '#b83347',
					800: '#8a242e',
					900: '#5c1817',
				},
				beige: {
					50: '#faf9f7',
					100: '#f5f2ed',
					200: '#ebe4d9',
					300: '#e0d5c4',
					400: '#cbb89b',
					500: '#b8a082',
					600: '#a08968',
					700: '#7a674f',
					800: '#544537',
					900: '#2e231e',
				},
			},
			fontFamily: {
				'serif': ['Playfair Display', 'serif'],
				'sans': ['Inter', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'shimmer': 'shimmer 2s infinite',
				'float': 'float 6s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #efb73e 100%)',
				'gradient-blush': 'linear-gradient(135deg, #f4bcc2 0%, #e1697a 100%)',
				'gradient-elegant': 'linear-gradient(135deg, #faf9f7 0%, #f5f2ed 50%, #ebe4d9 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
