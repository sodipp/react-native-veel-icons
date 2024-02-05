import fs from "fs-extra";
import path from "path";
import SVGFixer from "oslllo-svg-fixer";
import svg2font from "svgtofont";
import type { SvgToFontOptions } from "svgtofont";

const fontName = "VIcons";

const svgFolderPath = path.join(process.cwd(), "svgs");
const svgFixedFolderPath = path.join(process.cwd(), "svgs/fixed");
const fontFolderPath = path.join(process.cwd(), "src/font");
const unicodesMapPath = path.join(process.cwd(), "src/font/unicodesMap.json");
const fontInfoFilePath = path.join(process.cwd(), "src/font/info.json");

const unrequiredfontFiles = [
  `${fontName}.svg`,
  `${fontName}.symbol.svg`,
  `${fontName}.woff`,
  `${fontName}.woff2`,
  `${fontName}.eot`,
];

const glphMap = fs.readJSONSync(unicodesMapPath);

const options: SvgToFontOptions = {
  src: svgFixedFolderPath,
  dist: fontFolderPath,
  fontName: fontName,
  classNamePrefix: "",
  css: false,
  generateInfoData: true,
  outSVGPath: false,
  outSVGReactNative: false,
  svgicons2svgfont: {
    fontName: fontName,
    fontHeight: 2000,
    normalize: true,
  },
};

async function createFont() {
  try {
    await SVGFixer(svgFolderPath, svgFixedFolderPath, {
      showProgressBar: true,
      throwIfDestinationDoesNotExist: false,
    }).fix();

    await svg2font(options);

    unrequiredfontFiles.forEach((file) => {
      fs.unlink(path.join(fontFolderPath, file));
    });
    fs.rm(svgFixedFolderPath, { recursive: true, force: true }, () => {});

    const infoData = fs.readJSONSync(fontInfoFilePath);
    if (infoData) {
      Object.keys(infoData).forEach((key) => {
        const unicodeValue = parseInt(infoData[key].unicode.slice(2, -1), 10);
        glphMap[key] = unicodeValue;
      });

      fs.writeJSONSync(unicodesMapPath, glphMap);
    }
    console.log("Font creation successful!");
  } catch (error) {
    console.error("Error during font creation:", error);
  }
}

createFont();
