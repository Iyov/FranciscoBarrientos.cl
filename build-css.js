const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const inputPath = path.join(__dirname, 'src', 'input.css');
const outputPath = path.join(__dirname, 'css', 'tailwind.css');
const configPath = path.join(__dirname, 'tailwind.config.js');

async function build() {
  try {
    console.log('🔨 Compilando Tailwind CSS...');
    
    const css = fs.readFileSync(inputPath, 'utf8');
    
    const result = await postcss([
      tailwindcss(configPath),
      autoprefixer,
    ]).process(css, {
      from: inputPath,
      to: outputPath,
    });

    // Minify manually (simple approach)
    let output = result.css;
    
    // Minificación básica
    output = output
      .replace(/\/\*[\s\S]*?\*\//g, '') // Eliminar comentarios
      .replace(/\s+/g, ' ') // Múltiples espacios a uno
      .replace(/\s*([{}:;,])\s*/g, '$1') // Espacios alrededor de caracteres especiales
      .trim();

    fs.writeFileSync(outputPath, output);
    
    const sizeKB = (output.length / 1024).toFixed(2);
    console.log('✅ Tailwind CSS compilado exitosamente');
    console.log('📦 Tamaño:', sizeKB, 'KB');
    console.log('📁 Ubicación:', outputPath);
  } catch (error) {
    console.error('❌ Error al compilar:', error);
    process.exit(1);
  }
}

build();
