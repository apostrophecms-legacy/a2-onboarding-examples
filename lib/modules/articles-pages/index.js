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
  afterConstruct (self) {
    self.dispatchAll()
  },
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

    self.dispatchAll = () => {
      self.dispatch('/', self.indexPage);
      self.dispatch('/:slug', (req, callback) => {
        const { slug } = req.params

        req.session.lastArticle = slug

        return self.showPage(req, callback)
      })
    }
  }
};
