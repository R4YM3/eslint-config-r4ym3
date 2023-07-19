const fs = require('fs');
const { ESLint } = require('eslint')

const configFilePaths = [
  'configs/base.js',
  'configs/next.js',
  'configs/prettier.js',
  'configs/react.js',
  'configs/typescript.js',
]

describe('config', () => {
  configFilePaths.forEach((path) => {

    describe(path, () => {
      it(`should have validate syntax`, function() {
        expect(() => new ESLint({
          useEslintrc: false,
          overrideConfigFile: path
        })).not.toThrow()
      })
    });
  });
});
