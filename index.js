module.exports = {
    env: {
        'es6': true
    },
    extends: ['airbnb-base', 'plugin:lodash/recommended'],
    rules: {
        'max-len': ['error', 120],
        'arrow-parens': ['error', 'as-needed'],
        'comma-dangle': ['error', 'never'],
        'eol-last': ['error'],
        indent: [
            'error',
            4, {
                SwitchCase: 1
            }
        ],
        'linebreak-style': ['error', 'unix'],
        'no-underscore-dangle': [
            'error', {
                allow: ['_id']
            }
        ],
        'object-curly-spacing': ['error', 'never'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
        'lodash/import-scope': [2, 'member'],
        'lodash/matches-prop-shorthand': ['error', 'never'],
        'lodash/prefer-lodash-method': [
            2, {
                ignoreMethods: ['assign', 'find', 'map']
            }
        ],
        'lodash/prop-shorthand': ['error', 'never']
    }
};
