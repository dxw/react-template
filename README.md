# React template

TODO: Replace the above heading with the project name.

## Using this template

Search for TODO across the project to customise the template to a specific
project.

TODO: Remove this section when all TODOs are resolved.

## Technical overview

This project is built with [TypeScript](https://www.typescriptlang.org/) and
[Next.js](https://nextjs.org/). We use
[`styled-jsx`](https://github.com/zeit/styled-jsx) for styling components and
[Jest](https://jestjs.io/), [Cucumber](https://cucumber.io/), and
[Selenium WebDriver](https://seleniumhq.github.io/selenium/docs/api/javascript/)
for building and running tests. We use [ESLint](https://eslint.org/) for linting
and [Prettier](https://prettier.io/) for code formatting. We use
[Docker](https://www.docker.com/) to deploy and run the service.

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

We support running the feature tests in Google Chrome and Firefox, headless or
not.

The following environment variables customize the browser options for testing:

- `TEST_BROWSER` determines the browser to use.

  Accepted values:

  - `chrome` **(default)**
  - `firefox`

- `TEST_HEADLESS` determines if we run the browser in headless mode or not.

  Accepted values:

  - `0` for off
  - `1` for on **(default)**

### Docker support

We support running the feature tests against a Docker image instead of a local
server. Note that everything other than the feature tests that use Selenium
WebDriver will always run on the host system.

The following environment variables customize the Docker options for testing:

- `TEST_DOCKER_IMAGE` **(required)** determines the Docker image to run against.

  You must have already built or pulled the image.

To run the feature tests:

```bash
npm run test:feature:docker
```

To run the full test suite:

```bash
npm run test:all:docker
```

To run the full test suite, including format checking and linting:

```bash
npm run test:docker
```

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
