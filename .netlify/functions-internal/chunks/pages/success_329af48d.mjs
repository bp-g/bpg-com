/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_c2dee623.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_ccaa46a6.mjs';

const $$Astro = createAstro("https://benpagegil.com");
const $$Success = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Success;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ben Page-Gil | Hire me" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="m-auto"><div class="relative pt-6 pb-16 sm:pb-24 selection:bg-lime-200 dark:selection:bg-lime-600"><section class="mt-16 sm:mt-24"><div class="mx-auto max-w-7xl"><div class="lg:grid lg:grid-cols-12 lg:gap-8"><div class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"><div><h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"><span class="md:block text-stone-800 dark:text-slate-300">Ben Page-Gil</span></h1><p class="mt-3 text-base text-stone-700 dark:text-slate-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Hey! I'm a campaign strategist with experience building large teams and running integrated marketing campaigns. Right now I'm helping organizations with grassroots fundraising and organizing via SMS.</p></div></div><div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6"><div class="bg-blue-100 dark:bg-slate-600 sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden"><div class="px-4 py-8 sm:px-10"><div><p class="text-2xl font-semibold text-gray-700 dark:text-slate-300">Thanks for your message. I'll be in touch soon. </p></div></div></div></div></div></div></section></div></main>` })}`;
}, "/Users/bpg/Sites/bpg-com/src/pages/success.astro", void 0);

const $$file = "/Users/bpg/Sites/bpg-com/src/pages/success.astro";
const $$url = "/success";

export { $$Success as default, $$file as file, $$url as url };
