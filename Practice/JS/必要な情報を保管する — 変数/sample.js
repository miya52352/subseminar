const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
  const name = prompt("あなたの名前は何ですか？");
  alert(`こんにちは、${name}さん、はじめまして！`);
  headingA.textContent = `${name}さん、ようこそ`;
};






// 変数のデータ型

// 数値型
let myAge = 17;

// 文字列型
let dolphinGoodbye = "So long and thanks for all the fish";

// 論理型
let iAmAlive = true;
let test = 6 < 3;

// 配列
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];






// 動的型付け
// JavaScript は他の言語と異なり、「動的型付け言語」という、格納するデータ型 (数値や文字列や配列など ) を
// 変数に対して指定する必要のない言語です

// typeof という演算子に気づきましたか？これは渡した変数のその時点でのデータ型を返します。
console.log(typeof 42);
// Expected output: "number"

console.log(typeof 'blubber');
// Expected output: "string"

console.log(typeof true);
// Expected output: "boolean"

console.log(typeof undeclaredVariable);
// Expected output: "undefined"






// いつ const を使い、いつ let を使うか
// 可能であれば const を使用し、必要ならば let を使用する。
// つまり、宣言時に変数を初期化でき、後で再代入する必要がない場合は、その変数を定数にします。