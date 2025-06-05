import typescriptParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: '2023',
        sourceType: 'module',
        project: './tsconfig.json'
      }
    },
    plugins: {
      prettier: prettierPlugin,
      'simple-import-sort': pluginSimpleImportSort
    },
    rules: {
      'prettier/prettier': ['error', {
        semi: true,
        trailingComma: 'none',
        singleQuote: true,
        printWidth: 120,
        tabWidth: 2,
        useTabs: false
      }],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^(@|components)(/.*|$)'],
            // Side effect imports.
            ['^\\u0000'],
            // Parent imports. Put `..` last.
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Other relative imports. Put same-folder imports and `.` last.
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$']
          ]
        }
      ]
    }
  }
];
