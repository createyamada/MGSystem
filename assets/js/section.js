//　アニメーションを実行したい要素を取得
let targets = [];
targets.push(
  document.querySelectorAll(".president-section")[0],
  document.querySelectorAll(".company-section")[0],
  document.querySelectorAll(".develop-section")[0]
);

//スクロールイベント
window.addEventListener("scroll", function () {
  //スクロール量を取得
  let scroll = window.scrollY;
  //画面の高さを取得
  let windowHeight = window.innerHeight;
  //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
  for (let i = 0; i < targets.length; i++) {
    //ターゲット要素の位置を取得
    console.log("targets");
    console.log(targets[i]);
    let targetPos = targets[i].getBoundingClientRect().top + scroll;
    //スクロール量 > ターゲット要素の位置
    if (scroll > targetPos - windowHeight) {
      targets[i].classList.add("is-animated"); //is-animatedクラスを加える
    }
  }
});
