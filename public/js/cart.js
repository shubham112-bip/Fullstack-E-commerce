document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const product = JSON.parse(btn.dataset.product);
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existing = cart.find(
        (item) => item.product_id === product.product_id && item.selectedSize === product.selectedSize && item.selectedColor === product.selectedColor
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Added to cart");
    });
  });
});
