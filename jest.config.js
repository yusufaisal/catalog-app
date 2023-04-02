module.exports = {
  globals: {
    __DEV__: true
  },
  preset: 'react-native',
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(react-native|))'
  ],
};