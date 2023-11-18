/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    darkMode: "class",
    theme: {
      extend: {
        gridTemplateColumns: {
          "auto-fill-200-300": "repeat(auto-fill, minmax(200px, 1fr))",
        },
        textColor: {
          skin: {
            primary: "rgb(var(--color-text-primary) / <alpha-value>)",
            secondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
          },
        },
        colors: {
          background: "rgb(var(--color-background) / <alpha-value>)",
          paper: "rgb(var(--color-paper) / <alpha-value>)",
  
          primary: "rgb(var(--color-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        },
        fontSize: {
          sm: '0.750rem',
          base: '1rem',
          xl: '1.333rem',
          '2xl': '1.777rem',
          '3xl': '2.369rem',
          '4xl': '3.158rem',
          '5xl': '4.210rem',
        },
        fontFamily: {
          heading: 'Kumbh Sans',
          body: 'Kumbh Sans',
        },
        fontWeight: {
          normal: '400',
          bold: '700',
        },
      },
    },
    plugins: [],
  };

