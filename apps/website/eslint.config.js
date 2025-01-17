import globals from 'globals';
import eslintJs from '@eslint/js';
import eslintTs from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';

const eslintJsConfig = eslintJs.configs.recommended;
const eslintTsConfig = eslintTs.configs.recommended;

const eslintReactConfig = {
  ...eslintReact.configs.flat.recommended,
  ...eslintReact.configs.flat['jsx-runtime'],
  languageOptions: {
    ...eslintReact.configs.flat.recommended.languageOptions,
    globals: {
      ...globals.serviceworker,
      ...globals.browser,
    },
  },
};

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  eslintJsConfig,
  eslintReactConfig,
  ...eslintTsConfig,
];
