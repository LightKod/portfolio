module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arcadeOut: ['ArcadeOut', 'sans-serif'],
        arcadeIn: ['ArcadeIn', 'sans-serif'],
        ka1: ['ka1', 'sans-serif'],
        pressstart: ['"Press Start 2P"', 'cursive'],
        vt323: ['VT323', 'monospace'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.image-render-pixel': {
          imageRendering: 'pixelated',
        },
      });
    },
  ],
};
