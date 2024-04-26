import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import icon from "astro-icon";
import UnoCSS from "@unocss/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), UnoCSS({ injectReset: true }), tailwind(), icon()],
  output: "server"
});