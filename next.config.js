/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
	return {
		reactStrictMode: true,
		swcMinify: true,
		experimental: {
			reactRoot: true,
			// hydrateRoot: true
		},
	};
};

module.exports = nextConfig;
