module.exports = {
  extend: 'apostrophe-pieces',
  name: 'category',
  label: 'Category',
  pluralLabel: 'Categories',
  addFields: [
    {
      name: 'title',
      label: 'Name',
      type: 'string',
      required: true
    }
  ]
};