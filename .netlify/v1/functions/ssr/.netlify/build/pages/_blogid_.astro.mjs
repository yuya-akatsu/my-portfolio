/* empty css                                    */
import { c as createComponent, a as createAstro, r as renderTemplate } from '../chunks/astro/server_Bvyz7Nc1.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$blogId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$blogId;
  return renderTemplate`<!-- ---
import BaseLayout from "../layouts/BaseLayout.astro";


export async function getStaticPaths() {
  const response = await getBlogs({ fields: ["id"] });
  return response.contents.map((content: any) => ({
    params: {
      blogId: content.id,
    },
  }));
}

const { blogId } = Astro.params;
const blog = await getBlogDetail(blogId as string);


---

<BaseLayout title={blog.title}>
    <section class="max-w-screen-lg mx-auto w-11/12 py-20 md:py-40 mt-16">
    <img src={blog.thumbnail.url} alt={blog.thumbnail.alt} />
    <h1 class="text-4xl capitalize tracking-wide mb-2 font-extrabold">{blog.title}</h1>
    <div class="" set:html={blog.content}></div>
    <ul class="flex p-5 pt-0 gap-4 flex-wrap">
        <li class=" bg-gray-200 px-6 py-1 rounded-full  text-gray-500 text-sm tracking-wider">{blog.tag}</li>
    </ul>
<a href={blog.webSiteUrl} target="_blank" class="btn">Webサイトに遷移</a>

</section>

</BaseLayout> -->`;
}, "/Users/yuyaakatsu/my-portfolio/src/pages/[blogId].astro", void 0);

const $$file = "/Users/yuyaakatsu/my-portfolio/src/pages/[blogId].astro";
const $$url = "/[blogId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$blogId,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
