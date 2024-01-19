const mainImageElement = document.getElementById("president-image");
const prevImageElemant = document.getElementById("prevImage");
const nextImageElemant = document.getElementById("nextImage");
const paginationParentElemant = document.getElementById("pagination");

// 画像の枚数分
const imageTotalNumber = 3;
let currentSlide = 1;

// src要素を追加
mainImageElement.setAttribute("src", "assets/images/image/president1.jpg");

// 画像枚数分Span要素を追加
for (let i = 0; i < imageTotalNumber; i++) {
  let parentDiv = document.querySelector("#pagination");
  let createSpan = document.createElement("span");
  createSpan.classList.add("swiper-pagination-bullet");
  parentDiv.insertAdjacentElement("afterbegin", createSpan);
}

function changeSlideStatus() {
  // 最初の画像である場合のスタイル適応
  if (currentSlide === 1) {
    prevImageElemant.classList.add("inActive");
  } else {
    prevImageElemant.classList.remove("inActive");
  }

  // 最後の画像である場合のスタイル適応
  if (currentSlide === imageTotalNumber) {
    nextImageElemant.classList.add("inActive");
  } else {
    nextImageElemant.classList.remove("inActive");
  }

  // 指定したclass名の最初の要素を取得
  for (let i = 1; i < imageTotalNumber + 1; i++) {
    console.log(i);
    if (i === currentSlide) {
      let current = document.getElementsByClassName("swiper-pagination-bullet")[
        currentSlide - 1
      ];
      current.classList.add("target");
    } else {
      let current = document.getElementsByClassName("swiper-pagination-bullet")[
        i - 1
      ];
      current.classList.remove("target");
    }
  }
}

// 画像の←ボタンクリックイベント
prevImageElemant.addEventListener("click", () => {
  if (currentSlide !== 1) {
    currentSlide--;
    mainImageElement.setAttribute(
      "src",
      `assets/images/image/president${currentSlide}.jpg`
    );
    changeSlideStatus();
  }
});

// 画像の→ボタンクリックイベント
nextImageElemant.addEventListener("click", () => {
  if (currentSlide !== imageTotalNumber) {
    currentSlide++;
    mainImageElement.setAttribute(
      "src",
      `assets/images/image/president${currentSlide}.jpg`
    );
    changeSlideStatus();
  }
});
