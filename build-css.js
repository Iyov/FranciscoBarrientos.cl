const fs = require('fs');
const path = require('path');
const tailwindcss = require('@tailwindcss/postcss');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

const inputPath = path.join(__dirname, 'src', 'input.css');
const outputPath = path.join(__dirname, 'css', 'tailwind.css');
const configPath = path.join(__dirname, 'tailwind.config.js');

async function build() {
  try {
    const css = fs.readFileSync(inputPath, 'utf8');
    
    const result = await postcss([
      tailwindcss(configPath),
      autoprefixer,
    ]).process(css, {
      from: inputPath,
      to: outputPath,
    });

    // Minify manually (simple approach)
    let minified = result.css
      .replace(/\s+/g, ' ')
      .replace(/\s*([{}:;,])\s*/g, '$1')
      .trim();

    fs.writeFileSync(outputPath, minified);
    console.log('✅ Tailwind CSS compilado exitosamente en:', outputPath);
    console.log('📦 Tamaño:', (minified.length / 1024).toFixed(2), 'KB');
  } catch (error) {
    console.error('❌ Error al compilar:', error);
    process.exit(1);
  }
}

build();
