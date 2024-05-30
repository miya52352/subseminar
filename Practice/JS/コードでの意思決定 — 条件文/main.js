let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}

console.log(childsAllowance)



if (1 === 3) {
  var a = 10; 
} else if (2 === 2) {
  var a = 4;
} else {
  var a = 1;
}


// 論理演算子: AND と OR と NOT
// && — AND は 2 つ以上の式を一つに繋げ、それぞれの式を個別に評価して、すべて true になった場合、その式全体が true として返します。
// || — OR は 2 つ以上の式を 1 つに繋げ、それぞれの式を個別に評価し、最初に true になったところで、その式全体を true として返します。
// 論理演算子の最後は NOT です。! 演算子で表され、式を否定するのに使用します。


const choice = select.value;

switch (choice) {
  case "abc":
    choice = 12;
    break;
  case "def":
    choice = 14
    break;
  default:
    choice = 1;
}





// 三項演算子
const greeting = isBirthday
  ? "スミスさん、誕生日おめでとうございます！良い一日を。"
  : "スミスさんおはようございます。";






