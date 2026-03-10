# @fun-foundry/prettier-config

Opinionated Prettier configuration maintained by fun-foundry.

This package provides a shared Prettier configuration for JavaScript / TypeScript projects.

## Installation

Install both Prettier and this configuration package.

```sh
npm install --save-dev prettier @fun-foundry/prettier-config
```

or

```sh
yarn add -D prettier @fun-foundry/prettier-config
```

or

```sh
pnpm add -D prettier @fun-foundry/prettier-config
```

## Usage

Create a Prettier configuration file and import this package.

Example: `prettier.config.js`

```js
import config from '@fun-foundry/prettier-config'

export default config
```

Example: `prettier.config.mjs`

```js
import config from '@fun-foundry/prettier-config'

export default config
```

Example: `prettier.config.ts`

```ts
import config from '@fun-foundry/prettier-config'

export default config
```

## Customization

You can extend this config and override individual options in your project.

Example: `prettier.config.js`

```js
import config from '@fun-foundry/prettier-config'

export default {
  ...config,
  printWidth: 100,
  semi: true
}
```

This is useful when you want to keep the base style from this package while adapting a few rules for a specific project.

## Requirements

- Node.js >= 18
- Prettier >= 3 < 4

## License

[MIT](LICENSE)
