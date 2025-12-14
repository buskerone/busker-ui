module.exports = {
  types: [
    { value: "feat", name: "feat:     A new feature" },
    { value: "fix", name: "fix:      A bug fix" },
    { value: "docs", name: "docs:     Documentation only changes" },
    { value: "style", name: "style:    Code style changes (formatting, etc)" },
    { value: "refactor", name: "refactor: Code changes that neither fix nor add features" },
    { value: "test", name: "test:     Adding or updating tests" },
    { value: "chore", name: "chore:    Tooling, configs, maintenance" },
  ],
  scopes: ["workspace", "tokens", "primitives", "ui-web", "ui-mobile", "apps"],
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
};
