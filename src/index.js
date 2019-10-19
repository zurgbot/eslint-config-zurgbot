const { loadPluginRules } = require( './lib/rules' );

let rules = {
  'arrow-parens': ['error', 'always'],
  'eol-last': ['error', 'always'],
  'linebreak-style': ['error', 'unix'],
  'max-len': ['error', { code: 120, ignoreUrls: true }],
  'no-eval': 'error',

  /**
   * Syntax
   * @description Code style and characters used for punctuation and general syntax
   */

  quotes: [
    'error',
    'single',
    {
      avoidEscape: true,
      allowTemplateLiterals: true
    }
  ],
  semi: ['error', 'always'], // 🔥

  /**
   * Spacing
   * @description Whitespace, tabs
   */

  'space-in-parens': ['error', 'always', { exceptions: ['()', '[]', '{}'] }],

  /**
   * React
   * @description Rules for ESLint React Plugin. Plugin required for rules to be enforced
   * @requires https://www.npmjs.com/package/eslint-plugin-react
   */

  ...loadPluginRules( 'eslint-plugin-react', {
    'react/jsx-curly-spacing': [
      'error',
      {
        attributes: {
          when: 'never'
        },
        children: {
          when: 'always'
        }
      }
    ]
  }),

  /**
   * React Hooks
   * @description Rules for ESLint React Hooks Plugin. Plugin required for rules to be enforced
   * @requires https://www.npmjs.com/package/eslint-plugin-react-hooks
   */

  ...loadPluginRules( 'eslint-plugin-hooks-react', {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  })
};

module.exports = {
  extends: ['eslint:recommended'],
  rules
};
