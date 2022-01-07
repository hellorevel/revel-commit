const custom = require("cz-conventional-changelog-for-shortcut/configurable");
const types = require("./types");

module.exports = custom({
  types: types,
  shortcutMode: true,
  maxHeaderWidth: 72,
  minHeaderWidth: 3,
  maxLineWidth: 80,
  skipScope: true,
  shortcutOptional: true,
  shortcutPrefix: "sc",
  shortcutLocation: "post-description",
  shortcutPrepend: "[",
  shortcutAppend: "]",
  shortcutOrganization: "hellorevel",
});
