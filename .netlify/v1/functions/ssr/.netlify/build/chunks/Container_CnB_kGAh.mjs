import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, e as renderSlot, s as spreadAttributes, d as renderComponent, f as renderHead } from './astro/server_CQoEOmdl.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const settings = {
  title: `Dabble`,
  description: `Dabble Product Co. is a product design studio building products for those who like to dabble.`,
  url: `https://dabble.fyi`, // No trailing slash!
  // JSON LD
  name: `Dabble Product Company, LLC`,
  // Twitter URL
  twitterURL: `https://x.com/dabbleproductco`
};

const $$Astro$5 = createAstro("https://dabble.fyi/");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const title = Astro2.props.title || settings.title;
  const description = Astro2.props.description || settings.description;
  const canonicalURL = Astro2.props.canonicalURL || new URL(Astro2.url.pathname, Astro2.site);
  const image = new URL(Astro2.props.image || "../../favicon.png", Astro2.site);
  return renderTemplate`<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><!-- Primary Meta Tags --><title>${title || settings.title}</title><meta name="title"${addAttribute(title || settings.title, "content")}><meta name="description"${addAttribute(description || settings.description, "content")}><!-- settingsmap --><link rel="settingsmap" href="/settingsmap.xml"><!-- RSS --><link rel="alternate" type="application/rss+xml"${addAttribute(`${settings.name} Blog`, "title")}${addAttribute(`${settings.url}/feed/blog.xml`, "href")}><!-- Canonical --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Favicon --><link rel="icon"${addAttribute(image, "href")} type="image/svg+xml"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(image, "content")}><!-- Adobe Fonts --><link rel="stylesheet" href="https://use.typekit.net/ptm5qvf.css">`;
}, "/Users/mattcastillo/Projects/dabble/src/components/BaseHead.astro", void 0);

const $$Astro$4 = createAstro("https://dabble.fyi/");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Link;
  const { href } = Astro2.props;
  const { external } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(external ? "_blank" : void 0, "target")}${addAttribute(external ? "noopener noreferrer" : void 0, "rel")} class="font-bold no-underline hover:underline">${renderSlot($$result, $$slots["default"])}</a>`;
}, "/Users/mattcastillo/Projects/dabble/src/components/Link.astro", void 0);

const $$Astro$3 = createAstro("https://dabble.fyi/");
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/Users/mattcastillo/Projects/dabble/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro$2 = createAstro("https://dabble.fyi/");
const $$Globe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Globe;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "globe", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="10"></circle> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path> <path d="M2 12h20"></path> ` })}`;
}, "/Users/mattcastillo/Projects/dabble/node_modules/lucide-astro/dist/Globe.astro", void 0);

const $$Astro$1 = createAstro("https://dabble.fyi/");
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "mail", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<rect width="20" height="16" x="2" y="4" rx="2"></rect> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path> ` })}`;
}, "/Users/mattcastillo/Projects/dabble/node_modules/lucide-astro/dist/Mail.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="flex flex-col items-center w-full gap-4 px-4 py-8 justify-items-start md:px-8 md:flex-row"> <div class="flex flex-col w-full gap-4 md:flex-row"> <div class="flex flex-row w-full gap-6"> <div class="flex flex-row items-center gap-1"> ${renderComponent($$result, "Globe", $$Globe, { "class": "w-4 h-4 " })} <h6 class="text-xs"> ${renderComponent($$result, "Link", $$Link, { "href": settings.url }, { "default": ($$result2) => renderTemplate`dabble.fyi` })} </h6> </div> <div class="flex flex-row items-center gap-1"> ${renderComponent($$result, "Mail", $$Mail, { "class": "w-4 h-4 " })} <h6 class="text-xs"> ${renderComponent($$result, "Link", $$Link, { "href": "mailto:mail@dabble.fyi" }, { "default": ($$result2) => renderTemplate`Contact` })} </h6> </div> </div> <h6 class="w-full text-xs md:text-right md:order-2">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} ${settings.name} </h6> </div> </footer>`;
}, "/Users/mattcastillo/Projects/dabble/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://dabble.fyi/");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const { seo } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { ...seo })}${renderSlot($$result, $$slots["head-bottom"])}${renderHead()}<link rel=\"icon\" type=\"image/x-icon\" href=\"/favicon.ico\" media=\"(prefers-color-scheme: light)\"><link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/favicon-16x16.png\" media=\"(prefers-color-scheme: light)\"><link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/favicon-32x32.png\" media=\"(prefers-color-scheme: light)\"><link rel=\"icon\" type=\"image/png\" sizes=\"48x48\" href=\"/favicon-48x48.png\" media=\"(prefers-color-scheme: light)\"><link rel=\"icon\" type=\"image/svg+xml\" href=\"/favicon.svg\"><link rel=\"icon\" type=\"image/x-icon\" href=\"/favicon-dark.ico\" media=\"(prefers-color-scheme: dark)\"><link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/favicon-16x16-dark.png\" media=\"(prefers-color-scheme: dark)\"><link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/favicon-32x32-dark.png\" media=\"(prefers-color-scheme: dark)\"><link rel=\"icon\" type=\"image/png\" sizes=\"48x48\" href=\"/favicon-48x48-dark.png\" media=\"(prefers-color-scheme: dark)\"><link rel=\"manifest\" href=\"/manifest.webmanifest\"><meta name=\"mobile-web-app-capable\" content=\"yes\"><meta name=\"theme-color\" content=\"#fff\"><meta name=\"application-name\"><link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon.png\"><link rel=\"mask-icon\" href=\"/safari-pinned-tab.svg\" color=\"#fff\"><meta name=\"apple-mobile-web-app-capable\" content=\"yes\"><meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black-translucent\"><meta name=\"apple-mobile-web-app-title\"><meta name=\"msapplication-TileColor\" content=\"#fff\"><meta name=\"msapplication-config\" content=\"/browserconfig.xml\"><link rel=\"yandex-tableau-widget\" href=\"/yandex-browser-manifest.json\"></head> <body class="flex flex-col max-w-3xl mx-auto font-mono antialiased prose text-black bg-white min-h-dvh dark:bg-black dark:text-white dark:prose-invert prose-neutral"> ${renderSlot($$result, $$slots["header"])} <main class="grow"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/mattcastillo/Projects/dabble/src/layouts/Base.astro", void 0);

const $$Container = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col h-full px-4 py-8 mx-auto md:py-24 md:px-8"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/mattcastillo/Projects/dabble/src/components/Container.astro", void 0);

export { $$Container as $, $$Base as a, $$Link as b, settings as s };
