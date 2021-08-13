// pm2-runtime is great at running node apps inside containers properly,
// but its arguments can be mistaken for a command line Apostrophe task
if (process.argv.find(arg => arg.match(/ProcessContainer/))) {
  process.argv = [ process.argv[0], 'app.js' ];
}

const apos = require('apostrophe')({
  shortName: 'a2-onboarding-examples',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {
    // Apostrophe module configuration

    // Add an alt field to images schema, by default the title is used but
    // we recommend enabling the alt field for clarity.
    'apostrophe-images': {
      enableAltField: true,
    },
    'apostrophe-attachments': {
      svgImages: true
    },
    articles: {},
    'articles-pages': {}
  }
});
