// optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Pasta onde as imagens estão
const imageFolder = path.resolve(__dirname, './src/assets/images');
const outputFolder = path.resolve(__dirname, './dist/optimized-images');

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

fs.readdir(imageFolder, (err, files) => {
  if (err) {
    console.error('Erro ao ler pasta de imagens:', err);
    return;
  }

  files.forEach(file => {
    const inputFilePath = path.join(imageFolder, file);
    const outputFilePath = path.join(outputFolder, `${path.parse(file).name}.webp`);

    sharp(inputFilePath)
      .resize(800) // Redimensiona a imagem para 800px de largura
      .toFormat('webp')
      .toFile(outputFilePath, (err, info) => {
        if (err) {
          console.error('Erro ao otimizar imagem:', err);
        } else {
          console.log(`Imagem otimizada: ${outputFilePath}`, info);
        }
      });
  });
});
