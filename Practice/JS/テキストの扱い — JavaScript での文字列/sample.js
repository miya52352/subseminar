// 文字列の宣言
const string = "革命はテレビでは放送されない。";
console.log(string);




// テンプレートリテラル
// テンプレートリテラルはバッククォート (`) で区切られたリテラルで
// substitutionと呼ばれる埋め込み式が利用できます。





// JavaScript の埋め込み
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"





// コンテキストでの連結
// const button = document.querySelector("button");

// function greet() {
//   const name = window.prompt("あなたの名前は?");
//   const greeting = document.querySelector("#greeting");
//   greeting.textContent = `${name} さん、こんにちは。はじめまして！`;
// }

// button.addEventListener("click", greet);






// 文字列内に式を含める
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."






// 複数行の文字列
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);











// 文字列に引用符を含めるには
// 問題の引用符をエスケープすることです。文字をエスケープするということは、その文字がコードの一部ではなく
// テキストとして認識されるようにすることを意味しています。 JavaScript でこれを行うには、文字の直前に
// バックスラッシュを置きます。試してみてください。
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);










// 数値と文字列
// 文字列と数字を組み合わせるとどうなるのでしょうか。
const nameSecond = "フロント ";
const number = 242;
console.log(nameSecond + number); // "フロント 242"

// エラーを返すと思うかもしれませんが、これはうまく動作します。数値が文字列としてどのように表示される
// べきかはかなり厳密に定義されているので、ブラウザーは自動的に数値を文字列に変換し、 2 つの文字列を
// 連結します。








// Number() 関数は渡されたものすべてを数値に変換します。
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number






// String() 関数は逆に、引数を文字列に変換します。
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
// string

