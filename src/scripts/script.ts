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
  duration: 1.5,           // アニメーション時間
  ease: "power2.in",    // スムーズな動き
  onComplete: () => {    // アニメーション終了後の処理
    const loader = document.getElementById("loader");
    loader.style.display = "none"; // ローディング画面を非表示に
    const mainVisual = document.getElementById("mainVisual");
    mainVisual.style.display = "block";

    // メインビジュアルのふわっとアニメーション
    gsap.to("#mainVisual", {
      opacity: 1,          // 不透明に
      y: 0,                // 元の位置に戻す
      duration: 3.5,       // アニメーション時間
      ease: "power2.out"   // なめらかな動き
    });
  }
});
