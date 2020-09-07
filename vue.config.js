const webpack = require('webpack');

module.exports = {
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://localhost:44355/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }  
    }
  },    
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery',
      }),
    ],
    externals: {
      'kendo': '@progress/kendo-ui'   // Kendo ui 要使用
    }
  }
}