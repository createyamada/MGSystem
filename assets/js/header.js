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
