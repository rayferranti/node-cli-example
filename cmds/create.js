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

    const componentContent =
    `import React from 'react';

const ${component} = props => (
  <div>Hello World</div>
);

export default ${component};`;

    const componentIndexContent =
    `import ${component} from './${component}';

export default ${component};`;


    // Place within a try catch
    fs.mkdirSync(componentDirectoryPath, 0777);
    fs.writeFileSync(`${componentDirectoryPath}/${component}.js`, componentContent);
    fs.writeFileSync(`${componentDirectoryPath}/index.js`, componentIndexContent);
    fs.writeFileSync(`${componentDirectoryPath}/style.scss`);
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
