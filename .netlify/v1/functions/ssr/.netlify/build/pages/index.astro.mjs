/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, d as renderComponent, a as addAttribute, u as unescapeHTML } from '../chunks/astro/server_Ciz6EALz.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BO1KcOD3.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$SectionHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionHeading;
  const { title } = Astro2.props;
  const { subTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="border-b-4  pb-4 mb-8"> <h2 class=" text-4xl capitalize tracking-wide mb-2 font-extrabold"> ${title} </h2> <p class=""> ${subTitle} </p> </div>`;
}, "/Users/yuyaakatsu/my-portfolio/src/components/SectionHeading.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class=" p-8 w-full max-w-lg mx-auto"> <form action="https://yuya-akatsu.form.newt.so/v1/HZ-jL38ds" method="POST" class="space-y-6"> <div> <label for="name" class="block text-sm font-medium text-gray-700">お名前</label> <input type="text" id="name" name="name" required class="mt-1 block w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-black focus:border-black"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700">メールアドレス</label> <input type="email" id="email" name="email" required class="mt-1 block w-full px-3 py-2 bg-white rounded-md  focus:outline-none focus:ring-black focus:border-black"> </div> <div> <label for="message" class="block text-sm font-medium text-gray-700">お問い合わせ内容</label> <textarea id="message" name="message" rows="4" required class="mt-1 block w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-black focus:border-black"></textarea> </div> <div> <button type="submit" class="w-full flex justify-center py-2 px-4  rounded-md text-sm font-medium text-white bg-black transition duration-300 ease-in-out hover:bg-gray-300 hover:text-black">
送信する
</button> </div> </form> </div>`;
}, "/Users/yuyaakatsu/my-portfolio/src/components/Contact.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const response = await getBlogs({ fields: ["id", "title", "thumbnail", "content", "webSiteUrl", "toolTag"] });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-24" id="mainVisual" data-astro-cid-j7pv25f6> <div class="" data-astro-cid-j7pv25f6><img src="/mainVisualImage.jpg" alt="" class="w-1/4 m-auto rounded-full mb-6 filter saturate-0 transition-filter duration-300 ease-in-out hover:saturate-100 hover:scale-105" data-astro-cid-j7pv25f6></div> <h1 class="text-4xl lg:text-5xl text-center mb-2 font-extrabold" data-astro-cid-j7pv25f6>赤津優弥</h1> <p class="text-center" data-astro-cid-j7pv25f6>Web Designer</p> </section> <section class="max-w-screen-lg mx-auto w-11/12 py-20 md:py-40 mt-16" id="works" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SectionHeading", $$SectionHeading, { "title": "Works", "subTitle": "\u304A\u4ED5\u4E8B\u5B9F\u7E3E", "data-astro-cid-j7pv25f6": true })} <ul class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-j7pv25f6> ${response.contents.map((content) => renderTemplate`<li class="container bg-white rounded-lg hover:rounded-none" data-astro-cid-j7pv25f6> <a${addAttribute(content.webSiteUrl, "href")} target="_blank" data-astro-cid-j7pv25f6> <div class="overflow-hidden" data-astro-cid-j7pv25f6> <img${addAttribute(content.thumbnail.url, "src")}${addAttribute(content.title, "alt")} class="rounded-t-lg transition-transform duration-300 ease-in-out transform hover:scale-110" data-astro-cid-j7pv25f6></div> <div class="p-5" data-astro-cid-j7pv25f6> <h3 class="mb-2 text-2xl font-bold text-gray-900" data-astro-cid-j7pv25f6>${content.title}</h3> <div class="mb-3 text-gray-700" data-astro-cid-j7pv25f6>${unescapeHTML(content.content)}</div> </div> <ul class="tag flex p-5 pt-0 gap-4 flex-wrap" data-astro-cid-j7pv25f6> ${content.toolTag && content.toolTag[0].tag.map((tag) => renderTemplate`<li class=" bg-gray-200 px-6 py-1 rounded-full  text-gray-500 text-sm tracking-wider" data-astro-cid-j7pv25f6>${tag}</li>`)} </ul> </a> </li>`)} </ul> </section> <section class="max-w-screen-lg mx-auto w-11/12 py-20 md:py-40" id="service" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SectionHeading", $$SectionHeading, { "title": "Service", "subTitle": "\u696D\u52D9\u9818\u57DF", "data-astro-cid-j7pv25f6": true })} <span class="サービス" data-astro-cid-j7pv25f6></span> <div class="" data-astro-cid-j7pv25f6> <div class="py-6" data-astro-cid-j7pv25f6> <h3 class="text-2xl font-bold pb-2" data-astro-cid-j7pv25f6>Webデザイン制作 / フロントエンド開発</h3> <span class="text-gray-400 capitalize" data-astro-cid-j7pv25f6>web design / frontend Development</span> </div> <div class="pb-8 leading-loose" data-astro-cid-j7pv25f6> <div class="pb-2" data-astro-cid-j7pv25f6>デザインはFigmaを使用しています。</div> <p class="pb-2" data-astro-cid-j7pv25f6>
ノーコードツールStudioを活用して一気通貫した納品も可能ですので、
					最小限のコミュニケーションコストで制作いたします。
</p> <p class="pb-2" data-astro-cid-j7pv25f6>Wordpressテーマ開発などコーディングの経験がございます。
				Astro、TypeScriptを使用したフロントエンド開発の勉強中です。
				開発者が実装しやすいことを重視し、スケジュールを円滑に進めます。</p> <p class="pb-2" data-astro-cid-j7pv25f6>
コミュニケーションツールはzoom、slackの使用が長いですが、
					ご要望に応じて柔軟に対応可能です。
</p> <p class="pb-2" data-astro-cid-j7pv25f6>作って終わりではなく、定期的に効果検証を行って課題改善に尽くします。</p> </div> </div> <ul class="tag flex flex-wrap justify-around" data-astro-cid-j7pv25f6> ${Array.from(new Set(response.contents.flatMap((content) => content.toolTag[0].tag))).map((tag, index) => renderTemplate`<li${addAttribute(index, "key")} class="bg-white px-4 py-1 md:px-8 md:py-2  rounded-full font-semibold" data-astro-cid-j7pv25f6>${tag}</li>`)} </ul> </section> <section class=" text-white bg-black py-20 md:py-40" id="profile" data-astro-cid-j7pv25f6> <div class="max-w-screen-lg mx-auto w-11/12" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SectionHeading", $$SectionHeading, { "title": "Profile", "subTitle": "\u7D4C\u6B74", "data-astro-cid-j7pv25f6": true })} <div class=" leading-loose" data-astro-cid-j7pv25f6> <p class="pb-6" data-astro-cid-j7pv25f6>4月11日生まれ / O型 /埼玉県出身/宮城県在住</p> <p class="pb-6" data-astro-cid-j7pv25f6>Webデザインの専門学校を卒業後、地方暮らしに憧れを抱き、
<br data-astro-cid-j7pv25f6>
どうせ住むならと｢山村･豪雪･過疎｣三重苦の地域に移住を決意。</p> <p class="pb-6" data-astro-cid-j7pv25f6>コンサルティングファームのWebデザイナーとして新卒入社し、
<br data-astro-cid-j7pv25f6>
築50年の空き家で在宅ワークを開始する。</p> <p class="pb-6" data-astro-cid-j7pv25f6>冬は最高気温が氷点下の毎日。何度も水道が凍り、
<br data-astro-cid-j7pv25f6>
寒さで眠れない夜を過ごすも2度の越冬に成功。</p> <p class="pb-6" data-astro-cid-j7pv25f6>降雪により1年の半分以上愛車のバイクに乗れない事情から、
<br data-astro-cid-j7pv25f6>
泣く泣くあたたかい地域を目指して新天地へ。</p> <p class="pb-6" data-astro-cid-j7pv25f6>フリーのWebデザイナーとして活動を始め今に至る。</p> <p class="" data-astro-cid-j7pv25f6>趣味は自炊と散歩。</p> </div> </div> </section> <section class="md:max-w-screen-lg mx-auto w-11/12  py-20 md:py-40" id="contact" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SectionHeading", $$SectionHeading, { "title": "Contact", "subTitle": "\u304A\u554F\u3044\u5408\u308F\u305B", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Contact", $$Contact, { "data-astro-cid-j7pv25f6": true })} </section>   ` })}`;
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
