module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [0],
    'type-empty': [0],
    'body-leading-blank': [0],
    'header-trim': [0]
  }
}