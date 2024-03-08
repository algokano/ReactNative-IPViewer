module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          components: './src/components',
          navigators: './src/navigators',
          services: './src/services',
        },
      },
    ],
    'react-native-reanimated/plugin'
  ],
};
