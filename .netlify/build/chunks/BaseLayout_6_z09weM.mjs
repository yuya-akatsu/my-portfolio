import { c as createComponent, a as createAstro, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderHead, d as renderComponent, f as renderSlot } from './astro/server_Bvyz7Nc1.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="bg-white mb-10 fixed top-0 left-0 right-0 shadow z-50" data-astro-cid-3ef6ksr2> <div class="max-w-5xl container mx-auto px-4 py-4 flex justify-between items-center" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2> <div class="text-xl font-bold text-gray-800" data-astro-cid-3ef6ksr2>
Yuya Akatsu
</div> </a> ${Astro2.url.pathname === "/" ? renderTemplate`<nav class="space-x-4 hidden md:block" data-astro-cid-3ef6ksr2> <a href="#works" class="capitalize  relative pb-1 line" data-astro-cid-3ef6ksr2>works</a> <a href="#service" class="capitalize relative pb-1 line" data-astro-cid-3ef6ksr2>service</a> <a href="#profile" class="capitalize relative pb-1 line" data-astro-cid-3ef6ksr2>profile</a> <a href="#contact" class="capitalize relative pb-1 line" data-astro-cid-3ef6ksr2>contact</a> </nav>` : null} </div> </header> `;
}, "/Users/yuyaakatsu/my-portfolio/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-black text-white py-4"> <div class="container mx-auto px-4"> <div class="flex justify-center items-center"> <p class="text-sm">
&copy; ${currentYear} Yuya Akatsu.
</p> </div> </div> </footer>`;
}, "/Users/yuyaakatsu/my-portfolio/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="ja" data-astro-cid-37fxchfa> <head><meta charset="utf-8"><link rel="icon" type="image/jpg" href="/public/mainVisualImage.jpg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Yuya Akatsu | Web Designer</title>${renderHead()}</head> <body class="bg-gray-100 leading-relaxed" data-astro-cid-37fxchfa> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-37fxchfa": true })} <div id="loader" data-astro-cid-37fxchfa> <div class="circle" data-astro-cid-37fxchfa></div> </div> <main data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true })}   </body> </html>`;
}, "/Users/yuyaakatsu/my-portfolio/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
