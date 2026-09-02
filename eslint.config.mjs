import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import eslintConfigPrettier from 'eslint-config-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts'
    ]),

    {
        rules: {
            'padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: 'import', next: 'export' },
                { blankLine: 'always', prev: 'import', next: 'function' },
                { blankLine: 'always', prev: 'import', next: 'const' }
            ],

            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            eqeqeq: ['error', 'always'],
            'react/jsx-no-target-blank': 'error',
            'react/jsx-key': 'error',
            'no-duplicate-imports': 'error'
        }
    },

    eslintConfigPrettier
])

export default eslintConfig
