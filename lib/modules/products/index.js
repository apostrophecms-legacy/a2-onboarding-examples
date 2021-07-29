module.exports = {
  extend: 'apostrophe-pieces',
  name: 'product',
  addFields: [
    {
      name: 'color',
      type: 'color',
      label: 'Color'
    }
  ],
  construct(self, options) {
    self.on('apostrophe-pages:beforeSend', 'findAllProducts', async (req) => {
      req.data.products = await self.find(req).
        areas(false).
        joins(false).
        toArray();
    });
    const superGenerate = self.generate;
    self.generate = (i) => {
      const piece = superGenerate(i);
      piece.color = `#${level()}${level()}${level()}`;
      return piece;
      function level() {
        return Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
      }
    };
  }
}
