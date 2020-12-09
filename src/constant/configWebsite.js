const process = require('process');

const baseUrlDev = `${process.env.BASE_URL}:${process.env.PORT}`;
const baseUrlProd = 'https://time-pai-ruey.netlify.app';

const websiteUrl = process.env.NODE_ENV === 'production' ? baseUrlProd : baseUrlDev;
const contentLang = 'th';
const seoTitle = 'Home';
const seoDesc = 'Time Pai Ruey';
const seoPage = '/';
const websiteLogo = '/time-pai-ruey.png';
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
