import path from "path";

/** @type {import("prettier").Config} */
const config = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: false,
  endOfLine: "auto",
  jsxSingleQuote: false,
  printWidth: 100,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  overrides: [
    {
      files: "./styles/utilities/motions.css",
      options: {
        printWidth: 50,
      },
    },
  ],
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindAttributes: ["className", "classNames"],
  tailwindFunctions: ["tv", "clsx", "cn"],
  tailwindStylesheet: path.resolve(import.meta.dirname, "./styles/index.css"),
};

export default config;
