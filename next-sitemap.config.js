/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://liva-salon.de",
    generateRobotsTxt: true,

    // Sitemap Optionen
    sitemapSize: 5000,
    changefreq: "weekly",
    priority: 0.7,

    // Robots.txt Regeln
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        additionalSitemaps: [
            "https://liva-salon.de/sitemap.xml",
        ],
    },

    // Wichtige Seiten priorisieren
    transform: async (config, path) => {
        let priority = 0.7;

        if (path === "/") priority = 1.0;
        if (path.includes("frauen")) priority = 0.9;

        return {
            loc: path,
            changefreq: config.changefreq,
            priority,
            lastmod: new Date().toISOString(),
            alternateRefs: [],
        };
    },

    // Falls du später Seiten ausschließen willst
    exclude: [
        "/admin/*",
        "/api/*",
    ],
};