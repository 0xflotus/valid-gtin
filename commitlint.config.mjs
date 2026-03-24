export default {
  ignores: [(commit) => /^v\d+\.\d+\.\d+$/.test(commit)],
  rules: {
    'type-empty': [2, 'never'],
    'body-max-line-length': [2, 'always', 1000]
  }
};
