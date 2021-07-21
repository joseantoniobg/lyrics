import {} from "react";

const mathAdjust = (adjust, value, exp) => {
  return Math[adjust](value * Math.pow(10, exp)) / Math.pow(10, exp);
};

export const round10 = (value: number, exp: number): number => {
  return mathAdjust("round", value, exp);
};

export const floor10 = (value, exp) => {
  return mathAdjust("floor", value, exp);
};

export const ceil10 = (value, exp) => {
  return mathAdjust("ceil", value, exp);
};

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export const getLyricsObject = (lyrics: string) => {
  let splitted = lyrics.split("\n");

  splitted = splitted.map((line) => line.trim());

  let incrementalDelays = 0;
  let delay = 0;

  const lyricsLine = [];

  splitted.forEach((line) => {
    let totalDur = line.split(" ").length * 0.3 + 0.5;
    if (totalDur < 2) totalDur = 2;
    let internalDelay = incrementalDelays + delay - 0.2;
    if (line.substring(0, 2) === "--") {
      incrementalDelays += +line.substring(2);
    } else {
      const animation = getRandomArbitrary(0, 10) <= 5 ? "goUp" : "fadeIn";
      lyricsLine.push(
        line.split(" ").map((word) => {
          totalDur -= 0.3;
          internalDelay += 0.2;
          return {
            word,
            duration: Math.round(totalDur * 10) / 10 + "s",
            delay: (Math.round(internalDelay * 10) / 10).toString() + "s",
            animation,
          };
        })
      );
      delay += 1.7;
    }
  });

  return lyricsLine;
};

export const colors = {
  blue: "#0000ff",
  brown: "#a52a2a",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkmagenta: "#8b008b",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkviolet: "#9400d3",
  fuchsia: "#ff00ff",
  gold: "#ffd700",
  green: "#008000",
  indigo: "#4b0082",
  magenta: "#ff00ff",
  maroon: "#800000",
  navy: "#000080",
  orange: "#ffa500",
  pink: "#ffc0cb",
  violet: "#800080",
};

export const randomColor = () => {
  const names = Object.getOwnPropertyNames(colors);
  const randomIndex = getRandomArbitrary(0, names.length - 1);
  return colors[names[randomIndex]];
};

export const getColorsArray = () => {
  return Object.values(colors);
};

export const getGradientColorsArray = () => {
  return Object.values(colors).map(
    (color) => `linear-gradient(${color}, #9198e5)`
  );
};
