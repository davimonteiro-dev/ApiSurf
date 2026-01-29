// Arquivo de configuração do ESLint (Flat Config) para este projeto.
// Ele combina a configuração base do ESLint com as regras específicas para TypeScript
// fornecidas pelo pacote `typescript-eslint`.

import eslint from '@eslint/js'; // Utilitários e configurações base do ESLint (ex: eslint:recommended)
import tseslint from 'typescript-eslint'; // Fornece parser e regras específicas para TypeScript

// `tseslint.config(...)` cria uma configuração pronta para uso que combina várias fontes.
// A ordem importa: entradas posteriores podem sobrescrever configurações anteriores.
export default tseslint.config(
  // Configuração base recomendada do ESLint (equivalente a usar "eslint:recommended").
  // Contém regras gerais para JavaScript que ajudam a evitar erros comuns.
  eslint.configs.recommended,

  // Regras recomendadas do plugin TypeScript (equivalente a "plugin:@typescript-eslint/recommended").
  // Traz validações e boas práticas específicas para código TypeScript.
  ...tseslint.configs.recommended,

  // Bloco de configuração adicional: define quais arquivos o lint vai considerar
  // e configurações de linguagem (parser) e regras específicas do projeto.
  {
    // Em Flat Config o campo `files` determina os padrões de arquivos que este
    // bloco deve atingir (aqui: todos os .ts em `src` e `test`).
    files: ['src/**/*.ts', 'test/**/*.ts'],

    languageOptions: {
      // Define o parser que interpreta TypeScript. É o análogo moderno de
      // configurar "@typescript-eslint/parser" em configs antigas.
      parser: tseslint.parser,
      // Aqui também é possível adicionar `parserOptions` (target, project, etc.)
      // se você precisar de análise mais avançada (ex.: checar tipos com `project`).
    },

    // `rules` é onde você pode habilitar, desabilitar ou ajustar regras específicas
    // do ESLint ou do plugin TypeScript. Regras aqui sobrescrevem as recomendadas acima.
    rules: {
      // Exemplo: para desabilitar uma regra use ""nome-da-regra": "off"",
      // ou para mudar o nível: "nome-da-regra": ["warn", { ...opções }]

      // Adicione suas regras personalizadas abaixo conforme as necessidades do projeto.
    },
  }
);
