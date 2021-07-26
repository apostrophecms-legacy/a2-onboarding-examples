module.exports = {
  extend: 'apostrophe-pieces',
  name: 'categorie',
  label: 'Categorie',
  addFields: [
    {
      name: 'title',
      label: 'Name',
      type: 'string',
      required: true
    }
  ]
};