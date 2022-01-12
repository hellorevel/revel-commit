# revel-commit

[![npm version](https://img.shields.io/npm/v/revel-commit.svg?style=flat-square)](https://www.npmjs.org/package/cz-conventional-changelog-for-shortcut)
[![npm downloads](https://img.shields.io/npm/dm/revel-commit.svg?style=flat-square)](http://npm-stat.com/charts.html?package=cz-conventional-changelog-for-shortcut&from=2015-08-01)

![Gif of revel-commit being used in the terminal](https://gist.githubusercontent.com/dionlarson/4c369b9a2f9f7bf00eae14751719ccd8/raw/86ec20f9f6dab0489a9e57da9ba28d20dc904c6a/revel-commit.gif)

[Revel](https://www.hellorevel.com/about) Engineering's custom wrapper around [cz-conventional-changelog-for-shortcut](https://github.com/dionlarson/cz-conventional-changelog-for-shortcut), a part of the [commitizen](https://github.com/commitizen/cz-cli) family. Prompts for [conventional changelog](https://github.com/conventional-changelog/conventional-changelog) standard and also prompts for a mandatory Shortcut story.

## Features

- Works seamlessly with semantic-release 🚀
- Works seamlessly with Shortcut smart commits
- Automatically detects the Shortcut story from the branch name

## Quickstart

### Installation

```bash
yarn add -D revel-commit
```

### Usage

```
yarn revel-commit
```

Most Revel repos will have a shorthand setup under `yarn c`, you may prefer to set up a git alias for `git cz`.
