const fs = require("fs");
module.exports = function(secondArg) {
  fs.readFile(`./${secondArg}`, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};
