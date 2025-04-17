import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off", // Deshabilitar la regla de comillas no escapadas
      "@typescript-eslint/no-unused-vars": "off", // Deshabilitar la regla de variables no utilizadas
    },
  },
];

export default eslintConfig;
