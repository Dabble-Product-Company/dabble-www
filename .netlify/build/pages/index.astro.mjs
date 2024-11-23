/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderSlot, d as renderComponent } from '../chunks/astro/server_DT9476fj.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Container, a as $$Base, s as settings } from '../chunks/Container_dghWpRsg.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://astro-minimal-starter.netlify.app/");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Link;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="text-neutral-600 dark:text-neutral-400 underline hover:text-neutral-800 dark:hover:text-neutral-200 decoration-neutral-400 dark:decoration-neutral-600 hover:decoration-neutral-600 dark:hover:decoration-neutral-400"> ${renderSlot($$result, $$slots["default"])}</a>`;
}, "/Users/mattcastillo/Projects/pattern-scrape/pattern-pipeline-workers/dabble/src/components/Link.astro", void 0);

const $$Astro = createAstro("https://astro-minimal-starter.netlify.app/");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="bg-neutral-300 dark:bg-neutral-700 px-4 py-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-600 font-semibold"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/mattcastillo/Projects/pattern-scrape/pattern-pipeline-workers/dabble/src/components/Button.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = settings.title;
  const description = settings.description;
  const seo = {
    title,
    description
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "seo": seo }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "class": "flex flex-col items-center justify-center" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center mt-48 space-y-8"> <h1 class="text-4xl font-bold text-center">Creating software for makers</h1> <p class="text-lg text-center text-neutral-600 dark:text-neutral-400"> ${renderComponent($$result3, "Link", $$Link, { "href": "/" }, { "default": ($$result4) => renderTemplate`${title}` })} is a Brooklyn-based product studio building apps to help people explore, create, and share creative work.
</p> <p class="text-lg text-center text-neutral-600 dark:text-neutral-400">
Currently dabbling on our first product – coming in 2025.
</p> ${renderComponent($$result3, "Button", $$Button, { "href": "mailto:mail@dabble.fyi" }, { "default": ($$result4) => renderTemplate`Get in touch` })} </div> ` })} ` })}`;
}, "/Users/mattcastillo/Projects/pattern-scrape/pattern-pipeline-workers/dabble/src/pages/index.astro", void 0);

const $$file = "/Users/mattcastillo/Projects/pattern-scrape/pattern-pipeline-workers/dabble/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
