import pluginJs from '@eslint/js';

export default [
  {
    files: ['**/*.js'],
    ignores: ['node_modules', 'dist', 'coverage']
  },
  pluginJs.configs.recommended
];
