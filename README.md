[![Build Status](https://travis-ci.org/leobauza/browncoat.svg?branch=feat/0.5.1)](https://travis-ci.org/leobauza/browncoat)

Browncoat 0.5.0
---

`Reconstruction`

## About

Browncoat is a front-end styleguide documentation framework (FSDF) and prototype tool. The application `npm run gulp` and documentation `npm run docs` are served up using [browsersync's](https://www.browsersync.io/) built-in static server.

## Install

Install node module dependencies and run the documentation.

```bash
# Install dependencies
npm install

# Opens browser to localhost:3000 to view docs
npm run docs

# Opens browser to localhost:3000 to view app (empty by default)
npm run gulp

# Run Tests
npm test
```

## Visual Regression Testing with Wraith

Visual regression testing added as of `version 0.4`. Uses wraith, a screenshot comparison tool created by BBC news. Requires Wraith be installed. Instructions at their [github page](https://github.com/BBC-News/wraith).

To set a baseline for your project run:

`wraith history config`

This creates a baseline of shots based on config file settings.

After making changes run:

`wraith latest config`

This will create a comparison between the history and latest changes.

## Versioning

Browncoat uses [semver](http://semver.org/) specifications.

```
<major>.<minor>.<patch>
```

## Contribute

Commits should be formatted as follows:

```bash
# type: version, task, chore, or patch
# optional: short name
# description: A short description
# additional: Any additional information MUST be added after 2 returns
$ type(optional): description
>
> Additional
# eg.
$ task: Add scss section to docs
$ chore: Clean up tests
$ version(0.5.1): prepare release
$ patch: Fix failing Tavis CI tests
```

## Todo

- Production gulp task
- Wraith update/docs [broken]

## Important Changes from v0.4.0

- Major changes to SCSS structure
- Added webpack
- Added browsersync (no need for virtual host set up anymore)
- `gulp/` directory to `gulpfile.js/` directory
- Angular.js application for documentation
- Abandon PHP
- Rewrite of docs
- Tests with Karma/Jasmine
- Travis CI integration
