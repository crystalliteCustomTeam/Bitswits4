/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wp23.cryscampus.com',
                port: '',
                pathname: '/**',
            }
        ]
    }
}

export default nextConfig;