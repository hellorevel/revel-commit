#!/usr/bin/env node
"use strict";

const path = require("path");
const bootstrap = require("@dionlarson/commitizen/dist/cli/git-cz").bootstrap;

bootstrap({
  cliPath: path.join(__dirname, "../../node_modules/@dionlarson/commitizen"),
  config: {
    path: path.join(__dirname, "./cz-config.js"),
  },
});
