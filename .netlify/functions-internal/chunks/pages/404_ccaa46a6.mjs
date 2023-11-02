/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, g as renderSlot, h as renderHead, i as addAttribute, j as renderComponent, m as maybeRenderHead } from '../astro_c2dee623.mjs';
import 'html-escaper';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://benpagegil.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="" data-astro-cid-sckkx6r4><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="generator"', `><meta name="description" content="Hey! I'm a &quot;digital&quot; strategist with experience building teams and managing integrated grassroots fundraising programs for leading political campaigns, committees, and nonprofits."><title>`, "</title>", '</head><body class="bg-stone-100 dark:bg-slate-900" data-astro-cid-sckkx6r4><div class="bg-stone-100 dark:bg-slate-900 overflow-hidden min-h-screen flex flex-col justify-between" data-astro-cid-sckkx6r4>', `<footer class="relative mt-auto" data-astro-cid-sckkx6r4><div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8" data-astro-cid-sckkx6r4><div class="flex justify-center space-x-6 md:order-2" data-astro-cid-sckkx6r4><a href="https://www.linkedin.com/in/hireben/" target="_blank" class="text-gray-400 hover:text-slate-800 dark:hover:text-cyan-400" data-astro-cid-sckkx6r4><span class="sr-only" data-astro-cid-sckkx6r4>LinkedIn</span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-sckkx6r4><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" data-astro-cid-sckkx6r4></path></svg></a><a href="https://github.com/bp-g" target="_blank" class="text-gray-400 hover:text-slate-800 dark:hover:text-cyan-400" data-astro-cid-sckkx6r4><span class="sr-only" data-astro-cid-sckkx6r4>GitHub</span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-sckkx6r4><path fill-rule="evenodd" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" clip-rule="evenodd" data-astro-cid-sckkx6r4></path></svg></a><button id="themeToggle" data-astro-cid-sckkx6r4><span class="sr-only" data-astro-cid-sckkx6r4>Light and Dark Mode Toggle</span><svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-sckkx6r4><path class="sun" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z" data-astro-cid-sckkx6r4></path><path class="moon" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" data-astro-cid-sckkx6r4></path></svg></button><script>
										const theme = (() => {
					if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
						return localStorage.getItem('theme');
					}
					if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
						return 'dark';
					}
					return 'light';
					})();

					if (theme === 'light') {
					document.documentElement.classList.remove('dark');
					} else {
					document.documentElement.classList.add('dark');
					}

					window.localStorage.setItem('theme', theme);

					const handleToggleClick = () => {
					const element = document.documentElement;
					element.classList.toggle('dark');

					const isDark = element.classList.contains('dark');
					localStorage.setItem('theme', isDark ? 'dark' : 'light');
					};

					document.getElementById('themeToggle').addEventListener('click', handleToggleClick);

					// Add event listener to detect system preference change
					window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
					if (e.matches) {
						// System switched to dark mode
						document.documentElement.classList.add('dark');
						localStorage.setItem('theme', 'dark');
					} else {
						// System switched to light mode
						document.documentElement.classList.remove('dark');
						localStorage.setItem('theme', 'light');
					}
					});

				  <\/script></div><div class="mt-8 md:mt-0 md:order-1" data-astro-cid-sckkx6r4><p class="text-center text-base text-gray-400" data-astro-cid-sckkx6r4>&copy; 2023 Ben Page-Gil</p></div></div></footer></div></body></html>`])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/bpg/Sites/bpg-com/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://benpagegil.com");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ben Page-Gil | Hire me" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="min-h-full bg-cover bg-top sm:bg-top"><div class="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48"><div class="dark:bg-slate-700 py-20 rounded-md"><p class="text-base font-semibold text-black dark:text-slate-200 text-opacity-50">404</p><h1 class="mt-2 text-4xl font-bold text-black dark:text-slate-200 tracking-tight sm:text-5xl sm:tracking-tight">Uh oh! I think you’re lost.</h1><p class="mt-2 text-lg font-medium text-black dark:text-slate-200 text-opacity-50">It looks like the page you’re looking for doesn't exist.</p><div class="mt-6"><a href="/" class="inline-flex items-center px-4 py-2 border-4 border-black text-md font-medium text-gray-800
          bg-stone-50 dark:bg-slate-200 shadow-[7px_7px_0px_0px_rgba(0,0,0)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0)] transition ease-in-out"> GO BACK HOME </a></div></div></div></main>` })}`;
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
