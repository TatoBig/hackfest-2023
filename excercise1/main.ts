import fs from "fs";

const getTotalArea = (rectangles: number[][]) => {
  const areaBlocks: string[] = [];
  for (const rectangle of rectangles) {
    for (let y = rectangle[1]; y < rectangle[3]; y++) {
      for (let x = rectangle[0]; x < rectangle[2]; x++) {
        const areaBlock = `${x}, ${y}, ${x + 1}, ${y + 1}`;
        if (!areaBlocks.includes(areaBlock)) {
          areaBlocks.push(areaBlock);
        }
      }
    }
  }
  const totalArea = areaBlocks.length;
  return totalArea;
};

fs.readFile("./data.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const rectangles = data
    .split("\n")
    .map((rectString) => rectString.split(","))
    .map((arr) => arr.map((n) => parseInt(n)));
  const totalArea = getTotalArea(rectangles);
  console.log(`El área total de los cuadrados es de ${totalArea}`);
});
