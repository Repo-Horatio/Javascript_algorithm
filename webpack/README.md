npm install --save-dev webpack webpack-cli @babel/core @babel/preset-env babel-loader html-webpack-plugin


``` 
./package.json

"scripts": {
  "build": "webpack --mode production"
},  
// "babel": {      --> you can use this instead of .babelrc
//     "presets": [
//       "@babel/preset-env",   // env is depreciated. babel-preset-es2015 babel-preset-es2016 
//       "@babel/preset-react",  // react
//     ],
//     "plugins": [
//     ],
//   },

```

npm run build

    ./dist/index.html
    ./dist/main.js


```
./dist/index.html

<body>
    <div id='root'>
    <script type="text/javascript" src="main.js"></script>

</body>

```