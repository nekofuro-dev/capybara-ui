/*
 * This file is for tailwindcss.config.js
 */

const BASE_THEME_CONFIG = {
  primary: '#4263eb',
  'primary-hover': '#3b5bdb',
  'primary-text': '#f8f9fa',
  secondary: '#1098ad',
  'secondary-hover': '#0c8599',
  'secondary-text': '#343a40',
  'background-default': '#F5EBE0',
  'background-paper': '#ffffff',
};

const colorAliasToVariableName = (color) => `--color-${color}`;
const colorAliasToVar = (color) => `var(${colorAliasToVariableName(color)})`;

const COLOR_ALIAS = Object.keys(BASE_THEME_CONFIG);

const THEME_COLOR_VARS = Object.fromEntries(
  COLOR_ALIAS.map((it) => [it, colorAliasToVar(it)])
);

module.exports = {
  BASE_THEME_CONFIG,
  THEME_COLOR_VARS,
  COLOR_ALIAS,
  colorAliasToVariableName,
  colorAliasToVar,
};
