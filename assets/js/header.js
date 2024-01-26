const resHero = document.getElementById("resHero");
const resPre = document.getElementById("resPre");
const resCom = document.getElementById("resCom");
const resDev = document.getElementById("resDev");
const hum = document.getElementById("hamburger");

// メニュークリック
function onHeaderMenuClick() {
  hum.checked = false;
  logoColorChange();
}

resHero.onclick = function (e) {
  onHeaderMenuClick("close");
};

resPre.onclick = function (e) {
  onHeaderMenuClick("close");
};

resCom.onclick = function (e) {
  onHeaderMenuClick("close");
};

resDev.onclick = function (e) {
  onHeaderMenuClick("close");
};

// ヘッダーカラーチェンジ
window.addEventListener("scroll", function () {
  logoColorChange();
});

function logoColorChange() {
  const scrollTop = document.documentElement.scrollTop; // スクロール上部の位置
  const blackArea = Array.from(document.getElementsByClassName("black-area"));
  areaTops = [];
  areaBottoms = [];
  for (let i = 0; i < blackArea.length; i++) {
    let areaRect = blackArea[i].getBoundingClientRect();
    areaTops.push(areaRect.top + scrollY - 50);
    areaBottoms.push(areaRect.bottom + areaRect.top + scrollY - 10);
  }

  if (
    (scrollTop >= areaTops[0] && scrollTop <= areaBottoms[0]) ||
    (scrollTop >= areaTops[1] && scrollTop <= areaBottoms[1])
  ) {
    console.log("白モード");
    // 画像要素を取得
    const white = document.getElementById("whiteLogo");
    const black = document.getElementById("blackLogo");
    const topMenu = document.getElementsByClassName("top-menu");

    // クラス名を追加削除
    black.classList.remove("nonDisp");
    white.classList.remove("nonDisp");

    white.classList.add("nonDisp");
    for (let i = 0; i < topMenu.length; i++) {
      topMenu[i].style.color = "rgb(0, 0, 0)";
    }
  } else {
    console.log("黒モード");

    // 画像要素を取得
    const white = document.getElementById("whiteLogo");
    const black = document.getElementById("blackLogo");
    const topMenu = document.getElementsByClassName("top-menu");

    // クラス名を追加削除
    white.classList.remove("nonDisp");
    black.classList.remove("nonDisp");
    black.classList.add("nonDisp");
    for (let i = 0; i < topMenu.length; i++) {
      topMenu[i].style.color = "rgb(255, 255, 255)";
    }
  }
}
