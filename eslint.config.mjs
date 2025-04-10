import globals from "globals"
import pluginJs from "@eslint/js"
//import eslintConfigPrettier from "eslint-config-prettier"
import stylisticJs from "@stylistic/eslint-plugin-js"

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,

  {
    ignores: ["main.js", "webpack.config.js"],
  },

  {
    plugins: {
      "@stylistic/js": stylisticJs,
    },

    rules: {
      "@stylistic/js/indent": ["warn", 2],
      "@stylistic/js/keyword-spacing": ["warn", {
        "after": true,
        "before": true,
      }],
      "@stylistic/js/no-multiple-empty-lines": "warn",
      "no-console": "warn",
      "@stylistic/js/eol-last": ["warn", "always"],
      "@stylistic/js/no-trailing-spaces": "warn",
      "operator-assignment": ["error", "always"],
      "no-inner-declarations": ["error", "functions", {
        "blockScopedFunctions":
          "disallow"
      },],
    },

  },
  //eslintConfigPrettier,
]
