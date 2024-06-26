module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'filenames-simple'],
    extends: [
        'plugin:@typescript-eslint/all',
        'plugin:prettier/recommended',
        'eslint:all',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'plugin:unicorn/all',
        'plugin:import/recommended'
    ],
    root: true,
    env: {
        node: true,
        jest: true,
        es2022: true
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 1,
        '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true }],
        'no-console': ['error'],
        semi: [2, 'always'],
        eqeqeq: [2, 'always'],
        'eol-last': [2, 'always'],
        'no-unreachable': 2,
        'import/no-unresolved': 'off',
        'import/no-duplicates': ['error', { 'prefer-inline': true }],
        'default-param-last': 1,
        'array-callback-return': 'off',
        'no-loop-func': 'off',
        'no-implicit-coercion': 'off',
        'no-multi-spaces': 2,
        'space-before-blocks': 2,
        'newline-before-return': 2,
        'no-unexpected-multiline': 2,
        'no-return-await': 2,
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/parameter-properties': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/prefer-reduce-type-parameter': 'off',
        '@typescript-eslint/init-declarations': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/max-params': 'off',
        'no-duplicate-imports': 1,
        '@typescript-eslint/class-methods-use-this': 'off',
        camelcase: 2,
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'type-imports',
                fixStyle: 'inline-type-imports'
            }
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'interface',
                format: ['PascalCase'],
                custom: {
                    regex: '^I[A-Z]',
                    match: true
                }
            },
            {
                selector: 'variable',
                types: ['boolean'],
                format: ['PascalCase'],
                prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'had']
            },
            {
                selector: ['function', 'method'],
                modifiers: ['private'],
                format: ['camelCase'],
                leadingUnderscore: 'require'
            },

            {
                selector: 'variable',
                modifiers: ['const'],
                format: ['UPPER_CASE', 'camelCase']
            }
        ],
        'no-magic-numbers': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        'no-else-return': 'error',
        'no-undef': 'off',
        'new-cap': 'off',
        'sort-keys': 'off',
        'sort-imports': 'off',
        'no-inline-comments': 'off',
        'line-comment-position': 'off',
        'no-empty-function': 'off',
        'init-declarations': 'off',
        'no-shadow': 'off',
        'no-use-before-define': 'off',
        'no-undefined': 'off',
        'one-var': 'off',
        'no-ternary': 'off',
        no_underscore_dangle: 'off',
        'no-underscore-dangle': 'off',
        'max-params': 'off',
        'max-classes-per-file': 'off',
        'no-param-reassign': 'off',
        'no-continue': 'off',
        complexity: 'off',
        'id-length': 'off',
        'consistent-return': 'off',
        'max-statements': 'off',
        'no-unused-expressions': 'off',
        'require-unicode-regexp': 'off',
        'prefer-named-capture-group': 'off',
        'no-warning-comments': 'off',
        'sort-vars': 'off',
        'func-style': 'off',
        'max-lines-per-function': 'off',
        'no-await-in-loop': 'off',
        'no-void': 'off',
        'no-plusplus': 'off',
        'max-depth': 1,
        'require-atomic-updates': 'off',
        'max-lines': 'off',
        'class-methods-use-this': 'off',
        'no-unused-vars': 'error',
        'filenames-simple/naming-convention': ['error'],
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/consistent-return': 'off',
        'multiline-comment-style': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-extraneous-class': [
            'error',
            {
                allowWithDecorator: true
            }
        ],
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
        'unicorn/prefer-top-level-await': 'error',
        'unicorn/no-await-expression-member': 'error',
        'unicorn/no-null': 'error',
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-keyword-prefix': 'off',
        'arrow-body-style': 'off',
        'capitalized-comments': 'off',
        'unicorn/no-nested-ternary': 'off',
        'prefer-destructuring': [
            'error',
            {
                VariableDeclarator: {
                    array: true,
                    object: true
                },
                AssignmentExpression: {
                    array: true,
                    object: true
                }
            },
            {
                enforceForRenamedProperties: false
            }
        ],
        '@typescript-eslint/member-ordering': 'error'
    },
    overrides: [
        {
            files: ['src/modules/**/*.spec.ts'],
            rules: {
                'no-unused-vars': 'off'
            }
        }
    ]
};
