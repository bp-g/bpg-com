/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, f as renderComponent, m as maybeRenderHead } from '../astro_d88210ec.mjs';
import 'html-escaper';
import 'clsx';

const $$Astro$1 = createAstro("https://benpagegil.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class=""><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="Hey! I'm a &quot;digital&quot; strategist with experience building teams and managing integrated grassroots fundraising programs for leading political campaigns, committees, and nonprofits."><title>${title}</title>${renderHead()}</head><body class="bg-white dark:bg-slate-900"><div class="bg-white dark:bg-slate-900 overflow-hidden min-h-screen flex flex-col justify-between">${renderSlot($$result, $$slots["default"])}<footer class="relative mt-auto"><div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"><div class="flex justify-center space-x-6 md:order-2"><a href="https://www.linkedin.com/in/hireben/" target="_blank" class="text-gray-400 hover:text-slate-800 dark:hover:text-cyan-400"><span class="sr-only">LinkedIn</span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path></svg></a><a href="https://github.com/bp-g" target="_blank" class="text-gray-400 hover:text-slate-800 dark:hover:text-cyan-400"><span class="sr-only">GitHub</span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" clip-rule="evenodd"></path></svg></a></div><div class="mt-8 md:mt-0 md:order-1"><p class="text-center text-base text-gray-400">&copy; 2023 Ben Page-Gil</p></div></div></footer></div></body></html>`;
}, "/Users/bpg/Sites/bpg-com/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://benpagegil.com");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ben Page-Gil | Hire me" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="min-h-full bg-cover bg-top sm:bg-top"><div class="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48"><p class="text-base font-semibold text-gray-50 text-opacity-50">404</p><h1 class="mt-2 text-4xl font-bold text-gray-50 tracking-tight sm:text-5xl sm:tracking-tight">Uh oh! I think you’re lost.</h1><p class="mt-2 text-lg font-medium text-gray-50 text-opacity-50">It looks like the page you’re looking for doesn't exist.</p><div class="mt-6"><a href="/" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-800
          bg-gray-400 hover:bg-gray-200"> Go back home </a></div></div></main>` })}`;
}, "/Users/bpg/Sites/bpg-com/src/pages/404.astro", void 0);

const $$file = "/Users/bpg/Sites/bpg-com/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };
