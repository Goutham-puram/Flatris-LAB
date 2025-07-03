const path = require('path');
const alias = { shared: path.join(__dirname, '../shared') };
module.exports = {
  presets: [['next/babel'], '@babel/preset-flow'],
  plugins: [['module-resolver', { alias }]]
};
