
let cart = [];

function addToCart(id, name, price) {
  const item = { id, name, price };
  cart.push(item);
  alert(`${name} added to cart!`);
  localStorage.setItem('cart', JSON.stringify(cart));
}
