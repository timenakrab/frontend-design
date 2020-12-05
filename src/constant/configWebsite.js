const process = require('process');

const baseUrlDev = 'http://127.0.0.1:5050';
const baseUrlProd = 'https://time-pai-ruey.netlify.app';

const websiteUrl = process.env.NODE_ENV === 'production' ? baseUrlProd : baseUrlDev;
const contentLang = 'th';
const seoTitle = 'Home';
const seoDesc = 'Time Pai Ruey';
const seoPage = '/';
const websiteLogo = `${websiteUrl}/time-pai-ruey.png`;
const seoKeywords = '';

module.exports = {
  websiteUrl,
  contentLang,
  seoTitle,
  seoDesc,
  seoPage,
  websiteLogo,
  seoKeywords,
};
