// Selección de color
const colors = document.querySelectorAll('.color');
let selectedColor = 'verde';
colors.forEach(c => {
  c.addEventListener('click', () => {
    colors.forEach(cc => cc.classList.remove('selected'));
    c.classList.add('selected');
    selectedColor = c.dataset.color;
    document.querySelector('.image-section img').src = `silla_${selectedColor}.jpg`;
  });
});

// Redimensionar imagen según altura/ancho
const img = document.querySelector('.image-section img');
document.getElementById('height').addEventListener('input', resizeImage);
document.getElementById('width').addEventListener('input', resizeImage);

function resizeImage() {
  const h = Math.max(30, document.getElementById('height').value);
  const w = Math.max(30, document.getElementById('width').value);
  img.style.width = `${w * 2.5}px`;
  img.style.height = `${h * 2.5}px`;
  img.classList.add('animate');
  setTimeout(() => img.classList.remove('animate'), 400);
}

// ✅ Agregar al carrito (guardar datos y redirigir)
document.getElementById('addToCartBtn').addEventListener('click', () => {
  const product = {
    color: selectedColor,
    height: document.getElementById('height').value,
    width: document.getElementById('width').value,
    quantity: document.getElementById('quantity').value,
    name: "Silla Plegable AdaptArte",
    price: 100
  };

  localStorage.setItem('adaptarteProduct', JSON.stringify(product));
  window.location.href = 'checkout.html';
});
