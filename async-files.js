const fs = require("fs");

// 1

// fs.readFile("input.txt", "utf-8", (err, data) => {
//   if (err) {
//     return console.log(`Error while reading:\n ${err}`);
//   }
//   return console.log(`detail: ${data}`);
// });

// 2

const outputText = "writed successfully by Node.js";
fs.writeFile("output.txt", outputText, (err) => {
  if (err) {
    return console.log(`Error while reading:\n ${err}`);
  }
  return console.log("File writed successfully");
});
