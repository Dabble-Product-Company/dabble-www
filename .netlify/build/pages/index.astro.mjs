/* empty css                                 */
import { g as createComponent, m as maybeRenderHead, i as addAttribute, r as renderTemplate, l as renderComponent } from '../chunks/astro/server_CzB-FNMI.mjs';
import 'kleur/colors';
import { $ as $$Base, a as $$Container, b as $$Link, s as settings } from '../chunks/Container_DrYtfq_O.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`relative flex flex-row items-center w-16 h-16 overflow-hidden bg-transparent rounded-full`, "class")}> <div class="absolute inset-0 z-10 p-0 m-0 bg-[url('../../assets/dabble-bg-light.png')] bg-cover animate-spin-slow"></div> <div class="absolute inset-0 z-10 p-0 m-0"> <svg class="w-16 h-16 p-1 m-auto fill-black" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M71.2431 35.2H99.3231V96H71.2431V35.2ZM49.7231 46.8C54.6831 46.8 58.8431 47.76 62.2031 49.68C65.5631 51.5467 68.0965 54.2133 69.8031 57.68C71.5631 61.0933 72.4431 65.52 72.4431 70.96C72.4431 76.72 71.6431 81.4933 70.0431 85.28C68.4965 89.0133 65.9631 91.92 62.4431 94C58.9765 96.08 54.4965 97.12 49.0031 97.12C44.1498 97.12 39.9898 96.3733 36.5231 94.88C33.0565 93.3333 30.3631 90.8 28.4431 87.28C26.5231 83.7067 25.5631 78.9867 25.5631 73.12C25.5631 67.1467 26.4965 62.24 28.3631 58.4C30.2831 54.5067 33.0298 51.6 36.6031 49.68C40.1765 47.76 44.5498 46.8 49.7231 46.8ZM62.4431 62.24C59.5631 62.24 57.4031 63.0133 55.9631 64.56C54.5231 66.0533 53.8031 68.56 53.8031 72.08C53.8031 75.5467 54.4965 78.0267 55.8831 79.52C57.3231 80.96 59.5098 81.68 62.4431 81.68C64.4698 81.68 66.1231 81.3333 67.4031 80.64C68.7365 79.9467 69.6965 78.9333 70.2831 77.6C70.9231 76.2133 71.2431 74.3733 71.2431 72.08C71.2431 69.7333 70.9231 67.8667 70.2831 66.48C69.6431 65.04 68.6565 63.9733 67.3231 63.28C65.9898 62.5867 64.3631 62.24 62.4431 62.24Z"></path> </svg> </div> </div>`;
}, "/Users/mattcastillo/Projects/dabble/src/components/Logo.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = settings.title;
  const description = settings.description;
  const seo = {
    title,
    description
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "seo": seo }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col w-full space-y-8 md:space-y-12"> <div class="flex flex-col w-full gap-4 m-0 mb-8"> ${renderComponent($$result3, "Logo", $$Logo, {})} </div> <h1 class="w-full m-auto text-5xl tracking-tight font-display leading-tighter md:leading-tighter md:text-7xl text-balance">For the creative in everyone</h1> <article class="prose-base"> <p>${renderComponent($$result3, "Link", $$Link, { "href": "/" }, { "default": ($$result4) => renderTemplate`${title}` })} is a product studio building experiences that inspire, empower, and amplify creative expression.</p> <p>Our mission is to make it easier for everyone to pursue their interests — whether you're a beginner, a professional, or you just like to dabble.</p> </article> <hr class="border"> <article class="space-y-4"> <h4 class="p-0 m-0 text-sm font-medium">Now Available</h4> <div class="flex flex-row items-center gap-4"> <img class="w-24 h-24 rounded-3xl" src="../assets/bobbin.png" alt="Bobbin: Sewing Organizer"> <div class="flex flex-col !gap-0 "> <h3 class="p-0 m-0">Bobbin: Sewing Organizer</h3> <h5 class="font-medium">${renderComponent($$result3, "Link", $$Link, { "href": "https://bobbin.app" }, { "default": ($$result4) => renderTemplate`bobbin.app` })} • ${renderComponent($$result3, "Link", $$Link, { "href": "https://apps.apple.com/us/app/bobbin-sewing-organizer/id6744337422?platform=iphone", "external": true }, { "default": ($$result4) => renderTemplate`App Store` })}</h5> </div> </div> </article> </div> ` })} ` })}`;
}, "/Users/mattcastillo/Projects/dabble/src/pages/index.astro", void 0);

const $$file = "/Users/mattcastillo/Projects/dabble/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
