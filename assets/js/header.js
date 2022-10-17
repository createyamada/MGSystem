const hum = document.getElementById('hamburger');
const menuClose = document.getElementById('close');
const nav = document.getElementsByClassName('sp-nav');

// メニュークリック
function onHeaderMenuClick (mode) {
    switch (mode) {
        // メニュークリック
        case "menu":
            nav[0].classList.add('toggle');
            break;
        //　クローズクリック
        case "close":
            nav[0].classList.remove('toggle');
            break;
        default:
            break;
      }
}

hum.onclick = function (e) {
    console.log("メニュークリック",e);
    onHeaderMenuClick('menu');
}

menuClose.onclick = function (e) {
    console.log("クローズクリック",e);
    onHeaderMenuClick('close');
}