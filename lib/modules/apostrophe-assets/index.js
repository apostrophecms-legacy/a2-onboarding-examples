// This configures the apostrophe-assets module to push a 'site.less'
// stylesheet by default, and to use jQuery 3.x

module.exports = {
  jQuery: 3,
  stylesheets: [
    {
      name: 'site'
    }
  ],
  scripts: [
    {
      name: 'site'
    }
  ],
  construct(self, options) {

    self.on('apostrophe-pages:beforeSend', 'setIsDev', req => {
      req.data.isDev = !(process.env.NODE_ENV === 'production');
    });

    self.apos.app.get('/assets/css', function (req, res, next) {
      return options.minify
        ? res.rawRedirect(
          self.assetUrl(`/apos-minified/anon-${self.getThemedGeneration()}.css`)
        )
        : res.status(400).send(
          'This API is only available when assets are properly minified.'
        )
    });

    self.apos.app.get('/assets/js', function (req, res, next) {
      return options.minify
        ? res.rawRedirect(
            self.assetUrl(`/apos-minified/anon-${self.getThemedGeneration()}.js`)
          )
        : res.status(400).send(
            'This API is only available when assets are properly minified.'
          )
    });
  }
};
