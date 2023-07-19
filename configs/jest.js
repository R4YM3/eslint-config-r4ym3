module.exports = {
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: [
        "plugin:jest/recommended",
        'plugin:testing-library/react'
      ],
    },
  ]
};
