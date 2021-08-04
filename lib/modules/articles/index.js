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
      self.route('get', 'count', /* You can add middlewares here */ async (req, res, next) => {
        try {
          const number = await self.find(req, {}).toCount()

          return res.status(200).send({ number: number })
        } catch (err) {
          return res.status(500).send(err)
        }
      })

      self.apiRoute('get', 'count2', /* You can add middlewares here */ async (req, res, next) => {
        try {
          const number = await self.find(req, {}).toCount()

          throw new Error('My Error')

          return next(null, { number: number })
        } catch (err) {
          req.errorMessages = [err.message]

          return next(
            err,
            null,
            { type: 'internal' }
          )
        }
      })

      self.htmlRoute('get', 'html', /* You can add middlewares here */ (req, res, next) => {
        // Errors string
        // notfound ==> 404
        // invalid ==> 401
        // forbidden ==> 403
        // anything else ==> 500

        return next('notfound')

        return next(null, '<h1>My HTML Title</h1>')
      })

      self.renderRoute('get', 'render', /* You can add middlewares here */ (req, res, next) => {
        // Errors string
        // notfound ==> 404
        // invalid ==> 401
        // forbidden ==> 403
        // anything else ==> 500


        return next(null, {
          template: 'test.html'
        })
      })
    }
  }
};

