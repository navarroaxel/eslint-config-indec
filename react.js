module.exports = {
    plugins: [
        'lodash'
    ],
    extends: ['airbnb','indec'],
    parser: 'babel-eslint',
    rules: {
        'import/no-extraneous-dependencies': ['off'],
        'react/jsx-space-before-closing': ['error', 'never'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': [
            1, {
                'extensions': ['.js']
            }
        ],
        'lodash/import-scope': [2, 'member'],
        'lodash/matches-prop-shorthand': ['error', 'never'],
        'lodash/prefer-lodash-method': [
            2, {
                'ignoreMethods': ['assign', 'find', 'map']
            }
        ],
        'lodash/prop-shorthand': ['error', 'never']
    }
};
