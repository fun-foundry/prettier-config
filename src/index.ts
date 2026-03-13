import type { Config } from 'prettier'

const prettierConfig = {
  arrowParens: 'avoid',
  bracketSameLine: false,
  bracketSpacing: true,
  jsxSingleQuote: true,
  printWidth: 120,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false
} satisfies Config

export default prettierConfig
