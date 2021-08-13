module.exports = {
  extend: 'apostrophe-pieces',
  name: 'article',
  label: 'Article',
  pluralLabel: 'Articles',
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
      widgetType: 'apostrophe-rich-text'
    }
  ]
};