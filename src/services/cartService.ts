import Shoe from "../types/shoe";

const addShoeToCart = (newShoe: Shoe) => {
  const cartString = localStorage.getItem("cart");
  let cart = cartString ? JSON.parse(cartString) : { cartShoes: [] };
  const addedShoe = cart.cartShoes.find((shoe: Shoe) => shoe.id === newShoe.id);
  if (addedShoe) {
    const newCartShoes = cart.cartShoes.filter(
      (shoe: Shoe) => shoe.id !== newShoe.id
    );
    if (addedShoe.quantity + 1 > 6) {
      return;
    }
    newCartShoes.push({ id: addedShoe.id, quantity: addedShoe.quantity + 1 });
    localStorage.setItem("cart", JSON.stringify({ cartShoes: newCartShoes }));
  } else {
    cart.cartShoes.push({ id: newShoe.id, quantity: 1 });
    console.log("Updated Cart:", cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

const cartService = {
  addShoeToCart,
};

export default cartService;
