// if (window.innerWidth >= 768) {
//   const canvas = document.getElementById("canvas");
//   //　2Dを描画するためのメソッドやプロパティをもつオブジェクトを返す
//   const ctx = canvas.getContext("2d");
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   let particlesArray;

//   // マウスポジション
//   let mouse = {
//     x: null,
//     y: null,
//     radius: (canvas.height / 80) * (canvas.width / 80),
//   };

//   window.addEventListener("mousemove", function (event) {
//     mouse.x = event.x;
//     mouse.y = event.y;
//   });

//   // ランダム化した幾何学模様を設定
//   class Particle {
//     constructor(x, y, directionX, directionY, size, color) {
//       this.x = x;
//       this.y = y;
//       this.directionX = directionX;
//       this.directionY = directionY;
//       this.size = size;
//       this.color = color;
//     }

//     // 個別粒子を描画するメソッド
//     draw() {
//       // 現在のパスをリセット
//       ctx.beginPath();
//       // void ctx.arc(x, y, radius, startAngle, endAngle [, counterclockwise]);
//       // (x,y)を中心とし、radiusを半径とした円弧を作成
//       // 角度はstartAngleからendAngle
//       // counterclockwise指定された向きで書かれる（既定では時計周り）
//       ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
//       // 図形の塗りつぶしの色を指定
//       ctx.fillStyle = "white";
//       // 現在のパスを塗りつぶし、輪郭表示する
//       ctx.fill();
//     }

//     // 粒子の位置、マウスの位置、粒子を動かす、粒子を描画する
//     update() {
//       // 粒子がキャンバスの中にいるとき
//       if (this.x > canvas.width || this.x < 0) {
//         this.directionX = -this.directionX;
//       }
//       if (this.y > canvas.height || this.y < 0) {
//         this.directionY = -this.directionY;
//       }

//       // マウスのカーソルが粒子にあたっているか確認する
//       let dx = mouse.x - this.x;
//       let dy = mouse.y - this.y;
//       let distance = Math.sqrt(dx * dx + dy * dy);
//       if (distance < mouse.radius + this.size) {
//         if (mouse.x > this.x && this.x > this.size * 10) {
//           this.x += 10;
//         }
//         if (mouse.x > this.x && this.x > this.size * 10) {
//           this.x -= 10;
//         }
//         if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
//           this.y += 10;
//         }
//         if (mouse.y > this.y && this.y > this.size * 10) {
//           this.y -= 10;
//         }
//       }
//       // 粒子を動かす
//       this.x += this.directionX;
//       this.y += this.directionY;
//       // 粒子を描画する
//       this.draw();
//     }
//   }

//   // 粒子の配列作成
//   function init() {
//     particlesArray = [];
//     // 粒子量をしていする変数（最後の母数を多くするほど量が少なくなる）
//     let numberOfParticles = (canvas.height * canvas.width) / 16000;
//     for (let i = 0; i < numberOfParticles; i++) {
//       let size = Math.random() * 5 + 1;
//       let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
//       let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
//       let directionX = Math.random() * 5 - 2.5;
//       let directionY = Math.random() * 5 - 2.5;
//       let color = "white";

//       particlesArray.push(
//         new Particle(x, y, directionX, directionY, size, color)
//       );
//     }
//   }

//   function connect() {
//     let opacityValue = 1;
//     for (let a = 0; a < particlesArray.length; a++) {
//       for (let b = a; b < particlesArray.length; b++) {
//         let distance =
//           (particlesArray[a].x - particlesArray[b].x) *
//             (particlesArray[a].x - particlesArray[b].x) +
//           (particlesArray[a].y - particlesArray[b].y) *
//             (particlesArray[a].y - particlesArray[b].y);

//         if (distance < (canvas.width / 7) * (canvas.height / 7)) {
//           // 接続線の色
//           ctx.strokeStyle = "white";
//           // 接続線の太さ
//           ctx.lineWidth = 0.25;
//           ctx.beginPath();
//           ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
//           ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
//           ctx.stroke();
//         }
//       }
//     }
//   }

//   // アニメーションループ
//   function animate() {
//     requestAnimationFrame(animate);
//     ctx.clearRect(0, 0, innerWidth, innerHeight);

//     for (let i = 0; i < particlesArray.length; i++) {
//       particlesArray[i].update();
//     }
//     connect();
//   }

//   // リサイズイベント
//   window.addEventListener("resize", function () {
//     canvas.width = innerWidth;
//     canvas.height = innerHeight;
//     mouse.radius = (canvas.height / 80) * (canvas.height / 80);
//     init();
//   });

//   // マウスアウトイベント
//   window.addEventListener("mouseout", function () {
//     mouse.x = undefined;
//     mouse.y = undefined;
//   });

//   init();
//   animate();
// }
