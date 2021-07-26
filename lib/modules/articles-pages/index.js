module.exports = {
  extend: 'apostrophe-pieces-pages',
  label: 'Article Page',
  alias: 'articlesPages',
  piecesFilters: [
    {
      name: 'tags',
      counts: true
    }
  ],
  construct (self, options) {
    self.addHelpers({
      toSentence: function (text) {
	      return text.replace('-', ' ');
      }
    });
  }
};