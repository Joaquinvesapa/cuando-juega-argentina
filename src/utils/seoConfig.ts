import type { ManifestOptions } from 'vite-plugin-pwa';

export const manifest: Partial<ManifestOptions> = {
  name: 'Cuando Juega Argentina',
  short_name: 'Cuando Juega',
  description:
    'Web app que te informa sobre los próximos partidos de la selección argentina de fútbol.',
  theme_color: '#166EC0',
  background_color: '#FBFBFE',
  display: 'fullscreen',
  icons: [
    {
      src: '/icon/favicon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/icon/favicon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      src: '/icon/favicon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable',
    },
  ],
};
