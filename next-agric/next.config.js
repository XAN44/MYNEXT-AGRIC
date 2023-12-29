/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  experimental: {
    serverActions: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "**",
        protocol: "https",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias["@"] = __dirname;
    return config;
  },
};
=======
    experimental: {
        serverActions: true
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    reactStrictMode: false

}

module.exports = {
    images: {
        remotePatterns: [
            {
                hostname: '**',
                protocol: "https"
            },
        ],
    },
    webpack: (config) => {
        config.resolve.alias['@'] = __dirname;
        return config;
    },
}
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
