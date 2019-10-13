# React template

TODO: Replace the above heading with the project name.

## Using this template

Search for TODO across the project to customise the template to a specific
project.

TODO: Remove this section when all TODOs are resolved.

## Dependencies

TODO: Document any external dependencies required to run the app locally.

- [Node.js](https://nodejs.org/)

  We assume you are using the version of Node.js documented in
  [`.node-version`](.node-version). We recommend using
  [nodenv](https://github.com/nodenv/nodenv) to manage Node.js versions.

- Google Chrome or Firefox

  We use these for running feature tests locally.

## Getting started

TODO: Document how a developer can get the repository set up for development.

1. Install the required packages:

   ```bash
   npm install
   ```

1. Run the development server:

   ```bash
   npm run dev
   ```

1. Navigate to [`http://localhost:3000`](http://localhost:3000).

## Running the tests

TODO: Document how a developer can run the tests locally.

We use [Jest](https://jestjs.io/) for testing. Feature tests are driven by
[Selenium Webdriver](https://seleniumhq.github.io/selenium/docs/api/javascript/)
to test in browser.

To run the unit tests:

```bash
npm run test:unit
```

To run the unit tests, updating changed snapshots:

```bash
npm run test:unit:update
```

To run the unit tests in watch mode:

```bash
npm run test:unit:watch
```

To run the feature tests:

```bash
npm run test:feature
```

To run the feature tests, updating changed snapshots:

```bash
npm run test:feature:update
```

To run the feature tests in watch mode:

```bash
npm run test:feature:watch
```

To run the full test suite:

```bash
npm run test:all
```

To run the full test suite, including format checking and linting:

```bash
npm test
```

### Browser support

We support running the feature tests in Google Chrome and Firefox. By default,
we run Google Chrome in headless mode.

To run in Firefox, set `TEST_BROWSER=firefox` in your environment.

To run non-headless, set `HEADLESS=0` in your environment.

## Formatting the code

We use [Prettier](https://prettier.io/) to format our code. There are lots of
[editor integrations](https://prettier.io/docs/en/editors.html) available, and
the style is enforced by a Git pre-commit hook.

To run the formatter:

```bash
npm run format
```

## Linting the code

We use [ESLint](https://eslint.org/), in addition to TypeScript's compiler, for
verifying correctness and maintainability of code.

To run the linter:

```bash
npm run lint
```

To run the linter in fix mode:

```bash
npm run lint:fix
```

## Architecture decision records

We use ADRs to document architecture decisions that we make. They can be found
in `docs/adr` and contributed to with
[adr-tools](https://github.com/npryce/adr-tools).

## Access

TODO: Document how people can find the service and its different environments.

## Source

This repository was bootstrapped from dxw's
[`react-template`](https://github.com/dxw/react-template).
