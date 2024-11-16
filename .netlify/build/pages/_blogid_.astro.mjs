/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute, u as unescapeHTML } from '../chunks/astro/server_Ciz6EALz.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BO1KcOD3.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const response = await getBlogs({ fields: ["id"] });
  return response.contents.map((content) => ({
    params: {
      blogId: content.id
    }
  }));
}
const $$blogId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$blogId;
  const { blogId } = Astro2.params;
  const blog = await getBlogDetail(blogId);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": blog.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-screen-lg mx-auto w-11/12 py-20 md:py-40 mt-16"> <img${addAttribute(blog.thumbnail.url, "src")}${addAttribute(blog.thumbnail.alt, "alt")}> <h1 class="text-4xl capitalize tracking-wide mb-2 font-extrabold">${blog.title}</h1> <div class="">${unescapeHTML(blog.content)}</div> <ul class="flex p-5 pt-0 gap-4 flex-wrap"> <li class=" bg-gray-200 px-6 py-1 rounded-full  text-gray-500 text-sm tracking-wider">${blog.tag}</li> </ul> <a${addAttribute(blog.webSiteUrl, "href")} target="_blank" class="btn">Webサイトに遷移</a> </section> ` })}`;
}, "/Users/yuyaakatsu/my-portfolio/src/pages/[blogId].astro", void 0);

const $$file = "/Users/yuyaakatsu/my-portfolio/src/pages/[blogId].astro";
const $$url = "/[blogId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$blogId,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
