// tailwind.config.js

module.exports = {
    theme: {
      extend: {},
    },
    plugins: [
      function ({ addUtilities }) {
        const newUtilities = {
          '.shake': {
            animation: 'shake 0.5s infinite',
          },
        };
        addUtilities(newUtilities, ['responsive', 'hover']);
      },
    ],
  };
  