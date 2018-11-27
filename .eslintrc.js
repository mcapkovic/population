module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": false
    },
    "extends": [
        "eslint:recommended", 
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent":                   [ "error", 4 ],
        "linebreak-style":          [ "error", "unix" ],
        "quotes":                   [ "error", "single" ],
        "semi":                     [ "error", "always" ],
        "no-const-assign":          "warn",
        "no-this-before-super":     "warn",
        "no-undef":                 "warn",
        "no-unreachable":           "warn",
        "no-unused-vars":           "warn",
        "constructor-super":        "warn",
        "valid-typeof":             "warn"
    }
};