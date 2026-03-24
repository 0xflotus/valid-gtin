import pluginJs from '@eslint/js';

export default [
  {
    files: ['**/*.m?js'],
    ignores: ['node_modules', 'dist', 'coverage']
  },
  pluginJs.configs.recommended
];
