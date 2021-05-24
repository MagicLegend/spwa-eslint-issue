module.exports = {
    root: true,
    extends: [
        'airbnb',
        'plugin:array-func/recommended'
    ],
    env: {
        browser: true
    },
    parser: 'babel-eslint',
    globals: {
        window: true,
        document: true,
        globalThis: true,
        sessionStorage: true,
        localStorage: true,
        jest: true,
        PureComponent: true,
        middleware: true,
        __: true,
        workbox: true,
        importScripts: true,
        React: true
    },
    plugins: [
        '@scandipwa/scandipwa-guidelines',
        'simple-import-sort',
        'import',
        'react',
        'import',
        'jest',
        'babel',
        'fp',
        '@scandipwa/scandipwa-guidelines'
    ],
    overrides: [{
        files: ['*.config.js', 'src/config/**'],
        rules: {
            '@scandipwa/scandipwa-guidelines/only-one-class': 'off',
            '@scandipwa/scandipwa-guidelines/derived-class-names': 'off',
            '@scandipwa/scandipwa-guidelines/use-namespace': 'off',
            '@scandipwa/scandipwa-guidelines/export-level-one': 'off',
            '@scandipwa/scandipwa-guidelines/use-named-export': 'off',
            '@scandipwa/scandipwa-guidelines/create-config-files': 'off'
        }
    }],
    ignorePatterns: ['*.test.*', '**/vendor/*',
        '**/node_modules/*', './app/design/frontend/Scandiweb/pwa/node_modules/*'],
    rules: {
        '@scandipwa/scandipwa-guidelines/file-structure': 'error',
        '@scandipwa/scandipwa-guidelines/only-one-class': 'error',
        '@scandipwa/scandipwa-guidelines/derived-class-names': 'error',
        '@scandipwa/scandipwa-guidelines/no-middleware': 'error',
        '@scandipwa/scandipwa-guidelines/use-namespace': 'error',
        '@scandipwa/scandipwa-guidelines/use-magic-construct': 'error',
        '@scandipwa/scandipwa-guidelines/export-level-one': 'error',
        '@scandipwa/scandipwa-guidelines/no-extensible-base': 'error',
        '@scandipwa/scandipwa-guidelines/always-both-mappings': 'error',
        '@scandipwa/scandipwa-guidelines/use-named-export': 'error',
        '@scandipwa/scandipwa-guidelines/create-config-files': 'error',
        // Below rules are not present in v1 of @scandipwa/eslint-plugin-scandipwa-guidelines
        // '@scandipwa/scandipwa-guidelines/no-duplicate-namespaces': 'error',
        // '@scandipwa/scandipwa-guidelines/use-license': 'error',
        'simple-import-sort/sort': ['error', {
            groups: [
                // side effect imports (ignore styles)
                // import 'Util/Polyfill'
                ['(?!.*\\.style)^\\u0000'],

                // anything that starts with @ and lowercase
                // import PropTypes from 'prop-types';
                ['^@?[a-z]'],

                // anything but a dot
                // import { isSignedIn } from 'Util/Auth';
                ['^[^.]'],

                // starting with dot (ignore styles)
                // import AddToCart from './AddToCart.component';
                ['^\\..+(?!\\.style)'],

                // style imports
                // import './AddToCart.style'
                ['.+\\.style']
            ]
        }],
        'arrow-parens': ['error', 'always'],
        'sort-imports': 'off',
        'import/order': 'off',
        'import/no-cycle': ['error', {
            maxDepth: 4
        }],
        'fp/no-let': 'error',
        'fp/no-arguments': 'error',
        'fp/no-loops': 'error',
        'fp/no-delete': 'error',
        'no-var': 'error',
        'css-rcurlyexpected': 0,
        'react/static-property-placement': ['error', 'static public field'],
        'react/state-in-constructor': 'off',
        'no-restricted-globals': ['error', 'isFinite', 'isNaN'],
        'max-len': [2, {
            ignoreComments: true,
            ignoreUrls: true,
            code: 120
        }],
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'no-shadow': 0,
        'class-methods-use-this': 0,
        camelcase: 0,
        'no-underscore-dangle': 'off',
        'template-curly-spacing': 'off',
        'computed-property-spacing': 'off',
        'import/no-unresolved': 0,
        'import/named': 0,
        'no-plusplus': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-curly-spacing': [2, {
            when: 'always',
            allowMultiline: false,
            children: true
        }],
        'import/no-named-as-default': 0,
        'import/no-named-as-default-member': 0,
        // "react/jsx-max-depth": [2, { "max": 2 }],
        'react/jsx-no-useless-fragment': [2, {
            max: 2
        }],
        curly: [2, 'all'],
        'brace-style': [2, '1tbs', {
            allowSingleLine: false
        }],
        'react/sort-comp': [2, {
            order: [
                'type-annotations',
                'static-variables',
                'static-methods',
                'instance-variables',
                '__construct',
                'lifecycle',
                'everything-else',
                'render'
            ]
        }],
        'react/jsx-filename-extension': 0,
        'react/prefer-stateless-function': 0,
        'react/button-has-type': 0,
        'react/jsx-indent': 0,
        'react/jsx-indent-props': 2,
        'react/jsx-no-bind': [2, {
            ignoreDOMComponents: false,
            ignoreRefs: true,
            allowArrowFunctions: false,
            allowFunctions: false,
            allowBind: false
        }],
        'react/forbid-prop-types': [2, {
            forbid: ['className']
        }],
        'react/forbid-component-props': [2, {
            forbid: ['className']
        }],
        'react/forbid-dom-props': [2, {
            forbid: ['className']
        }],
        'react/no-deprecated': 2,
        'babel/semi': 1,
        'new-cap': ['error', {
            newIsCap: true,
            newIsCapExceptions: ['middleware']
        }],
        'no-param-reassign': ['error', {
            props: true,
            ignorePropertyModificationsFor: ['acc', 'sum']
        }],
        'no-magic-numbers': ['error', {
            ignore: [1, 0, 2, -1]
        }],
        indent: [
            'error',
            4,
            {
                ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild']
            }
        ],
        'comma-dangle': [
            'error',
            'never'
        ],
        'no-case-declarations': 'off',
        'jsx-a11y/label-has-for': 0,
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*'
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var']
            },
            {
                blankLine: 'always',
                prev: ['block', 'block-like', 'multiline-block-like', 'multiline-expression', 'multiline-const', 'multiline-let', 'multiline-var'],
                next: 'return'
            },
            {
                blankLine: 'any',
                prev: ['singleline-const', 'singleline-let', 'singleline-var'],
                next: '*'
            }
        ],
        'prefer-destructuring': ['error', {
            array: false,
            object: true
        }, {
            enforceForRenamedProperties: false
        }],
        'lines-between-class-members': ['error', 'always'],
        'no-extra-semi': 'error'
    }
};
