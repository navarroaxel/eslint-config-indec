module.exports = {
    env: {
        "es6": true
    },
    extends: [
        "airbnb-base"
    ],
    rules: {
        "max-len": [
            "error",
            120
        ],
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "eol-last": [
            "error"
        ],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-underscore-dangle": [
            "error",
            {
                "allow": [
                    "_id"
                ]
            }
        ],
        "object-curly-spacing": [
            "error",
            "never"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
