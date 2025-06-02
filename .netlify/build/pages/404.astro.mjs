/* empty css                                 */
import { f as createAstro, g as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CzB-FNMI.mjs';
import 'kleur/colors';
import { $ as $$Base, a as $$Container } from '../chunks/Container_DrYtfq_O.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://dabble.fyi/");
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const seo = {
    title: "Uh Oh! Page Not Found",
    description: "This is a starter repo for an blog built with Astro including open graph tags, canonical urls, RSS, sitemap support."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "seo": seo }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1>404</h1> <p>Uh Oh! We couldn't find the page you were looking for</p> <a href="/">Return Home</a> ` })} ` })}`;
}, "/Users/mattcastillo/Projects/dabble/src/pages/404.astro", void 0);

const $$file = "/Users/mattcastillo/Projects/dabble/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
