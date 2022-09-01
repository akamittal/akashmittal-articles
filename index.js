const axios = require('axios');
const { XMLParser, XMLBuilder, XMLValidator} = require("./node_modules/fast-xml-parser/src/fxp");

const getArticles = async ({
  page = 'post-sitemap.xml'
} = {}) => {
  try {
    const parser = new XMLParser();
    const articles = await axios.get(
      `https://akashmittal.com/${page}`
    );

    let jObj = parser.parse(articles.data);

    return jObj.urlset.url
      .map((article) => {
        return {
          url: article.loc
        };
      });
  } catch (error) {
    return [];
  }
};

module.exports = { getArticles };
