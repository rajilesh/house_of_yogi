module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Coastal Authority Palette
        primary: {
          DEFAULT: "#20B2AA", // light-sea-green - Trustworthy expertise
          50: "#F0FDFC", // teal-50
          100: "#CCFBF1", // teal-100
          200: "#99F6E4", // teal-200
          300: "#5EEAD4", // teal-300
          400: "#2DD4BF", // teal-400
          500: "#20B2AA", // light-sea-green
          600: "#0D9488", // teal-600
          700: "#0F766E", // teal-700
          800: "#115E59", // teal-800
          900: "#134E4A", // teal-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#F8F9FA", // gray-50 - Premium canvas
          100: "#F3F4F6", // gray-100
          200: "#E5E7EB", // gray-200
          300: "#D1D5DB", // gray-300
          400: "#9CA3AF", // gray-400
          500: "#6B7280", // gray-500
        },
        // Accent Colors
        accent: {
          DEFAULT: "#D4AF37", // gold - Quality indicators
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          200: "#FDE68A", // amber-200
          300: "#FCD34D", // amber-300
          400: "#FBBF24", // amber-400
          500: "#D4AF37", // gold
          600: "#D97706", // amber-600
          700: "#B45309", // amber-700
        },
        // Background Colors
        background: "#FFFFFF", // white - Pure foundation
        surface: "#F1F3F4", // gray-100 - Subtle content separation
        // Text Colors
        text: {
          primary: "#1A1A1A", // gray-900 - Extended reading comfort
          secondary: "#6B7280", // gray-500 - Clear information hierarchy
          muted: "#9CA3AF", // gray-400 - Supporting details
        },
        // Status Colors
        success: {
          DEFAULT: "#059669", // emerald-600 - Natural wellness confirmation
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
        },
        warning: {
          DEFAULT: "#D97706", // amber-600 - Gentle urgency
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
        },
        error: {
          DEFAULT: "#DC2626", // red-600 - Clear problem identification
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
        },
      },
      fontFamily: {
        // Headlines - Modern geometric sans-serif for contemporary authority
        outfit: ['Outfit', 'sans-serif'],
        // Body - Clean, highly readable sans-serif for extended reading
        inter: ['Inter', 'sans-serif'],
        // Accents - Modern sans-serif for premium product names
        'dm-sans': ['DM Sans', 'sans-serif'],
        // Default sans-serif stack - Inter for body, Outfit for headings
        sans: ['Inter', 'Outfit', 'sans-serif'],
        // Serif stack - keeping for backwards compatibility
        serif: ['Georgia', 'serif'],
      },
      fontSize: {
        // Enhanced typography scale for scientific content
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      boxShadow: {
        // Subtle depth for interactive elements
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        // Content cards with quality suggestion
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        // Modal dialogs and primary CTAs
        'modal': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      borderColor: {
        // Minimal border approach
        'light': '#E5E7EB', // gray-200
        'medium': '#D1D5DB', // gray-300
      },
      transitionDuration: {
        // Animation timing for micro-interactions
        '200': '200ms', // Fast - Navigation elements
        '300': '300ms', // Medium - Hover states and form feedback
        '400': '400ms', // Slow - Content reveals matching reading pace
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      spacing: {
        // Enhanced spacing scale for content hierarchy
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        // Content width constraints for readability
        'prose': '65ch',
        'content': '1200px',
      },
      animation: {
        // Smooth micro-interactions
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'scale-in': 'scaleIn 200ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    // Add any additional plugins here
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}