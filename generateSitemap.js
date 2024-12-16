// import sitemap from 'sitemap';
// import fs from 'fs';

// const { createSitemap } = sitemap;

// // Define your website's URLs
// const urls = [
//   { url: '/', changefreq: 'daily', priority: 1.0 },
//   { url: '/about', changefreq: 'weekly', priority: 0.8 },
//   { url: '/contact', changefreq: 'monthly', priority: 0.5 },
//   // Add more URLs as needed
// ];

// // Create a sitemap object
// const sitemapInstance = createSitemap({
//   hostname: 'https://together-for-gaza.netlify.app/',
//   cacheTime: 600000, // 600 sec - cache purge period
//   urls: urls,
// });

// // Generate sitemap.xml file
// fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toXML());
// console.log('Sitemap generated and saved to /public/sitemap.xml');
