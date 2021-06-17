module.exports = {
    mode: 'development',
    devServer: {
      watchContentBase: true,
      hot: true,
      publicPath: '/'
    },
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      }, 
      {
          test: /\.s[a|c]ss$/,
          loader: 'style!css!sass'
      }
    ],
  vue: {
    loaders: {
      scss: 'style!css!sass'
    }
  },
  resolve: {
    extensions: ['.js']
  }
}
  