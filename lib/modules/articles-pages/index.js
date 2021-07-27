const sanitize = require('sanitize-html')

module.exports = {
  extend: 'apostrophe-pieces-pages',
  label: 'Article Page',
  alias: 'articlesPages',
  piecesFilters: [
    {
      name: 'tags',
      counts: true
    },
    {
      name: 'categories'
    }
  ],
  construct (self, options) {
    self.addHelpers({
      countWords ([item]) {
        const sanitized = sanitize(item.content, { allowedTags: [] }).replace(/\n/g, '')

        return sanitized.trim().split(' ').length
      }
    });

    self.apos.templates.addFilter({
      countWords ([item]) {
        const sanitized = sanitize(item.content, { allowedTags: [] })
	        .replace(/\n/g, '')

        return sanitized.trim().split(' ').length
      }
    });
  }
};