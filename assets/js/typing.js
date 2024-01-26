// 画面描画時に実行
window.onload = (event) => {
  //　タイピングアニメーションをする要素を取得
  let elem = document.getElementsByClassName("hero-text-typing")[0];
  // 表示するための文字列を取得
  let text = elem.textContent;
  // 表示するテキストを空にする
  elem.textContent = "";
  // 段落のための変数
  let block = "";
  // 表示する文字数分のループ
  text.split("").forEach(function (target) {
    if (target !== " ") {
      // 段落なしの場合
      // 新しいspanタグを作成
      let newElem = document.createElement("span");
      //　取得した文字を一文字づつspanとして作成
      newElem.textContent = target;
      // タイピングアニメする要素の下に配置
      elem.appendChild(newElem);
      // 表示する大元のstrongタグを表示する
      elem.style.display = "inline";
      newElem = null;
    } else {
      //　段落ある場合
      block += target;
    }
  });

  // 上記で作成した文字数分のspanタグの要素を配列で取得
  let thisChild = Array.from(elem.childNodes);
  let cnt = 0;
  let time = 100;
  //　文字数分秒数間で表示する
  let timer = setInterval(() => {
    // 一文字を表示する処理を実行
    fadeIn(thisChild[cnt]);
    cnt++;
    if (cnt === thisChild.length) {
      // インターバル終了
      clearInterval(timer);
    }
  }, time);
};

function fadeIn(el) {
  el.style.display = "inline";
}
