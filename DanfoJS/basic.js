// reference : https://blog.tensorflow.org/2020/08/introducing-danfo-js-pandas-like-library-in-javascript.html

// npm install danfojs-node
// npm install @tensorflow/tfjs-node

const dfd = require("danfojs-node");
const tf = require("@tensorflow/tfjs-node")

var s = new dfd.Series([22.5, 24, 27.5]);    // List-like Series
s.print();

// ╔═══╤══════════════════════╗
// ║   │ 0                    ║
// ╟───┼──────────────────────╢
// ║ 0 │ 22.5                 ║
// ╟───┼──────────────────────╢
// ║ 1 │ 24                   ║
// ╟───┼──────────────────────╢
// ║ 2 │ 27.5                 ║
// ╚═══╧══════════════════════╝

s.describe().print(); // 통계 데이터 series

// ╔══════════╤══════════════════════╗
// ║          │ 0                    ║
// ╟──────────┼──────────────────────╢
// ║ count    │ 3                    ║
// ╟──────────┼──────────────────────╢
// ║ mean     │ 24.66666603088379    ║
// ╟──────────┼──────────────────────╢
// ║ std      │ 2.565800719723442    ║
// ╟──────────┼──────────────────────╢
// ║ min      │ 22.5                 ║
// ╟──────────┼──────────────────────╢
// ║ median   │ 24                   ║
// ╟──────────┼──────────────────────╢
// ║ max      │ 27.5                 ║
// ╟──────────┼──────────────────────╢
// ║ variance │ 6.583333333333334    ║
// ╚══════════╧══════════════════════╝

let dataFromS=new dfd.DataFrame({'온도':s.data});
dataFromS.print();

// ╔═══╤═══════════════════╗
// ║   │ 온도              ║
// ╟───┼───────────────────╢
// ║ 0 │ 22.5              ║
// ╟───┼───────────────────╢
// ║ 1 │ 24                ║
// ╟───┼───────────────────╢
// ║ 2 │ 27.5              ║
// ╚═══╧═══════════════════╝


// https://m.news.zum.com/articles/6996656
var d1 = new dfd.DataFrame([
                            {'온도':22.5, '판매량 증가율 %':'매출 급증(섭씨 21도부터'},  // row
                            {'온도':24, '판매량 증가율 %':36},
                            {'온도':27.5, '판매량 증가율 %':20},
                            ]); 
                            // '온도': ['22.5, 24, 27.5]
                            // '판매량 증가율': ['매출 급증(섭씨 21도부터', 36, 20]
d1.print();

// ╔═══╤═══════════════════╤═══════════════════╗
// ║   │ 온도              │ 판매량 증가율 %   ║
// ╟───┼───────────────────┼───────────────────╢
// ║ 0 │ 22.5              │ 매출 급증(섭씨 21 ║
// ╟───┼───────────────────┼───────────────────╢
// ║ 1 │ 24                │ 36                ║
// ╟───┼───────────────────┼───────────────────╢
// ║ 2 │ 27.5              │ 20                ║
// ╚═══╧═══════════════════╧═══════════════════╝


let num = tf.tensor2d([[1,2,3], [4,5,6]]);  // tf.dtypes.DType   tensor는 일관된 유형을 가진 다차원 배열. 일종의 np.arrays
let df_num = new dfd.DataFrame(num);
let tf_tensor = df_num.tensor;
console.log(tf_tensor);
// Tensor {
//     kept: false,
//     isDisposedInternal: false,
//     shape: [ 2, 3 ],
//     dtype: 'float32',
//     size: 6,
//     strides: [ 3 ],
//     dataId: {},
//     id: 21,
//     rankType: '2'
//   }

tf_tensor.print();
// Tensor
//     [[1, 2, 3],
//      [4, 5, 6]]

let fruits = {"Name":["Apples", "Mango", "Banana", undefined],
            "Count": [NaN, 5, NaN, 10], 
            "Price": [200, 300, 40, 250]}        
let df_fruits = new dfd.DataFrame(fruits)
let df_filled = df_fruits.fillna({columns: ["Name", "Count"], values: ["Apples", df_fruits["Count"].mean()]})
df_filled.print()

// ╔═══╤═══════════════════╤═══════════════════╤═══════════════════╗
// ║   │ Name              │ Count             │ Price             ║
// ╟───┼───────────────────┼───────────────────┼───────────────────╢
// ║ 0 │ Apples            │ 7.5               │ 200               ║
// ╟───┼───────────────────┼───────────────────┼───────────────────╢
// ║ 1 │ Mango             │ 5                 │ 300               ║
// ╟───┼───────────────────┼───────────────────┼───────────────────╢
// ║ 2 │ Banana            │ 7.5               │ 40                ║
// ╟───┼───────────────────┼───────────────────┼───────────────────╢
// ║ 3 │ Apples            │ 10                │ 250               ║
// ╚═══╧═══════════════════╧═══════════════════╧═══════════════════╝

let sub_df = df_filled.loc({ rows: ["0:2"], columns: ["Name", "Price"] })
sub_df.print()

// ╔═══╤═══════════════════╤═══════════════════╗
// ║   │ Name              │ Price             ║
// ╟───┼───────────────────┼───────────────────╢
// ║ 0 │ Apples            │ 200               ║
// ╟───┼───────────────────┼───────────────────╢
// ║ 1 │ Mango             │ 300               ║
// ╚═══╧═══════════════════╧═══════════════════╝