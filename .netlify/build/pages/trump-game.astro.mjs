/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BAsBJlZ1.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BGC0Zwy9.mjs';
export { renderers } from '../renderers.mjs';

const $$TrumpGame = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "class": " bg-gray-100" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto py-20"> <button id="resetButton" class="mb-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
カードをリセット
</button> <div id="cardContainer" class="grid grid-cols-5 gap-4"></div> </div>  ` })}`;
}, "/Users/yuyaakatsu/my-portfolio/src/pages/trump-game.astro", void 0);

const $$file = "/Users/yuyaakatsu/my-portfolio/src/pages/trump-game.astro";
const $$url = "/trump-game";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$TrumpGame,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
