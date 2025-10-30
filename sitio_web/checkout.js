// Recuperar producto guardado
const productData = JSON.parse(localStorage.getItem('adaptarteProduct'));

if (productData) {
  document.getElementById('productImage').src = `silla_${productData.color}.jpg`;
  document.getElementById('productColor').textContent = productData.color.charAt(0).toUpperCase() + productData.color.slice(1);
  document.getElementById('productDimensions').textContent = `${productData.height} cm alto × ${productData.width} cm ancho`;
  document.getElementById('productQuantity').textContent = `${productData.quantity} ${productData.quantity == 1 ? 'unidad' : 'unidades'}`;

  const total = productData.price * productData.quantity;
  document.getElementById('productTotal').textContent = `$${total.toLocaleString('es-CO')} USD`;
}

// Procesar pago
document.getElementById('paymentForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = document.querySelector('.btn.pay');
  btn.disabled = true;
  btn.textContent = 'Procesando...';

  setTimeout(() => {
    alert('✅ Pago procesado con éxito. ¡Gracias por confiar en AdaptArte!');
    localStorage.removeItem('adaptarteProduct');
    window.location.href = 'index.html';
  }, 2500);
});
