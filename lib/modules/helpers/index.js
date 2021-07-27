module.exports = {
  alias: 'helpers',
  construct: function(self, options) {
    self.addHelpers({
      richTextConfig: {
        toolbar: [ 'Styles', 'Bold', 'Italic', 'Link', 'Unlink' ]
      }
    });
  }
};