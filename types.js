// Some space characters manually added to descriptions to adjust spacing.
// Emoji sometimes use zero width characters and this messes with padding
// calculation done by cz-conventional-changelog-for-shortcut.

module.exports = {
  "โจ feat": {
    description: "A new feature",
    title: "Features",
  },
  "๐ fix": {
    description: "A bug fix",
    title: "Bug Fixes",
  },
  "๐จ ui": {
    description: "Updates to the UI and style files",
    title: "UI",
  },
  "๐ธ ux": {
    description: "Improvements to user experience / usability",
    title: "Bug Fixes",
  },
  "๐ seo": {
    description: "Improvements to SEO",
    title: "SEO",
  },
  "โก perf": {
    description: "Improvements that will make your code perform better",
    title: "Performance",
  },
  "๐ security": {
    description: "A security issue fix",
    title: "Security",
  },
  "๐ docs": {
    description: "Documentation only changes",
    title: "Documentation",
  },
  "โ test": {
    description: "Adds missing tests or correcting existing tests",
    title: "Tests",
  },
  "โป๏ธ refactor": {
    description: "A code change that neither fixes a bug nor adds a feature",
    title: "Code Refactoring",
  },
  "๐งผ style": {
    description: "Improvements to structure / format of the code",
    title: "Style",
  },
  "๐ง chore": {
    description: "Other changes that don't modify src or test files",
    title: "Chores",
  },
  "๐ท build": {
    description:
      "Changes that affect the build system or external dependencies",
    title: "Builds",
  },
  "๐ ci": {
    description: "Changes to our CI configuration files and scripts",
    title: "Continuous Integrations",
  },
  "๐ revert": {
    description: "Reverts a previous commit",
    title: "Reverts",
  },
  "๐ง wip": {
    description: "A commit not meant to be included in main branch",
    title: "Work in Progress",
  },
  "๐ฑ feat": {
    description: "A new feature specific to the native mobile apps",
    title: "Mobile Features",
  },
};
