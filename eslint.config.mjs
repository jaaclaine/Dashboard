import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import eslintConfigPrettier from 'eslint-config-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,

    globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),

    {
        plugins: {
            'simple-import-sort': simpleImportSort,
            'unused-imports': unusedImports
        },

        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',

            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': 'warn',
            'padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: 'import', next: 'export' },
                { blankLine: 'always', prev: 'import', next: 'function' },
                { blankLine: 'always', prev: 'import', next: 'const' }
            ],

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
