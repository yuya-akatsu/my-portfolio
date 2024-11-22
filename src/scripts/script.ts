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
const tween = gsap.to("header",{
duration:0.5,
paused:true,
ease:"power2.out",
top:0,
});
document.querySelector("header").addEventListener("click",tween.play())
import {gsap} from "gsap";
gsap.registerPlugin(ScrollTrigger);
gsap
  .timeline({
    defaults:{
      ease:"power2.out",
      duration:1,
    },
    scrollTrigger:{
      markers:true,
      trigger:".content",
      start:"top 50%",
      end:"bottom top",
      toggleActions:"restart none none none",
    },
  })
  import {gsap} from "gsap";
	gsap.to("#mainVisualImage",{
		repeat:-1,

		duration:2,
	})
	gsap.set(".listItem",{
		y:20,
		opacity:0,
	});
gsap.to('.listItem', 1.5, {
  y: 0,
  opacity: 1,
  ease: 'expo.out',
  stagger: {
    each: .1,
    // amount: 1 // 処理する個数 / amountの値
    from: 'start'
      // start, end, center, edges, random
  }
});
