const fs = require("fs");
const path = require("path");

const domain = process.env.PUBLIC_BASE_URL;
if (!domain) throw new Error("PUBLIC_BASE_URL is not defined");

const template = fs.readFileSync("public/manifest.template.xml", "utf-8");
const output = template.replace(/%PUBLIC_BASE_URL%/g, domain);

fs.writeFileSync("public/manifest.xml", output);
console.log("✅ manifest.xml generated with domain:", domain);
