const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let originalImage = null;

document.getElementById('upload').addEventListener('change', (e) => {
  const reader = new FileReader();
  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      originalImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
});

function applyBlur() {
  ctx.filter = 'blur(5px)';
  ctx.drawImage(canvas, 0, 0);
  ctx.filter = 'none';
}

function applyGrayscale() {
  ctx.filter = 'grayscale(100%)';
  ctx.drawImage(canvas, 0, 0);
  ctx.filter = 'none';
}

function applyBrightness() {
  ctx.filter = 'brightness(150%)';
  ctx.drawImage(canvas, 0, 0);
  ctx.filter = 'none';
}

function applyContrast() {
  ctx.filter = 'contrast(150%)';
  ctx.drawImage(canvas, 0, 0);
  ctx.filter = 'none';
}

function applySepia() {
  ctx.filter = 'sepia(100%)';
  ctx.drawImage(canvas, 0, 0);
  ctx.filter = 'none';
}

function applyInvert() {
  ctx.filter = 'invert(100%)';
  ctx.drawImage(canvas, 0, 0);
  ctx.filter = 'none';
}

function resetImage() {
  if (originalImage) {
    ctx.putImageData(originalImage, 0, 0);
  }
}
