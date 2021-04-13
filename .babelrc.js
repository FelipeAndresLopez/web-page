/* eslint-disable prefer-template */

const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ['./src'],
      alias: {
        "@patterns": "./src/patterns"
      },
      extensions: ['.js']
    },
  ],
];

module.exports = {
    plugins: [...plugins]
}