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