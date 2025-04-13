
document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');

  let total = 0;
  cart.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${item.name}</strong> - €${item.price}/day`;
    cartItems.appendChild(div);
    total += item.price;
  });

  totalPrice.innerHTML = `<h4>Total: €${total}/day</h4>`;

  const form = document.getElementById('reservation-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Reservation submitted! Scroll down to confirm payment.');
    localStorage.removeItem('cart');
    form.reset();
    cartItems.innerHTML = '';
    totalPrice.innerHTML = '';
    document.getElementById('payment-link').style.display = 'block';
  });
});
