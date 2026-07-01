// const fs = require("fs");

// 1

// fs.readFile("input.txt", "utf-8", (err, data) => {
//   if (err) {
//     return console.log(`Error while reading:\n ${err}`);
//   }
//   return console.log(`detail: ${data}`);
// });

// 2

// const outputText = "writed successfully by Node.js";
// fs.writeFile("output.txt", outputText, (err) => {
//   if (err) {
//     return console.log(`Error while writing:\n ${err}`);
//   }
//   return console.log("File writed successfully");
// });

// 3

// fs.readFile("input.txt", "utf-8", (err, data) => {
//   if (err) {
//     return console.log(`Error while reading:\n ${err}`);
//   }
//   const dataUpper = data.toUpperCase();
//   fs.writeFile("output-upper.txt", dataUpper, (err) => {
//     if (err) {
//       return console.log(`Error while writing:\n ${err}`);
//     }
//     console.log("Everything ending successfully");
//   });
// });

// 4

const fsPromises = require("fs").promises;

// fsPromises
//   .readFile("input.txt", "utf-8")
//   .then((data) => console.log(`reading with Promise:\n${data}`))
//   .catch(console.error);

// 5

fsPromises
  .readFile("input.txt", "utf-8")
  .then((data) => {
    return fsPromises.writeFile("output-upper", data.toUpperCase());
  })
  .then(() => console.log("Everything ending successfully"))
  .catch(console.error);
