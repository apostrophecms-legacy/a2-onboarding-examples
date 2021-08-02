module.exports = {
  extend: 'apostrophe-pieces',
  name: 'article',
  label: 'Article',
  contextual: true,
  addFields: [
    {
      name: 'image',
      label: 'Image',
      type: 'singleton',
      widgetType: 'apostrophe-images'
    },
    {
      name: 'content',
      label: 'Content',
      type: 'singleton',
      widgetType: 'apostrophe-rich-text',
      options: {
        toolbar: [ 'Styles', 'Bold', 'Italic' ],
        styles: [
          { name: 'Paragraph', element: 'p' },
          { name: 'Section heading', element: 'h2' },
          { name: 'Sub-section heading', element: 'h3' }
        ],
      }
    },
    {
      name: '_categories',
      label: 'Categories',
      type: 'joinByOne',
      withType: 'category'
    }
  ],
  afterConstruct (self) {
    self.addRoutes()
  },
  construct (self, options) {
    self.addRoutes = () => {
      self.route('get', 'count', async (req, res, next) => {
        try {
          const number = await self.find(req, {}).toCount()

          return res.status(200).send(number)
        } catch (err) {
          return res.status(500).send(err)
        }
      })
    }
  }
};
