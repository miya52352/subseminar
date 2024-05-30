// 関数の呼び出し
function myFunction() {
  alert("hello");
}

myFunction();





// 無名関数とアロー関数
// 名前を持たない関数を作成することもできます。
(function () {
  alert("hello");
});


// アロー関数
// (引数,...)=>{...関数の本体...}
let getTriangle = (base, height) => {
  return base * height / 2;
};
console.log('三角形の面積は' + getTriangle(10,2));//三角形の面積は10