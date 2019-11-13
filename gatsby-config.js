const path = require('path');
require('dotenv').config();

module.exports = {
    siteMetadata: {
        title: 'Website',
        author: 'Anders Hallundbæk, Remotely.dk',
        siteUrl: 'https://website.com',
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },

        // Source: DatoCMS
        // https://www.gatsbyjs.org/packages/gatsby-source-datocms/
        // {
        //     resolve: 'gatsby-source-datocms',
        //     options: {
        //         // You can find your read-only API token under the Settings > API tokens
        //         // section of your administrative area:
        //         apiToken: `${process.env.DATO_API_TOKEN}`,

        //         // If you are working on development/staging environment, you might want to
        //         // preview the latest version of records instead of the published one:
        //         previewMode: `${process.env.SITE_ENV === 'staging'}`,

        //         // Disable automatic reloading of content when some change occurs on DatoCMS:
        //         disableLiveReload: true,

        //         // Fallbacks
        //         localeFallbacks: {
        //             da: ['en'],
        //         },
        //     },
        // },

        // Root import
        // https://www.gatsbyjs.org/packages/gatsby-plugin-root-import/
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                src: path.join(__dirname, 'src'),
                styles: path.join(__dirname, 'src/styles'),
                grid: path.join(__dirname, 'src/grid'),
                components: path.join(__dirname, 'src/components'),
                utilities: path.join(__dirname, 'src/utilities'),
                hooks: path.join(__dirname, 'src/utilities/hooks'),
            },
        },

        // Image sharp
        // https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/
        {
            resolve: 'gatsby-transformer-sharp',
        },

        // Sharp
        // https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/
        {
            resolve: 'gatsby-plugin-sharp',
        },

        // Emotion JS-in-CSS
        // https://www.gatsbyjs.org/packages/gatsby-plugin-emotion/
        {
            resolve: 'gatsby-plugin-emotion',
        },

        // Web manifest
        // https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/
        // {
        //     resolve: 'gatsby-plugin-manifest',
        //     options: {
        //         name: 'xx',
        //         short_name: 'xx',
        //         start_url: '/',
        //         icons: [
        //             {
        //                 src: '/favicons/android-chrome-192x192.png',
        //                 sizes: '192x192',
        //                 type: 'image/png',
        //             },
        //             {
        //                 src: '/favicons/android-chrome-256x256.png',
        //                 sizes: '256x256',
        //                 type: 'image/png',
        //             },
        //         ],
        //         theme_color: '#e4e0d9',
        //         background_color: '#e4e0d9',
        //         display: 'standalone',
        //         include_favicon: false,
        //         legacy: true,
        //     },
        // },

        // SVGs
        // https://www.gatsbyjs.org/packages/gatsby-plugin-svgr/
        {
            resolve: 'gatsby-plugin-svgr',
            options: {
                // https://github.com/smooth-code/svgr for a list of all options
                viewBox: true,
                ids: true,
                svgo: true,
                svgoConfig: {
                    addClassesToSVGElement: true,
                },
            },
        },

        // Robots.txt
        // https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/
        // {
        //     resolve: 'gatsby-plugin-robots-txt',
        //     options: {
        //         resolveEnv: () => process.env.SITE_ENV,
        //         env: {
        //             staging: {
        //                 policy: [{ userAgent: '*', disallow: ['/'] }],
        //             },
        //             production: {
        //                 policy: [
        //                     {
        //                         userAgent: '*',
        //                         allow: '/',
        //                         disallow: [],
        //                     },
        //                 ],
        //             },
        //         },
        //     },
        // },

        // Sitemap
        // https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                exclude: [
                    '/dev-404-page',
                    '/404',
                    '/404.html',
                    '/offline-plugin-app-shell-fallback',
                ],
            },
        },

        // gatsby-plugin-google-gtag
        // https://www.gatsbyjs.org/packages/gatsby-plugin-google-gtag/
        // {
        //     resolve: 'gatsby-plugin-google-gtag',
        //     options: {
        //         // You can add multiple tracking ids and a pageview event will be fired for all of them.
        //         trackingIds: [
        //             'xx-xxxxxxxx-x', // Google Analytics / GA
        //             //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
        //             //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        //         ],

        //         // This object gets passed directly to the gtag config command
        //         // This config will be shared accross all trackingIds
        //         gtagConfig: {
        //             // optimize_id: 'OPT_CONTAINER_ID',
        //             anonymize_ip: true,
        //         },

        //         // This object is used for configuration specific to this plugin
        //         pluginConfig: {
        //             // Puts tracking script in the head instead of the body
        //             head: false,

        //             // Setting this parameter is also optional
        //             respectDNT: true,

        //             // Avoids sending pageview hits from custom paths
        //             exclude: [],
        //         },
        //     },
        // },

        // Offline
        // https://www.gatsbyjs.org/packages/gatsby-plugin-offline/ (always last)
        // {
        //     resolve: 'gatsby-plugin-offline',
        // },

        // Netlify plugin
        // https://www.gatsbyjs.org/packages/gatsby-plugin-netlify/
        {
            resolve: 'gatsby-plugin-netlify',
        },
    ],
};
