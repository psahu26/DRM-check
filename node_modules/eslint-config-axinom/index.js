module.exports = {
    "ecmaFeatures": {
        "blockBindings": true
    },
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "rules": {
        "comma-dangle": [2, "never"],
        "no-cond-assign": [2, "always"],
        "no-console": 0,
        "no-constant-condition": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty-character-class": 2,
        "no-empty": 2,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-parens": [2, "functions"],
        "no-extra-semi": 2,
        "no-func-assign": 2,
        // FUTURE: Maybe also for variables? That rather assumes ES6 (let) is always available, though.
        "no-inner-declarations": [2, "functions"],
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-negated-in-lhs": 2,
        "no-obj-calls": 2,
        "no-regex-spaces": 2,
        "no-sparse-arrays": 2,
        "no-unexpected-multiline": 2,
        "no-unreachable": 2,
        "use-isnan": 2,
        "valid-typeof": 2,

        "accessor-pairs": 2,
        "block-scoped-var": 2,
        "complexity": [1, 30],
        "consistent-return": 2,
        "curly": 0,
        "default-case": 0,
        "dot-location": [
            2,
            "property"
        ],
        // Not sure about this one. Does it really matter? Set to 1 to at least point out potential cases.
        "dot-notation": 1,
        "eqeqeq": [
            2,
            "allow-null"
        ],
        "guard-for-in": 2,
        "no-alert": 2,
        "no-caller": 2,
        "no-div-regex": 0,
        "no-else-return": 0,
        "no-empty-label": 0,
        "no-empty-pattern": 2,
        "no-eq-null": 0,
        "no-eval": 2,
        "no-extend-native": 0,
        "no-extra-bind": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-implicit-coercion": 2,
        "no-implied-eval": 2,
        "no-invalid-this": 2,
        "no-iterator": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-magic-numbers": [
            1,
            {
                "ignore": [
                    -1,
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10
                ]
            }
        ],
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-native-reassign": 2,
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-new": 2,
        "no-octal-escape": 2,
        "no-octal": 2,
        "no-param-reassign": 0,
        "no-process-env": 2,
        "no-proto": 2,
        "no-return-assign": 2,
        "no-script-url": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-throw-literal": 2,
        "no-unused-expressions": 2,
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-void": 2,
        "no-warning-comments": 0,
        "no-with": 2,
        "radix": 2,
        "vars-on-top": 0,
        "wrap-iife": [2, "inside"],
        "yoda": [2, "never"],

        "strict": [2, "function"],

        "init-declarations": [2, "always"],
        "no-catch-shadow": 0,
        "no-delete-var": 2,
        "no-label-var": 2,
        "no-shadow-restricted-names": 2,
        "no-shadow": 2,
        "no-undef-init": 2,
        "no-undef": [2, { "typeof": true }],
        "no-undefined": 0,
        "no-unused-vars": [2, { "vars": "all", "args": "none" }],
        "no-use-before-define": [2, "nofunc"],

        "array-bracket-spacing": [
            2,
            "never"
        ],
        "block-spacing": [
            2,
            "always"
        ],
        "brace-style": [
            2,
            "1tbs"
        ],
        "camelcase": 2,
        "comma-spacing": 2,
        "comma-style": 2,
        "func-names": 0,
        "func-style": [
            2,
            "declaration"
        ],
        "key-spacing": 2,
        "keyword-spacing": 2,
        "new-cap": 2,
        "new-parens": 2,
        "no-array-constructor": 2,
        "no-lonely-if": 2,
        "no-nested-ternary": 2,
        "no-new-object": 2,
        "no-spaced-func": 2,
        "no-unneeded-ternary": 2,
        "object-curly-spacing": [
            2,
            "always"
        ],
        "one-var": [
            1,
            "never"
        ],
        "operator-assignment": [
            2,
            "always"
        ],
        "padded-blocks": [
            2,
            "never"
        ],
        "quote-props": 2,
        "semi-spacing": 2,
        "semi": [
            2,
            "always"
        ],
        "space-before-blocks": 2,
        "space-before-function-paren": [
            2,
            {
                "anonymous": "always",
                "named": "never"
            }
        ],
        "space-in-parens": 2,
        "space-infix-ops": 2,
        "space-unary-ops": 2,
        "spaced-comment": 2
    }
};