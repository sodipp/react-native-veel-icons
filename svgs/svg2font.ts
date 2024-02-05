import { default as FS } from "fs-extra";
import { resolve } from "path";
import SVGFixer from "oslllo-svg-fixer";
import svg2font from "svgtofont";
import type { SvgToFontOptions } from "svgtofont";

const svgFolderPath = resolve(process.cwd(), "svg2");
const fontFolderPath = resolve(process.cwd(), "src/font");
const unicodesMapPath = resolve(process.cwd(), "src/font/unicodesMap.json");

const glphMap = FS.readJSONSync(unicodesMapPath);

const options: SvgToFontOptions = {
  src: svgFolderPath,
  dist: fontFolderPath,
  fontName: "VIcon1",
  classNamePrefix: "",
  css: false,
  generateInfoData: true,
  outSVGPath: false,
  outSVGReactNative: false,
  svgicons2svgfont: {
    fontName: "VIcon1",
    normalize: true,
    fontHeight: 2500,
  },
};

async function createFont() {
  try {
    await SVGFixer(svgFolderPath, svgFolderPath, {
      showProgressBar: true,
      throwIfDestinationDoesNotExist: false,
    }).fix();

    await svg2font(options);

    const infoData = require("../src/font/info.json");

    if (infoData) {
      Object.keys(infoData).forEach((key) => {
        const unicodeValue = parseInt(infoData[key].unicode.slice(2, -1), 10);
        glphMap[key] = unicodeValue;
      });

      FS.writeJSONSync(unicodesMapPath, glphMap);
    }

    FS.unlinkSync(resolve(fontFolderPath, "Vicons.svg"));
    FS.unlinkSync(resolve(fontFolderPath, "Vicons.symbol.svg"));
    FS.unlinkSync(resolve(fontFolderPath, "Vicons.woff"));
    FS.unlinkSync(resolve(fontFolderPath, "Vicons.woff2"));
    FS.unlinkSync(resolve(fontFolderPath, "Vicons.eot"));

    console.log("Font creation successful!");
  } catch (error) {
    console.error("Error during font creation:", error);
  }
}

createFont();
