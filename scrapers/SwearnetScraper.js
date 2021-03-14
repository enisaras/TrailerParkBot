const got = require('got');
const cheerio = require('cheerio');
const url = 'https://www.swearnet.com/shows/park-after-dark/seasons/1';

  const extractLinks = async (url) => {
    try {
      // Fetching HTML
      const response = await got(url);
      const html = response.body;
  
      // Using cheerio to extract <a> tags
      const $ = cheerio.load(html);
  
      const linkObjects = $('.child.large > a');
  
      // Collect the "href" and "title" of each link and add them to an array
      const links = [];
      linkObjects.each((index, element) => {
        links.push({
          text: $(element).text(), // get the text
          href: $(element).attr('href'), // get the href attribute
        });
      });
  
      console.log(links);
    } catch (error) {
      console.log(error.response.body);
    }
  };

  console.log(extractLinks(url));