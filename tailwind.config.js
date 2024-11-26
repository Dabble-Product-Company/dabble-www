/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        'magenta': {
          '50': '#fef1fb',
          '100': '#fee5f9',
          '200': '#ffcbf5',
          '300': '#ffa1ea',
          '400': '#ff6fdb',
          '500': '#fa3ac5',
          '600': '#ea18a5',
          '700': '#cc0a87',
          '800': '#a80c6e',
          '900': '#8c0f5d',
          '950': '#560136',
        },
      },
      fontFamily: {
        display: ['scale-variable',
          {
            fontVariationSettings: `"wdth" 125, "wght" 800`,
          },
          'Inter',
          'sans-serif',
        ],
        mono: ['input-mono',
          'Georgia',
          'serif',
        ],
      },
      
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

