const fs = require('fs');

module.exports = (args) => {

  const {
    component,
    path,
  } = args;

  const componentDirectoryPath = `${path}/${component}`;

  if (!component) {
    console.error('You must specify a component name.');
    process.exit(1);
  }

  if (!path) {
    console.error('You must specify a path for the component.');
    process.exit(1);
  }

  if (directoryExist(componentDirectoryPath)) {
    console.error(`${componentDirectoryPath} already exist`);
    process.exit(1);
  } else {
    console.log('OKAY WE CAN CREATE IT');
  }
};

function directoryExist(directory) {
  try {
    fs.accessSync(directory);
  } catch(e) {
    return false;
  }
  return true
}
