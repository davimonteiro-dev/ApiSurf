import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // Substitui o "eslint:recommended"
  eslint.configs.recommended,
  // Substitui o "plugin:@typescript-eslint/recommended"
  ...tseslint.configs.recommended,
  {
    // Substitui o "root: true" e define onde o lint deve atuar
    files: ['src/**/*.ts', 'test/**/*.ts'],
    languageOptions: {
      // Substitui o "@typescript-eslint/parser"
      parser: tseslint.parser,
    },
    rules: {
      // Adicione regras extras aqui se precisar
    },
  }
);
