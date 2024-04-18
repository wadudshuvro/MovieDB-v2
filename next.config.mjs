/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'simage.tmdb.org',
			},
			{
				protocol: 'https',
				hostname: 'image.tmdb.org',
			},
		],
	},
};

export default nextConfig;
