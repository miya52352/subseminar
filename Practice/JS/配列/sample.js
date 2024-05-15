// 配列の作成
const shopping = ["パン", "牛乳", "チーズ", "ハム", "麺"];
console.log(shopping);



// 配列の長さを求める
console.log(shopping.length); // 5




// 配列の項目を取得し変更する
console.log(shopping[0]);


shopping[0] = "タヒーニ";
console.log(shopping);




// 配列の中の配列を多次元配列と呼びます。 2 つの角括弧を連結することで、それ自身が別の配列の中にある配列の
// 中の項目にアクセスすることができます。
const random = ["tree", 795, [0, 1, 2]];
random[2][2];




// 配列内におけるアイテムのインデックスの検索
const birds = ["オウム", "鷹", "フクロウ"];
console.log(birds.indexOf("フクロウ")); // 2
console.log(birds.indexOf("ウサギ")); // -1





// アイテムの追加
// 配列の末尾に 1 つ以上の項目を追加するには、 push() を使用します。
const cities = ["東京", "大阪"];
cities.push("広島");
console.log(cities); // [ "東京", "大阪", "広島" ]
cities.push("福岡", "鹿児島");
console.log(cities); // [ "東京", "大阪", "広島", "福岡", "鹿児島" ]




// 項目を配列の先頭に追加するには、 unshift() を使用してください。
cities.unshift("札幌");
console.log(cities); // [ "札幌", "東京", "大阪", "広島", "福岡", "鹿児島" ]





// アイテムの削除
// 配列から最後の項目を削除するには、 pop() を使用してください。
cities.pop();
console.log(cities); // [ "札幌", "東京", "大阪", "広島", "福岡" ]


// 配列から最初の項目を削除するには、 shift() を使用してください。
cities.shift();
console.log(cities); // [ "東京", "大阪", "広島", "福岡" ]


// 項目のインデックスがわかっていれば、 splice() を使って配列から取り除くことができます。
// この splice() の呼び出しでは、最初の引数で項目の削除を始める場所を指定し
// 2 番目の引数でいくつの項目を削除するかを指定します。
cities.splice(1, 2);
console.log(cities); // [ "東京", "福岡" ]






// それぞれの項目へのアクセス
// 配列の各項目に対して同じことを行い、変更された項目を含む配列を残したい場合があります。これには map() を使います。
// 以下のコードは、数値の配列を受け取り、それぞれの数値を 2 倍にします。
function double(number) {
    return number * 2;
}

const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]




// 元の配列の中でテストに適合する項目のみを含む新しい配列を作成したい場合があります。その場合は filter() を使います。
function isLong(city) {
    return city.length > 2;
}

const anotherCities = ["東京", "名古屋", "大阪", "鹿児島"];
const longer = anotherCities.filter(isLong);
console.log(longer); // [ "名古屋", "鹿児島" ]





// 文字列と配列を相互に変換する
// データが長い長い文字列の中に含まれていて、それを使いやすい形に分割して操作したいときがあります。
// 例えばデータを表形式で表示するというようなときです。それにはsplit() メソッドが使用できます。
const data = "札幌,仙台,東京,名古屋,大阪,福岡";
const citiesData = data.split(",");
console.log(citiesData);

console.log(citiesData.length);
console.log(citiesData[0]); // 配列の最初の項目
console.log(citiesData[1]); // 配列の 2 番目の項目
console.log(citiesData[citiesData.length - 1]); // 配列の最後の項目


// join() メソッドを使うことで、逆のことができます。
const commaSeparated = citiesData.join(",");
console.log(commaSeparated);



// 配列を文字列にするもう一つの方法は、 toString() メソッドを使うことです。引数を取らない toString() 
// は join() と比べ簡単でしょうが、制限があります。 join() を使えば、他の区切り文字を指定することもできます。
const dogNames = ["ポチ", "ハチ", "タロウ", "モコ"];
dogNames.toString(); //ポチ,ハチ,タロウ,モコ
