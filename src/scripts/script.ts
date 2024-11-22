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

	gsap.to("#mainVisualImage",{
		repeat:-1,
    rotate:360,
		duration:2,
    ease:'none',
	})
// カードがスクロールに合わせて出現
document.querySelectorAll(".listItem").forEach((el) => {
  gsap.fromTo(
    el,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        ease: "expo",
      },
    }
  );
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
