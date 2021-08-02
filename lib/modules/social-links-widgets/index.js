module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Social Links Widget',
  addFields: [
    {
      name: 'socialLinks',
      label: 'Social Links',
      type: 'array',
      schema: [
        {
          name: 'link',
          label: 'Link',
          type: 'string',
          required: true
        },
        {
          name: 'icon',
          label: 'Icon',
          type: 'singleton',
          widgetType: 'apostrophe-images',
          required: true
        }
      ]
    }
  ]
};