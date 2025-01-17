import { defineConfig } from 'vite';

const viteConfig = defineConfig({
	build: {
		lib: {
			name: 'screenfull',
			entry: 'index.js',
			formats: ['cjs', 'esm'],
			fileName: format => `screenfull.${format}.js`,
		},
	},
});

export default viteConfig;
