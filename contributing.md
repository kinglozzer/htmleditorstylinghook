# Contributing to this module

This module only moves forward as we each build the features we need. We love pull requests!

### Here is a quick list of ways you can contribute:

 * __Test the latest code__. Install it and try it out.
 * __Submit issues and ideas__. These can be bugs, or ideas. Be descriptive and detailed. Its better to discuss and design ideas before writing code. Please first check the [list of existing issues](https://github.com/kinglozzer/htmleditorstylinghook/issues) to make sure an identical one doesn't exist already.

If you would like to contribute code, please [fork this project](https://github.com/kinglozzer/htmleditorstylinghook). You
can then make changes in feature branches via git, and submit pull requests, which will be reviewed and merged into the
code base. If merge is not appropriate, instruction will be given on the best action(s) to take.

## Development Guidelines

We try to match [SilverStripe's guidelines](http://docs.silverstripe.org/en/contributing/)
as closely as possible. In some ways our approach will differ, but it is a good idea to read their guidelines first.

### PHP

Write PSR-2 compliant PHP code and make sure your code matches the SilverStripe coding conventions.

### JavaScript

This module uses [webpack](https://webpack.js.org/) to build JS files.
This is in line with how the SilverStripe core-modules build their client-assets.

JavaScript should be written as ES6.
Plain JavaScript file should use the `.js` extension.
The files will be transpiled to a single (browser consumable) JavaScript file using webpack and babel.

#### Building

First of all, you need to install the [node package manager (npm)](https://nodejs.org/en/) on your system.
Then do the following:

```bash
cd ./vendor/kinglozzer/htmleditorstylinghook
npm install
```

This will install all the npm dependencies in `node_modules`

#### Development

During development, you can use the following command to create a development build:

```bash
npm run build
```

#### Release

To create a release build, do:

```bash
npm run release
```

## Workflow

We use [Github Flow](https://guides.github.com/introduction/flow/) which basically means:

1. Create your own fork
2. Create a feature branch on your fork per feature or unit of work
3. Submit a pull request

### Branches

Our branching scheme follows the one used by SilverStripe. `master` will always be the branch for newest development and separate branches will be created for older releases.

Example: If the current development in `master` goes towards version 3, there will be a `2` and `1` branch for fixes to these older versions. If needed, branches for minor versions can be created as well (eg. a 2.x branch for work on a new minor release).

### Releases

Releases follow Semantic Versioning. Patches for specific older versions can be made by creating
a branch from the appropriate tag.

## Good development practices

* Write a new unit test for a new bugs or features
* Maintain backwards compatibility, or provide migration scripts, and help
* Full support of standard SilverStripe framework features
* Prefer SilverStripe core framework features over 3rd-party add-ons
* Graceful degradation of javascript
* Make use of design patterns
* Comment code thoroughly
* Write and update documentation along with changes
* Major changes need to be backed up with solid reasoning
* Install an [EditorConfig](http://editorconfig.org/#download) plugin for your editor or IDE.
