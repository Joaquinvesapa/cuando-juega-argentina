import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import { manifest } from './src/utils/seoConfig'
import { VitePWA } from 'vite-plugin-pwa'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	vite: {
		build: {
			cssMinify: 'lightningcss',
		},
		plugins: [
			VitePWA({
				registerType: 'autoUpdate',
				manifest,
				workbox: {
					globDirectory: '.vercel/output/static',
					globPatterns: ['**/*.{html,js,css,woff,woff2,ttf,eot,ico}'],
					runtimeCaching: [
						{
							urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,
							handler: 'CacheFirst',
							options: {
								cacheName: 'images',
								expiration: {
									maxEntries: 100,
									maxAgeSeconds: 30 * 24 * 60 * 60,
								},
							},
						},
						{
							urlPattern: /\.(?:woff|woff2|ttf|eot|ico)$/,
							handler: 'CacheFirst',
							options: {
								cacheName: 'fonts',
								expiration: {
									maxEntries: 10,
									maxAgeSeconds: 30 * 24 * 60 * 60,
								},
							},
						},
					],
					navigateFallback: null,
				},
			}),
		],
	},
})
