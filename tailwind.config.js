/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#e5e7eb', // Global text color
            h1: {
              color: '#323131', // Custom color for h1 (tomato color)
            },
            h2: {
              color: '#212121', // Custom color for h2 (dodger blue)
            },
            h3: {
              color: '#32cd32', // Custom color for h3 (lime green)
            },
            'h1, h2, h3': {
              'scroll-margin-top': '1rem', // Ensures proper spacing when linked
            },
            blockquote: {
              'padding-right': '125px',
              'padding-left': '20px',
              'margin-top': '20px',
              'margin-bottom': '40px',
              'margin-left': '30px',
              'position': 'relative',
              'border-left': '8px solid #F3CA29'
          },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
