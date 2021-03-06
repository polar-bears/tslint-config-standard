module.exports = {
  defaultSeverity: 'warning',
  extends: ['tslint-config-standard', 'tslint-react'],
  rules: {
    align: [true, 'parameters', 'statements'],
    indent: [true, 'spaces', 2],
    'interface-name': [true, 'never-prefix'],
    'max-classes-per-file': true,
    'max-line-length': [true, 100],
    'member-ordering': [true, 'static-before-instance'],
    'member-access': [true, 'check-accessor', 'check-constructor', 'check-parameter-property'],
    'no-any': false,
    'no-bitwise': false,
    'no-console': false,
    'no-construct': true,
    'no-debugger': true,
    'no-empty-interface': false,
    'no-floating-promises': false,
    'no-shadowed-variable': true,
    'no-string-literal': true,
    'padded-blocks': [true, { classes: 'always' }],
    'switch-default': true,

    // tslint-react
    'jsx-boolean-value': [true, 'never'],
    'jsx-no-lambda': false,
    'jsx-no-multiline-js': false,
    'jsx-no-string-ref': true,
  }
}
