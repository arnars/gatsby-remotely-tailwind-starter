var inquirerDirectory = require('inquirer-directory');

// Packages
var ReactComponentPackage = require('./plop-templates/react-components')
    .componentPackage;

module.exports = function(plop) {
    plop.addPrompt('directory', inquirerDirectory);
    plop.setGenerator('React Component Package', ReactComponentPackage);
};
