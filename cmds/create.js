const fs = require('fs');

module.exports = (args) => {
  const {
    component,
    path,
  } = args;

  if (!component) {
    console.error('You must specify a component name.');
    process.exit(1);
  }

  if (!path) {
    console.error('You must specify a path for the component.');
    console.log(process.cwd());
    process.exit(1);
  }

  if (fs.statSync(path).isDirectory()) {
    console.error(`A folder with the name ${component} at the location ${path} already exist.`);
    console.log(process.cwd());
    process.exit(1);
  }
  console.log('CREATE THIS FOLDER');
  console.log(component);
  console.log('AT THIS LOCATION');
  console.log(path);
}
