import { gsap } from "gsap";
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
    scale: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.in",
    onComplete: () => {
        const loader = document.getElementById("loader");
        loader.style.display = "none";
    }
});
