const fs = require("fs");
const path = require("path");
const builder = require("xmlbuilder");
const _ = require("lodash");

let white = "#f7fff7";
let black = "#000000";
let whiteBlue = "#add9f4";
let darkBlue = "#476c9b";
let red = "#984447";
let green = "#94ae89";
let purple = "#6e2594";
let aerosmithPink = "#f7567c";
let yellow = "#fff275";
let brown = "#5b3000";

const svg = builder.create("svg");
svg.att("width", 103);
svg.att("height", 103);
svg.att("viewBox", "0 0 103 103");
svg.att("xmlns", "http://www.w3.org/2000/svg");

const circle = svg.ele("circle", {
  cx: 51.5,
  cy: 51.5,
  r: 50,
  stroke: black,
  "stroke-width": 3,
  fill: "none"
});

const radius = 43;
const nums = _.range(12).map(i =>
  svg.ele(
    "text",
    {
      x: -Math.cos(i * Math.PI / 6 + Math.PI / 2) * radius + 51.5,
      y: -Math.sin(i * Math.PI / 6 + Math.PI / 2) * radius + 55,
      "font-size": 7,
      "text-anchor": "middle"
    },
    i === 0 ? 12 : i
  )
);

fs.writeFileSync("clock.svg", svg.end({ pretty: true }));

/*

<svg xmlns="http://www.w3.org/2000/svg"
     width="150" height="100" viewBox="0 0 3 2">

  <rect width="1" height="2" x="0" fill="#008d46" />
  <rect width="1" height="2" x="1" fill="#ffffff" />
  <rect width="1" height="2" x="2" fill="#d2232c" />
</svg>

*/
