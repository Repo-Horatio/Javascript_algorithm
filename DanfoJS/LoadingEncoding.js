// reference : https://blog.tensorflow.org/2020/08/introducing-danfo-js-pandas-like-library-in-javascript.html

// const dfd = require("danfojs-node")
// //read the first 10000 rows
// dfd.read_csv("file:///home/Desktop/bigdata.csv", chunk=10000)
//   .then(df => {
//     df.tail().print()
//   }).catch(err=>{
//        console.log(err);
//   })

let data1 = ["Apple","Banana","Mango"];
let series = new dfd.Series(data1);
let encode = new dfd.OneHotEncoder();   // LabelEncoder(), OneHotEncoders, LabelEncoders, StandardScaler, MinMaxScaler
encode.fit(series);
let sf_enc = encode.transform(series);
let new_sf = encode.transform(["Apple"]);
sf_enc.print();
new_sf.print();
// ╔═══╤═══════════════════╤═══════════════════╤═══════════════════╗
// ║   │ Apple             │ Banana            │ Mango             ║
// ╟───┼───────────────────┼───────────────────┼───────────────────╢
// ║ 0 │ 1                 │ 0                 │ 0                 ║
// ╟───┼───────────────────┼───────────────────┼───────────────────╢
// ║ 1 │ 0                 │ 1                 │ 0                 ║
// ╟───┼───────────────────┼───────────────────┼───────────────────╢
// ║ 2 │ 0                 │ 0                 │ 1                 ║
// ╚═══╧═══════════════════╧═══════════════════╧═══════════════════╝

new_sf.print();
// ╔═══╤═══════════════════╤═══════════════════╤═══════════════════╗
// ║   │ Apple             │ Banana            │ Mango             ║
// ╟───┼───────────────────┼───────────────────┼───────────────────╢
// ║ 0 │ 1                 │ 0                 │ 0                 ║
// ╚═══╧═══════════════════╧═══════════════════╧═══════════════════╝