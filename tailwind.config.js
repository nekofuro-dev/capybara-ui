/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { THEME_COLOR_VARS } = require('./src/features/dynaTheme/themeModule.js');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: THEME_COLOR_VARS,
    },
  },
  plugins: [],
};
