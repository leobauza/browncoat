[![Build Status](https://travis-ci.org/leobauza/browncoat.svg?branch=master)](https://travis-ci.org/leobauza/browncoat)

Browncoat 1.0.0-alpha.1
---

`Tracey`

## About

Browncoat is a front-end prototype tool. Documentation is served from the `/docs` directory. Application is served from the `/web` directory. Both use [browsersync's](https://www.browsersync.io/) built-in static server.

## Install

Make sure Node 0.12.x is installed.

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

## Visual Regression Testing with Wraith [BROKEN]

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

Version change checklist:

- MUST update `main.json` version
- MUST update `package.json` version
- MUST update `README.md` version
- Major updates MUST change codename
- Minor updates MAY change codename
- Patch updates MUST NOT change codename
- Update important changes
- Update `changelog.md`

## Commits

Commits MUST stick to this format:

```bash
# type: "version", "task", "chore", or "patch"
# optional: short name (do not capitalize)
# description: A short description (do not capitalize)
# additional: Any additional information MUST be added after 2 returns (do capitalize)
$ type(optional): description
>
> Additional
# eg.
$ task: add scss section to docs
$ chore: clean up tests
$ version(0.5.1): prepare release
$ patch: fix failing Tavis CI tests
```

## Important Changes from v1.0.0-alpha

- Fix failing tests
- Add `.htacess` and `favicon` to docs for `browncoat.leobauza.com` release deployment
- Updated `.gitignore` and `README.md`
