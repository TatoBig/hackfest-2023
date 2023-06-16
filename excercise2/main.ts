import fs from "fs";

fs.readFile("./data.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const lines = data.split("\n");
  const separator = /((\+)(-)+|(\+))/g
  const figures: string[] = []
  const borders: string[][] = []
  for (const line of lines) {
    if (separator.exec(line)) {
      if (line.match(separator)) {
        const border = line.match(separator)
        if (border && !borders.includes(border)) { 
          borders.push(border)
        }
      }
    }
  }
  console.log(borders)
  for (const line of lines) {
    let first = false
    let topLine
    if (separator.exec(line) && !first) {

      topLine = line
      console.log(topLine)
      first = true
    } else {
      console.log(topLine)
    }
    console.log(line)
  }
});
