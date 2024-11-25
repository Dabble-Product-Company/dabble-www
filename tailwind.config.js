/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['scale-variable',
          {
            fontVariationSettings: `"wdth" 110, "wght" 400`,
          },
          'sans-serif',
        ],
        monospace: ['input-mono', 'monospace'],
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

