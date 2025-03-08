import globals from 'globals';
import eslintJs from '@eslint/js';
import eslintTs from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';
import eslintImport from 'eslint-plugin-import';

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

eslintImport = {
...importPlugin.flatConfigs.recommended,
  files: ['**/*.{js,mjs,cjs}'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'off',
    'import/no-dynamic-require': 'warn',
    'import/no-nodejs-modules': 'warn',
  },
}

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  eslintJsConfig,
  eslintReactConfig,
  eslintImport,
  ...eslintTsConfig,
];
