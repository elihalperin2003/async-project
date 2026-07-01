const fs = require("fs");

// 1

fs.readFile("inpxhfdhut.txt", "utf-8", (err, data) => {
  if (err) {
    return console.log(`Error in reading:\n ${err}`);
  }
  return console.log(`detail: ${data}`);
});
