// https://webpack.js.org/concepts/
// https://webpack.js.org/configuration/mode/
// https://webpack.js.org/concepts/targets/

// webpack automatically find webpack.config.js
// some browsers only understand versions prior to ES6. webpack helps this issue

const HtmlWebPackPlugin = require('html-webpack-plugin');  // html-webpack-plugin allows us to place output(html bundles with javascript for each page) somewhere

module.exports = {
  // entry: './path/to/my/entry/file.js',    // By default its value is ./src/index.js
  module: {
    rules: [
      {
        test: /\.js$/,   // any file that ends with .js. 'test' property identifies which file or files should be transformed.
        exclude: /node_modules/, // 'use' property indicates which loader should be used to do the transforming.
        use: {                      // babel-loader goes to ./src/index.js and run the code and place javascript into index.html
          loader: 'babel-loader'    // babel transpiles js to older version of javascript
        } // babel-loader looks for '.babelrc' on root
      }, 
    ] 
  },
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'webpack.bundle.js',  // defaults to ./dist/main.js
  // },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html'   // html-webpack-plugin generates an HTML file for your application by injecting automatically all your generated bundles
    })
  ],
  // mode: 'production',
};
