/**
 * Lint-staged configuration file for Next.js. The Lint-staged library allows you to run scripts on staged files.
 * @see https://nextjs.org/docs/pages/building-your-application/configuring/eslint#lint-staged
 */

const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*.{js,jsx,ts,tsx}": ["prettier --write --config ./.prettierrc", buildEslintCommand],
};
