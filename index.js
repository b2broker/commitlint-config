module.exports = {
  extends: "@commitlint/config-conventional",
  rules: {
    "type-case": [2, "always", "camel-case"],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "initial",
        "dependencies",
        "peerDependencies",
        "devDependencies",
        "metadata",
      ],
    ],
  },
};
