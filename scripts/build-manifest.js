require("dotenv").config(); // 👈 Load .env

const fs = require("fs");
const path = require("path");

const domain = process.env.PUBLIC_BASE_URL;
if (!domain) {
  console.error("❌ Error: PUBLIC_BASE_URL is not defined.");
  process.exit(1);
}

const templatePath = path.resolve(__dirname, "../public/manifest.template.xml");
const outputPath = path.resolve(__dirname, "../public/manifest.xml");

if (!fs.existsSync(templatePath)) {
  console.error(`❌ Template not found: ${templatePath}`);
  process.exit(1);
}

try {
  const template = fs.readFileSync(templatePath, "utf-8");
  const output = template.replace(/%PUBLIC_BASE_URL%/g, domain);
  fs.writeFileSync(outputPath, output);
  console.log("✅ manifest.xml generated with domain:", domain);
} catch (err) {
  console.error("❌ Failed to generate manifest.xml:", err.message);
  process.exit(1);
}
