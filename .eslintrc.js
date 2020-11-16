module.exports = {
  extends: [
    'himynameisdave/configurations/core',
    'himynameisdave/configurations/node',
    'himynameisdave/configurations/typescript',
  ],
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/extensions': ['.ts'],
    'import/resolver': {
      'typescript': {
        'alwaysTryTypes': true
      }
    }
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      rules: {
        //  This is because eslint flags undefined vars. All good tho because TS catches this in the compiler.
        'no-undef': 'off'
      }
    }
  ],
  rules: {
    //  Turn off conflicting rules
    'import/extensions': 'off',
    'node/file-extension-in-import': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'object-curly-newline': ['error', {
      ObjectExpression: {
        minProperties: 2,
        multiline: true,
        consistent: true,
      },
      ObjectPattern: {
        minProperties: 3,
        multiline: true,
        consistent: true,
      },
      ImportDeclaration: {
        minProperties: 4,
        multiline: true,
        consistent: true,
      },
      ExportDeclaration: {
        minProperties: 2,
        multiline: true,
        consistent: true,
      },
    }],
  }
}
