/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        let modularizeImports = null;
        config.module.rules.some((rule) =>
          rule.oneOf?.some((oneOf) => {
            modularizeImports =
              oneOf?.use?.options?.nextConfig?.modularizeImports;
            return modularizeImports;
          }),
        );
        if (modularizeImports?.["@headlessui/react"])
          delete modularizeImports["@headlessui/react"];
        return config;
      },
    images: {
      dangerouslyAllowSVG: true,
      contentDispositionType: 'attachment',
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      domains:["tailwindui.com"],
      remotePatterns:[
        {
          protocol:'https',
          hostname:'tailwindui.com',
          port:'',
          pathname:'/img/logos/**'
        },
      ],
    },
};
export default nextConfig;
