module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Custom utilities
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
