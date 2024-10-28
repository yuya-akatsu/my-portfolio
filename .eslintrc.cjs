module.exports = {
    env: {
      browser: true,
      es2022: true,
      node: true,
    },
    extends: [
      'plugin:astro/recommended',
     'react-app',
      'prettier'
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
    },
    plugins: ['import', 'unused-imports'],
    overrides: [
      {
        files: ['*.astro'],
        parser: 'astro-eslint-parser',
        parserOptions: {
          parser: '@typescript-eslint/parser',
          extraFileExtensions: ['.astro'],
        },
      },
    ],
  }