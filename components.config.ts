/**
 * Gravity UI Components Configuration
 * 
 * This file contains configuration and documentation for the component library
 */

export const COMPONENT_CONFIG = {
    // Component library information
    library: {
        name: 'Gravity UI Components',
        version: '1.0.0',
        description: 'A modern UI component library built with Next.js, TypeScript, and Gravity UI',
    },

    // Design system tokens
    designTokens: {
        colors: {
            primary: {
                50: '#eff6ff',
                100: '#dbeafe',
                500: '#3b82f6',
                600: '#2563eb',
                700: '#1d4ed8',
                900: '#1e3a8a',
            },
            gray: {
                50: '#f9fafb',
                100: '#f3f4f6',
                200: '#e5e7eb',
                300: '#d1d5db',
                400: '#9ca3af',
                500: '#6b7280',
                600: '#4b5563',
                700: '#374151',
                800: '#1f2937',
                900: '#111827',
            },
            // Light theme specific colors
            light: {
                background: '#f9fafb',
                surface: '#ffffff',
                text: '#111827',
                textSecondary: '#6b7280',
                border: '#e5e7eb',
                shadow: '#000000',
            },
        },
        spacing: {
            xs: '0.25rem',    // 4px
            sm: '0.5rem',     // 8px
            md: '1rem',       // 16px
            lg: '1.5rem',     // 24px
            xl: '2rem',       // 32px
            '2xl': '3rem',    // 48px
        },
        breakpoints: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
    },

    // Component variants
    componentVariants: {
        button: {
            variants: ['primary', 'secondary', 'outline', 'ghost', 'success', 'danger'],
            sizes: ['sm', 'md', 'lg'],
        },
        badge: {
            variants: ['default', 'primary', 'success', 'warning', 'error'],
            sizes: ['sm', 'md', 'lg'],
        },
        card: {
            padding: ['sm', 'md', 'lg'],
            shadow: ['none', 'sm', 'md', 'lg'],
        },
        input: {
            sizes: ['sm', 'md', 'lg'],
        },
        select: {
            sizes: ['sm', 'md', 'lg'],
        },
    },

    // Theme settings
    theme: {
        mode: 'light',
        supportsDarkMode: false,
        primaryColor: '#3b82f6',
        backgroundColor: '#f9fafb',
        surfaceColor: '#ffffff',
    },

    // Accessibility guidelines
    accessibility: {
        ariaLabels: true,
        keyboardNavigation: true,
        focusManagement: true,
        screenReaderSupport: true,
    },

    // Performance settings
    performance: {
        lazyLoading: true,
        codeSplitting: true,
        treeShaking: true,
    },
};

export default COMPONENT_CONFIG;
