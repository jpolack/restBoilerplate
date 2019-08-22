module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  globals: {
    'babel-jest': {
      babelrcFile: 'custom/path/to/.babelrc',
    },
  },
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
};
