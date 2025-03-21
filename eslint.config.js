import js from "@eslint/js"
import globals from "globals"

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
    },
    rules: {
      // Possible errors
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

      // Best practices
      "curly": ["error", "all"],
      "eqeqeq": ["error", "always"],
      "no-var": "error",
      "prefer-const": "error",

      // Stylistic
      "indent": ["error", 2],
      "quotes": ["error", "double"],
      "semi": ["error", "never"],
      "comma-dangle": ["error", "always-multiline"],
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],

      // ES6
      "arrow-spacing": ["error", { "before": true, "after": true }],
      "no-useless-constructor": "error",
    },
    ignores: ["dist/", "node_modules/"],
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
]
