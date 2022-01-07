// Some space characters manually added to descriptions to adjust spacing.
// Emoji sometimes use zero width characters and this messes with padding
// calculation done by cz-conventional-changelog-for-shortcut.

module.exports = {
  "✨ feat": {
    description: "A new feature that is long",
    title: "Features",
  },
  "🐞 fix": {
    description: " A bug fix",
    title: "Bug Fixes",
  },
  "🎨 ui": {
    description: " Updates to the UI and style files",
    title: "UI",
  },
  "🚸 ux": {
    description: " Improvements to user experience / usability",
    title: "Bug Fixes",
  },
  "🔎 seo": {
    description: " Improvements to SEO",
    title: "SEO",
  },
  "⚡ perf": {
    description: "Improvements that will make your code perform better",
    title: "Performance",
  },
  "🔐 security": {
    description: " A security issue fix",
    title: "Security",
  },
  "📚 docs": {
    description: " Documentation only changes",
    title: "Documentation",
  },
  "✅ test": {
    description: "Adds missing tests or correcting existing tests",
    title: "Tests",
  },
  "♻️ refactor": {
    description: " A code change that neither fixes a bug nor adds a feature",
    title: "Code Refactoring",
  },
  "🧼 style": {
    description: " Improvements to structure / format of the code",
    title: "Style",
  },
  "🔧 chore": {
    description: " Other changes that don't modify src or test files",
    title: "Chores",
  },
  "👷 build": {
    description:
      " Changes that affect the build system or external dependencies",
    title: "Builds",
  },
  "💚 ci": {
    description: " Changes to our CI configuration files and scripts",
    title: "Continuous Integrations",
  },
  "🔙 revert": {
    description: " Reverts a previous commit",
    title: "Reverts",
  },
  "🚧 wip": {
    description: "A commit not meant to be included in main branch",
    title: "Work in Progress",
  },
};
