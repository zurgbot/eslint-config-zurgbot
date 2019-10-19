const merge = require( 'merge' );

const config = require( '../src/index' );

module.exports = merge( config, {
  env: {
    es6: true,
    node: true
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 9
  },

  extends: ['eslint:recommended']
});
