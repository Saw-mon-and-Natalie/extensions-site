module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    // purge: ['./components/**/*.{js,jsx,ts,tsx', './pages/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            'sans': [
                'Poppins',
                'system-ui', 
                '-apple-system', 
                'BlinkMacSystemFont', 
                '"Segoe UI"', 
                'Roboto', 
                '"Helvetica Neue"', 
                'Arial', "Noto Sans", 
                'sans-serif', 
                '"Apple Color Emoji"', 
                '"Segoe UI Emoji"', 
                '"Segoe UI Symbol"', 
                '"Noto Color Emoji"'
            ]
        },
        extend: {
            colors: {
                'accent-1': '#333',
            },
        },
    },
    variants: {},
    plugins: [],
}