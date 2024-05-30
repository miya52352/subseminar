// イベントとは何か

// ユーザーが特定の要素を選択したり、クリックしたり、カーソルを当てたりする
// ユーザーがキーボードのキーを押す
// ユーザーがブラウザーウィンドウをリサイズしたり閉じたりする
// ウェブページの読み込みが完了する
// フォームが送信される
// 動画が再生される、停止される、再生が終わる
// エラーが発生する

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

// イベントを発行することができるオブジェクトは addEventListener() メソッドを持っており
// これはイベントハンドラーを追加するための推奨メカニズムです。