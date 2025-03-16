import globals from 'globals';
import eslintJs from '@eslint/js';
import eslintTs from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';
import eslintImport from 'eslint-plugin-import';
import eslintPrettierConfig from 'eslint-config-prettier/flat';

const eslintJsConfig = eslintJs.configs.recommended;
const eslintTsConfig = eslintTs.configs.recommended;
const eslintImportConfig = eslintImport.flatConfigs.recommended;

const eslintReactConfig = {
  ...eslintReact.configs.flat.recommended,
  ...eslintReact.configs.flat['jsx-runtime'],
  languageOptions: {
    ...eslintReact.configs.flat.recommended.languageOptions,
    globals: {
      ...globals.serviceworker,
      ...globals.browser
    }
  }
};

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  {
    settings: {
      'import/resolver': {
        node: true,
        typescript: true
      }
    }
  },
  eslintJsConfig,
  eslintReactConfig,
  eslintImportConfig,
  eslintPrettierConfig,
  ...eslintTsConfig
];
