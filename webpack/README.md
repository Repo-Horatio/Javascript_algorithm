npm install --save-dev webpack webpack-cli @babel/core @babel/preset-env babel-loader html-webpack-plugin

``` 
./package.json

{
  "build": "webpack --mode production"
}

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