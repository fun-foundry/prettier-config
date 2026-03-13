import test from 'node:test'
import assert from 'node:assert/strict'
import prettier from 'prettier'
import config from '../src/index.js'

test('exports expected prettier config', () => {
  assert.deepEqual(config, {
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
  })
})

test('can format code with exported config', async () => {
  const formatted = await prettier.format(
    "const hello = ( name ) => { return 'world' }\n",
    {
      ...config,
      parser: 'babel'
    }
  )

  assert.equal(
    formatted,
`const hello = name => {
  return 'world'
}
`)
})
