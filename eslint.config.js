import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
    { ignores: ["dist"] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "react-hooks/exhaustive-deps": "off",
            "no-unused-vars": [
                "error",
                {
                    varsIgnorePattern: "^_", // Ignore variables that start with an underscore
                    args: "after-used", // Check function arguments
                    argsIgnorePattern: "^_", // Ignore function arguments that start with an underscore
                },
            ],
        },
    }
);
