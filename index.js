const quotes = require('./Quotes.json');

function getRandomQuote(category) {
  if (category) {
    const filtered = quotes.filter(q => q.category === category.toLowerCase());
    if (filtered.length === 0) {
      throw new Error('Category non trouvée');
    }
    return filetred[Math.floor(Math.random() * filtered.length)];
  }
  module.exports = { getRandomQuote };
