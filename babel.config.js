module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver', 
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@styles': './src/styles',
          '@redux': './src/redux',
          '@helpers': './src/helpers',
          '@constant': './src/constant',
          '@services': './src/services',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
        }
      }
    ],
    'react-native-worklets/plugin',
    ['@babel/plugin-transform-private-methods', { loose: true }]
  ]
};