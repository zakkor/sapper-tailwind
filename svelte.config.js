import sveltePreprocess from 'svelte-preprocess'

export default {
	preprocess: (dev) =>
		sveltePreprocess({
			preserve: ['ld+json'],
			postcss: true,
		}),
}
