/* empty css                                    */
import { c as createComponent, a as createAstro, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute, u as unescapeHTML } from '../chunks/astro/server_Bvyz7Nc1.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_6_z09weM.mjs';
import 'clsx';
import { createClient } from 'microcms-js-sdk';
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

const client = createClient({
  serviceDomain: "4lriitkshs",
  apiKey: "DuOoe273dluZt7QrLANSOLpzrfluRPI8gOIL"
});
const getBlogs = async (queries) => {
  return await client.get({ endpoint: "blogs", queries });
};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const response = await getBlogs({ fields: ["id", "title", "thumbnail", "content", "webSiteUrl", "toolTag"] });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-24" id="mainVisual"> <div><img src="/public/mainVisualImage.jpg" alt="" class="w-1/4 m-auto rounded-full mb-6 filter saturate-0 transition-filter duration-300 ease-in-out hover:saturate-100 hover:scale-105"></div> <h1 class="text-4xl lg:text-5xl text-center mb-2 font-extrabold">赤津優弥</h1> <p class="text-center">Web Designer</p> </section> <section class="max-w-screen-lg mx-auto w-11/12 py-20 md:py-40 mt-16" id="works"> ${renderComponent($$result2, "SectionHeading", $$SectionHeading, { "title": "Works", "subTitle": "\u304A\u4ED5\u4E8B\u5B9F\u7E3E" })} <ul class="grid grid-cols-1  gap-6"> ${response.contents.map((content) => renderTemplate`<li class="js-listItem container bg-white rounded-lg hover:rounded-none"> <a${addAttribute(content.webSiteUrl, "href")} target="_blank"> <div class="overflow-hidden"> <img${addAttribute(content.thumbnail.url, "src")}${addAttribute(content.title, "alt")} class="rounded-t-lg transition-transform duration-300 ease-in-out transform hover:scale-110"></div> <div class="p-5"> <h3 class="mb-2 text-2xl font-bold text-gray-900">${content.title}</h3> <div class="mb-3 text-gray-700">${unescapeHTML(content.content)}</div> </div> <ul class="tag flex p-5 pt-0 gap-4 flex-wrap"> ${content.toolTag && content.toolTag[0].tag.map((tag) => renderTemplate`<li class=" bg-gray-200 px-6 py-1 rounded-full  text-gray-500 text-sm tracking-wider">${tag}</li>`)} </ul> </a> </li>`)} </ul> </section>  <section class="max-w-screen-lg mx-auto w-11/12 py-20 md:py-40" id="service"> ${renderComponent($$result2, "SectionHeading", $$SectionHeading, { "title": "Service", "subTitle": "\u696D\u52D9\u9818\u57DF" })} <span class="サービス"></span> <div class=""> <div class="py-6"> <h3 class="text-2xl font-bold pb-2">Webデザイン制作 / フロントエンド開発</h3> <span class="text-gray-400 capitalize">web design / frontend Development</span> </div> <div class="pb-8 leading-loose"> <div class="pb-2">デザインはFigmaを使用しています。</div> <p class="pb-2">
ノーコードツールStudioを活用して一気通貫した納品も可能ですので、
					最小限のコミュニケーションコストで制作いたします。
</p> <p class="pb-2">Wordpressテーマ開発などコーディングの経験がございます。
				Astro、TypeScriptを使用したフロントエンド開発の勉強中です。
				開発者が実装しやすいことを重視し、スケジュールを円滑に進めます。</p> <p class="pb-2">
コミュニケーションツールはzoom、slackの使用が長いですが、
					ご要望に応じて柔軟に対応可能です。
</p> <p class="pb-2">作って終わりではなく、定期的に効果検証を行って課題改善に尽くします。</p> </div> </div> <ul class="tag flex flex-wrap justify-around"> ${Array.from(new Set(response.contents.flatMap((content) => content.toolTag[0].tag))).map((tag, index) => renderTemplate`<li${addAttribute(index, "key")} class="bg-white px-4 py-1 md:px-8 md:py-2  rounded-full font-semibold">${tag}</li>`)} </ul> </section> <section class=" text-white bg-black py-20 md:py-40" id="profile"> <div class="max-w-screen-lg mx-auto w-11/12"> ${renderComponent($$result2, "SectionHeading", $$SectionHeading, { "title": "Profile", "subTitle": "\u7D4C\u6B74" })} <div class=" leading-loose"> <p class="pb-6">4月11日生まれ / O型 /埼玉県出身/宮城県在住</p> <p class="pb-6">Webデザインの専門学校を卒業後、地方暮らしに憧れを抱き、
<br>
どうせ住むならと｢山村･豪雪･過疎｣三重苦の地域に移住を決意。</p> <p class="pb-6">コンサルティングファームのWebデザイナーとして新卒入社し、
<br>
築50年の空き家で在宅ワークを開始する。</p> <p class="pb-6">冬は最高気温が氷点下の毎日。何度も水道が凍り、
<br>
寒さで眠れない夜を過ごすも2度の越冬に成功。</p> <p class="pb-6">降雪により1年の半分以上愛車のバイクに乗れない事情から、
<br>
泣く泣くあたたかい地域を目指して新天地へ。</p> <p class="pb-6">フリーのWebデザイナーとして活動を始め今に至る。</p> <p class="">趣味は自炊と散歩。</p> </div> </div> </section> <section class="md:max-w-screen-lg mx-auto w-11/12  py-20 md:py-40" id="contact"> ${renderComponent($$result2, "SectionHeading", $$SectionHeading, { "title": "Contact", "subTitle": "\u304A\u554F\u3044\u5408\u308F\u305B" })} ${renderComponent($$result2, "Contact", $$Contact, {})} </section> ` })}`;
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
