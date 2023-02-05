const resHero = document.getElementById('resHero');
const resPre = document.getElementById('resPre');
const resCom = document.getElementById('resCom');
const hum = document.getElementById('hamburger');


// メニュークリック
function onHeaderMenuClick () {
    hum.checked = false;
}

resHero.onclick = function (e) {
    console.log("メニュ要素クリック",e);
    onHeaderMenuClick('close');
}

resPre.onclick = function (e) {
    console.log("メニュ要素クリック",e);
    onHeaderMenuClick('close');
}

resCom.onclick = function (e) {
    console.log("メニュ要素クリック",e);
    onHeaderMenuClick('close');
}


window.addEventListener('scroll',function(){
	const scrollTop = document.documentElement.scrollTop; // スクロール上部の位置
    const whiteArea = document.getElementsByClassName("whiteArea");
    const WhiteAreaRect = whiteArea[0].getBoundingClientRect();
    const areaTop  = WhiteAreaRect.top + scrollY;
    console.log(scrollTop)
    console.log(areaTop)

	if (scrollTop > areaTop ) {
        console.log("whiteクラスに入りました")
        // 画像要素を取得
        var white = document.getElementById("whiteLogo");
        var black = document.getElementById("blackLogo");

        // クラス名を追加削除
        black.classList.remove("nonDisp");
        white.classList.remove("nonDisp");

        white.classList.add("nonDisp");

	} else {
		console.log("blackクラスです")
        // 画像要素を取得
        var white = document.getElementById("whiteLogo");
        var black = document.getElementById("blackLogo");

        // クラス名を追加削除
        white.classList.remove("nonDisp");
        black.classList.remove("nonDisp");

        black.classList.add("nonDisp");
	}
  })

