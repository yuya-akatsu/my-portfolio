/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_Ciz6EALz.mjs';
import 'kleur/colors';
import { g as getBlogDetail, a as getBlogs, $ as $$BaseLayout } from '../chunks/microcms_BhAfFWBj.mjs';
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My first blog with Astro" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="title">${blog.title}</h1> <p class="publishedAt">公開日時：${blog.publishedAt}</p> <div class="post">${unescapeHTML(blog.content)}</div> </main> ` })}`;
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
