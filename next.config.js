/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			'assets.stickpng.com',
			'images.pexels.com',
			'links.papareact.com',
		],
	},
	env: {
		mapbox_key:
			'pk.eyJ1IjoiYXdhaXN0YXVxaXIxIiwiYSI6ImNsNmdwMXlueTBzczkzYm9hOGJzeWFtc2gifQ.KnTecBKziqIJ6LJMWGgsaw',
	},
};

module.exports = nextConfig;
