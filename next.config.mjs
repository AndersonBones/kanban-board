/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions:['page.tsx', 'api.ts', 'api.tsx'],
  images:{
    formats:['image/avif', 'image/webp']
  },

  experimental: {
    fontLoaders: [
      { loader: 'next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  async redirects(){
    return [
      {
        source:'/',
        destination:'/home',
        permanent:true
      }
    ]
  }
};

export default nextConfig;
