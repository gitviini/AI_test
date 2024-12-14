import { createSecureHeaders } from 'next-secure-headers'; 

/** @type {import('next').NextConfig} */
const nextConfig = {
  headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          ...createSecureHeaders({
            // HSTS Preload: https://hstspreload.org/
            forceHTTPSRedirect: [
              true,
              { maxAge: 63072000, includeSubDomains: true, preload: true },
            ],
          }),
        ],
      },
    ];
  },
  cacheHandler: require.resolve("./cache-handler.js"),
  cacheMaxMemorySize: 100,
};

export default nextConfig;
