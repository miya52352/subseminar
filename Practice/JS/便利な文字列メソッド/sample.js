// 文字列の長さを調べる
const browserType = "mozilla";
console.log(browserType.length);


// 文字列の特定の文字を受け取る
console.log(browserType[0]);

// 文字列の一番最後の文字を取得したいときは、先ほどの length プロパティと組み合わせて以下のようにします。
console.log(browserType[browserType.length - 1]);








// 文字列に部分文字列が含まれているかの検査
const browserAnotherType = "mozilla";

if (browserAnotherType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}



// 文字列が特定の部分文字列で始まるか終わるかを知りたいことはよくあります。
// これはよくあるニーズなので、 2 つの特別なメソッドがあります。 startWith() と endsWith() です。
const browserStartWithType = "mozilla";

if (browserStartWithType.startsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}



const browserEndWithType = "mozilla";

if (browserEndWithType.endsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}








// 文字列内の部分文字列の位置を探す
// 大きな文字列内の部分文字列の位置を探すには、 indexOf() メソッドを使用します。
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20


// 一方、 x という文字は文字列中に存在しませんので、 -1 を返します。
console.log(tagline.indexOf("x")); // -1









// それ以降の出現箇所を探すにはどうすればいいのでしょうか？メソッドの 2 つ目の引数に
// 前回出現した文字列のインデックスよりも大きな値を渡します。
const secondTagline = "MDN - Resources for developers, by developers";
const firstOccurrence = secondTagline.indexOf("developers");
const secondOccurrence = secondTagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35








// 部分文字列を探して抽出
// 文字列から部分文字列を抽出するには、 slice() メソッドを使用します。
const sliceBrowserType = "mozilla";
console.log(sliceBrowserType.slice(1, 4)); // "ozi"


// ある文字以降の文字列の残りの文字をすべて抽出したいことがわかっている場合は
// 2つ目の引数を記載する必要はありません。
console.log(sliceBrowserType.slice(2)); // "zilla"








// 大文字小文字の切り替え
// 文字列には toLowerCase() と toUpperCase() という 2 つのメソッドがあり
// 引数として渡された文字列のすべての文字の大文字小文字を切り替えます。
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());









// replace() は、多くの文字列メソッドと同様に、名付けられた文字列を変更するのではなく、新しい文字列を返すことに
// 注意してください。元の変数を更新したい場合は、次のようにする必要があります。
let replaceBrowserType = "mozilla";
replaceBrowserType = replaceBrowserType.replace("moz", "van");

console.log(replaceBrowserType); // "vanilla"



// この形で replace() は部分文字列が最初に出現したものだけを変更することに注意してください。
// すべて変更したい場合は replaceAll() を使用することができます。
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"
