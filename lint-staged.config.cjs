module.exports = {
  '**/*.{js,ts,tsx}': ['eslint --no-error-on-unmatched-pattern'],
  '**/*.{js,ts,tsx,css,md}': ['prettier --write'],
}
