/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['cofo-gothic-variable',  
          {
            fontVariationSettings: `"wght" 100`,
          },
          'sans-serif',
        ],
        monospace: ['cofo-sans-mono-variable', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

