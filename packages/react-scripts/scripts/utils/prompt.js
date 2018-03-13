const promisify = require('bluebird').promisify;
const readline = require('readline');

module.exports = promisify((query, callback) => {
  const rl = readline.createInterface(process.stdin, process.stdout);
  rl.question(query, result => {
    rl.close();
    callback(null, result);
  });
});
