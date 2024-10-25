/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as addAttribute, e as renderHead, f as renderSlot, b as createAstro } from '../chunks/astro/server_C-zlZj4v.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Hamburger = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hamburger"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div>`;
}, "/Users/yuyaakatsu/my-portfolio/src/components/Hamburger.astro", void 0);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-white mb-10"> <div class="max-w-5xl container mx-auto px-4 py-4 flex justify-between items-center"> <!-- ロゴ --> <div class="text-xl font-bold text-gray-800">
Yuya Akatsu
</div> <!-- ナビゲーション --> <nav class="space-x-4 hidden md:block"> <a href="#home" class="capitalize">home</a> <a href="#works" class="capitalize">works</a> <a href="#service" class="capitalize">service</a> <a href="#profile" class="capitalize">profile</a> </nav> <!-- Call to Action ボタン --> <div> <a href="#contact" class="px-4 py-2 bg-black text-white rounded">Contact</a> </div> </div> </header>`;
}, "/Users/yuyaakatsu/my-portfolio/src/components/Navigation.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <nav> ${renderComponent($$result, "Hamburger", $$Hamburger, {})} ${renderComponent($$result, "Navigation", $$Navigation, {})} </nav> </header>`;
}, "/Users/yuyaakatsu/my-portfolio/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-black text-white py-4"> <div class="container mx-auto px-4"> <div class="flex justify-center items-center"> <p class="text-sm">
&copy; ${currentYear} Yuya Akatsu.
</p> </div> </div> </footer>`;
}, "/Users/yuyaakatsu/my-portfolio/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="ja"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body class="bg-gray-100 leading-relaxed"> ${renderComponent($$result, "Header", $$Header, {})} <!-- <h1>{pageTitle}</h1> --> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "/Users/yuyaakatsu/my-portfolio/src/layouts/BaseLayout.astro", void 0);

const $$Heading = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="border-b-4  pb-4 mb-8"> <h2 class=" text-4xl capitalize tracking-wide mb-2 font-extrabold">
works
</h2> <p class="">
お仕事実績
</p> </div>`;
}, "/Users/yuyaakatsu/my-portfolio/src/components/Heading.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class=" p-8 w-full max-w-lg mx-auto"> <form action="https://yuya-akatsu.form.newt.so/v1/HZ-jL38ds" method="POST" class="space-y-6"> <div> <label for="name" class="block text-sm font-medium text-gray-700">お名前</label> <input type="text" id="name" name="name" required class="mt-1 block w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-black focus:border-black"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700">メールアドレス</label> <input type="email" id="email" name="email" required class="mt-1 block w-full px-3 py-2 bg-white rounded-md  focus:outline-none focus:ring-black focus:border-black"> </div> <div> <label for="message" class="block text-sm font-medium text-gray-700">お問い合わせ内容</label> <textarea id="message" name="message" rows="4" required class="mt-1 block w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-black focus:border-black"></textarea> </div> <div> <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black">
送信する
</button> </div> </form> </div>`;
}, "/Users/yuyaakatsu/my-portfolio/src/components/Contact.astro", void 0);

const $$Card = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="container bg-white rounded-lg"> <a href="https://wiz-eternalcrypt.com/"> <img class="rounded-t-lg" src="/public/ogpNftHp.jpg" alt=""> </a> <div class="p-5"> <a href="#"> <h3 class="mb-2 text-2xl font-bold text-gray-900">NFTゲーム HP</h3> </a> <p class="mb-3 text-gray-700 ">
スマホ向けNFTゲームのHP制作において、ディレクション･Webデザインを担当しました。
                ゲームシステムに倣い、スクロールに合わせてダンジョンを進んでいくようなギミックを施しました。
</p> </div> <div class="tag flex p-5 pt-0 gap-4 flex-wrap"> <p class=" bg-gray-400 px-6 py-1 rounded-full  text-white text-sm tracking-wider">Figma</p> <p class=" bg-gray-400 px-6 py-1 rounded-full  text-white text-sm tracking-wider">Studio</p> </div> </div> <div class="container bg-white rounded-lg"> <a href="https://wiz-eternalcrypt.com/"> <img class="rounded-t-lg" src="/public/ogpNftHp.jpg" alt=""> </a> <div class="p-5"> <a href="#"> <h3 class="mb-2 text-2xl font-bold text-gray-900">NFTゲーム HP</h3> </a> <p class="mb-3 text-gray-700 ">
スマホ向けNFTゲームのHP制作において、ディレクション･Webデザインを担当しました。
                ゲームシステムに倣い、スクロールに合わせてダンジョンを進んでいくようなギミックを施しました。
</p> </div> <div class="tag flex p-5 pt-0 gap-4 flex-wrap"> <p class=" bg-gray-400 px-6 py-1 rounded-full  text-white text-sm tracking-wider">Figma</p> <p class=" bg-gray-400 px-6 py-1 rounded-full  text-white text-sm tracking-wider">Studio</p> </div> </div> <div class="container bg-white rounded-lg"> <a href="https://wiz-eternalcrypt.com/"> <img class="rounded-t-lg" src="/public/ogpNftHp.jpg" alt=""> </a> <div class="p-5"> <a href="#"> <h3 class="mb-2 text-2xl font-bold text-gray-900">NFTゲーム HP</h3> </a> <p class="mb-3 text-gray-700 ">
スマホ向けNFTゲームのHP制作において、ディレクション･Webデザインを担当しました。
                ゲームシステムに倣い、スクロールに合わせてダンジョンを進んでいくようなギミックを施しました。
</p> </div> <div class="tag flex p-5 pt-0 gap-4 flex-wrap"> <p class=" bg-gray-400 px-6 py-1 rounded-full  text-white text-sm tracking-wider">Figma</p> <p class=" bg-gray-400 px-6 py-1 rounded-full  text-white text-sm tracking-wider">Studio</p> </div> </div> </div>`;
}, "/Users/yuyaakatsu/my-portfolio/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = "\u30DB\u30FC\u30E0\u30DA\u30FC\u30B8";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mb-40" id="mainVisual"> <img src="public/mainVisualImage.jpg" alt="" class="w-1/4 m-auto rounded-full mb-6 "> <h1 class="text-4xl lg:text-5xl text-center mb-2 font-extrabold">赤津優弥</h1> <p class="text-center">Web Designer</p> </section> <section class="mb-40 max-w-screen-lg mx-auto w-11/12" id="works"> ${renderComponent($$result2, "Heading", $$Heading, {})} ${renderComponent($$result2, "Card", $$Card, {})} </section> <section class="mb-40  max-w-screen-lg mx-auto max-h-dvh w-11/12" id="service"> ${renderComponent($$result2, "Heading", $$Heading, {})} <span class="サービス"></span> <div class=""> <div class="py-6"> <h3 class="text-2xl font-bold pb-2">Webデザイン制作 / フロントエンド開発</h3> <span class="text-gray-400 capitalize">web design / frontend Development</span> </div> <div class="pb-8 leading-loose"> <div class="pb-2">デザインはFigmaを使用しています。</div> <p class="pb-2">
ノーコードツールSTUDIOを活用して一気通貫した納品も可能ですので、
					最小限のコミュニケーションコストで制作いたします。
</p> <p class="pb-2">Wordpressテーマ開発などコーディングの経験がございます。
				AstroでReactを使用したフロントエンド開発の勉強中です。
				開発者が実装しやすいことを重視し、スケジュールを円滑に進めます。</p> <p class="pb-2">
コミュニケーションツールはzoom、slackの使用が長いですが、
					ご要望に応じて柔軟に対応可能です。
</p> <p class="pb-2">作って終わりではなく、定期的に効果検証を行って課題改善に尽くします。</p> </div> </div> <div class="tag flex gap-4 flex-wrap"> <p class="capitalize bg-white px-8 py-2  rounded-full font-semibold">figma</p> <p class="capitalize bg-white px-8  py-2 rounded-full font-semibold">studio</p> <p class="capitalize bg-white px-8  py-2 rounded-full font-semibold">astro</p> <p class=" bg-white px-8  py-2 rounded-full font-semibold">Tailwind.css</p> <p class=" bg-white px-8  py-2 rounded-full font-semibold">React.js</p> <p class="capitalize bg-white px-8  py-2 rounded-full font-semibold">docker</p> <p class="capitalize bg-white px-8  py-2 rounded-full font-semibold">wordpress</p> </div> </section> <section class=" text-white bg-black mb-40  max-h-dvh py-40" id="profile"> <div class="max-w-screen-lg mx-auto w-11/12"> ${renderComponent($$result2, "Heading", $$Heading, {})} <div class=" leading-loose"> <p class="pb-2">4月11日生まれ / O型 /埼玉県出身/宮城県在住</p> <p class="pb-2">Webデザインの専門学校を卒業後、地方暮らしに憧れを抱き、
<br>
どうせ住むならと｢山村･豪雪･過疎｣三重苦の地域に移住を決意。</p> <p class="pb-2">コンサルティングファームのWebデザイナーとして新卒入社し、
<br>
築50年の空き家で在宅ワークを開始する。</p> <p class="pb-2">冬は最高気温が氷点下の毎日。何度も水道が凍り、
<br>
寒さで眠れない夜を過ごすも2度の越冬に成功。</p> <p class="pb-2">降雪により1年の半分以上愛車のバイクに乗れない事情から、
<br>
泣く泣くあたたかい地域を目指して新天地へ。</p> <p class="pb-2">フリーのWebデザイナーとして活動を始め今に至る。</p> <p class="pb-2">趣味は自炊と散歩。</p> </div> </div> </section> <section class="mb-40 md:max-w-screen-lg mx-auto w-11/12" id="contact"> ${renderComponent($$result2, "Heading", $$Heading, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </section> ` })}`;
}, "/Users/yuyaakatsu/my-portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/yuyaakatsu/my-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
