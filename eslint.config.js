import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

export default tseslint.config(
  // 1. Global ignores (optional but recommended)
  { ignores: ['dist', 'node_modules', '.config'] },

  // 2. Base JS Recommended
  js.configs.recommended,

  // 3. TypeScript Recommended
  ...tseslint.configs.recommended,

  // 4. Vue Recommended
  ...pluginVue.configs['flat/essential'],

  // 5. Custom Rules & Language Options
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node, // Useful if you have build scripts
      },
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.vue'],
      },
    },
    rules: {
      // Logic & Safety
      eqeqeq: 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-var': 'error',
      'prefer-const': 'error',

      // TypeScript specific
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      // Vue specific
      'vue/multi-word-component-names': 'warn',
      'vue/html-self-closing': [
        'error',
        {
          html: { void: 'always', normal: 'always', component: 'always' },
        },
      ],
      'vue/no-v-html': 'warn', // Prevents XSS attacks
      'vue/require-default-prop': 'off', // Optional: nice if you use script setup
    },
  },
)
