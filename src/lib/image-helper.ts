import sharp from "sharp";
import fs from "fs";
import path from "path";

async function makeWebpDataUrl(filePath: string, size = 8) {
  // `size` is the width in pixels for the tiny placeholder (8–24 is common)
  const buffer = await sharp(filePath)
    .resize(size) // tiny thumbnail
    .toFormat("webp", { quality: 60 })
    .toBuffer();

  const base64 = buffer.toString("base64");
  return `data:image/webp;base64,${base64}`;
}

const currentDir = import.meta.dirname;
async function main() {
  console.log(__dirname);
  const filePath = path.join(__dirname, "../../../../public/assets/hero.webp");
  console.log(filePath);
  const blurDataURL = await makeWebpDataUrl(filePath, 12);
  console.log(blurDataURL);
}

main();
