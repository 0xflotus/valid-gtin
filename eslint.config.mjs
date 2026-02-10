import pluginJs from "@eslint/js";

export default [
  {
    files: [
      "**/*.js"
    ],
    ignores: [
      "node_modules"
    ],
  },
  pluginJs.configs.recommended,
];