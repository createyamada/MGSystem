const resHero = document.getElementById('resHero');
const resPre = document.getElementById('resPre');
const resCom = document.getElementById('resCom');
const hum = document.getElementById('hamburger');


// メニュークリック
function onHeaderMenuClick () {
    hum.checked = false;
    logoColorChange();
}

resHero.onclick = function (e) {
    onHeaderMenuClick('close');
}

resPre.onclick = function (e) {
    onHeaderMenuClick('close');
}

resCom.onclick = function (e) {
    onHeaderMenuClick('close');
}


window.addEventListener('scroll',function(){
    logoColorChange();
})

  function logoColorChange () {
    const scrollTop = document.documentElement.scrollTop; // スクロール上部の位置
    const whiteArea = document.getElementsByClassName("whiteArea");
    const WhiteAreaRect = whiteArea[0].getBoundingClientRect();
    const areaTop  = WhiteAreaRect.top + scrollY;

	if (scrollTop > areaTop ) {
        console.log("whiteクラスに入りました")
        // 画像要素を取得
        const white = document.getElementById("whiteLogo");
        const black = document.getElementById("blackLogo");
        const topMenu = document.getElementsByClassName("top-menu");

        // クラス名を追加削除
        black.classList.remove("nonDisp");
        white.classList.remove("nonDisp");

        white.classList.add("nonDisp");
        for(let i=0; i<topMenu.length;i++){
            topMenu[i].style.color = "rgb(0, 0, 0)"
        }   

	} else {
		console.log("blackクラスです")
        // 画像要素を取得
        const white = document.getElementById("whiteLogo");
        const black = document.getElementById("blackLogo");
        const topMenu = document.getElementsByClassName("top-menu");

        // クラス名を追加削除
        white.classList.remove("nonDisp");
        black.classList.remove("nonDisp");

        black.classList.add("nonDisp");

        for(let i=0; i<topMenu.length;i++){
            topMenu[i].style.color = "rgb(255, 255, 255)"
        }    
	}
  }

