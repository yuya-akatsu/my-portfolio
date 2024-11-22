// script.ts
document.querySelectorAll('nav a').forEach((anchor: HTMLAnchorElement) => {
  anchor.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();

    const targetId = anchor.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // スムーススクロールを実行
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
import {gsap} from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

	// gsap.to("#mainVisualImage",{
	// 	repeat:-1,
  //   rotate:360,
	// 	duration:2,
  //   ease:'none',
	// })
// カードがスクロールに合わせて出現
document.querySelectorAll(".js-listItem").forEach((el) => {
  gsap.fromTo(
    el,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.0,
      scrollTrigger: {
        trigger: el,
        start: "top 60%",
        ease: "expo",
      },
    }
  );
});
gsap.to(".circle", {
  scale: 100,              // スケールアップ
  opacity: 0,            // フェードアウト
  duration: 1,           // アニメーション時間
  ease: "power1.out",    // スムーズな動き
  onComplete: () => {    // アニメーション終了後の処理
    const loader = document.getElementById("loader");
    loader.style.display = "none"; // ローディング画面を非表示に
  }
});
// 	gsap.set(".listItem",{
// 		y:20,
// 		opacity:0,
// 	});
// gsap.to('.listItem', 1.5, {
//   y: 0,
//   opacity: 1,
//   ease: 'expo.out',
//   stagger: {
//     each: 0.8,

//     from: 'start'
//   }
// });
