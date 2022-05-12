import { defineConfig } from 'vite';

const viteConfig = defineConfig({
	build: {
		lib: {
			name: 'screenfull',
			entry: 'index.js',
			formats: ['cjs', 'esm', 'umd'],
		},
	},
});

export default viteConfig;
