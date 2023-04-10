module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@assets': './src/assets',
          '@redux': './src/redux',
          '@helpers': './src/helpers',
          '@env': './src/env.js',
          '@screen': './src/screens',
          '@navigation': './src/navigation',
          '@theme': './src/theme',
          '@components': './src/components',
        },
        extensions: ['.js', '.jsx', '.tsx', '.ios.js', '.android.js'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
