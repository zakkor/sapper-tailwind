// only needed if you want to purge
const purgecss = require('@fullhuman/postcss-purgecss')({
	content: ['./src/**/*.svelte', './src/**/*.html'],
	defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

module.exports = {
	plugins: [
		require('tailwindcss'),
		require('postcss-preset-env')({
			autoprefixer: true,
			stage: 3,
			features: {
				'nesting-rules': true,
			},
		}),

		// only needed if you want to purge
		...(process.env.NODE_ENV === 'production'
			? [
					purgecss,
					require('cssnano')({
						preset: ['default', { discardComments: { removeAll: true } }],
					}),
			  ]
			: []),
	],
}
