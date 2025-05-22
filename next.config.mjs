/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'k.kakaocdn.net',
            },
        ],
    },
    assetPrefix: '.',
    output: "standalone",
};

export default nextConfig;
