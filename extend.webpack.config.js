const { GuessPlugin } = require('guess-webpack');
const { parseRoutes } = require('guess-parser');

module.exports = {
  plugins: [
    new GuessPlugin({
      GA: '200553059',
      runtime: {
        delegate: false
      },
      routeProvider() {
        return parseRoutes('.');
      }
    }),
  ]
};