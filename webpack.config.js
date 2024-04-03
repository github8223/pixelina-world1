const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "buffer": require.resolve("buffer/"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "zlib": require.resolve("browserify-zlib")
    }
  }
};
