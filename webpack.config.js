const config = {
  mode: 'production',
  entry: {
    index: './src/js/index.js',
    careers: './src/js/careers.js',
    blog: './src/js/blog.js',
    about: './src/js/about.js',
  },
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = config;
