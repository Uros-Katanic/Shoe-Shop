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
    console.log(getTotalNumberOfCartItems());
  } else {
    cart.cartShoes.push({ id: newShoe.id, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(getTotalNumberOfCartItems());
  }
};

// TODO: Implement
const getTotalNumberOfCartItems = (): number => {
  const cartString = localStorage.getItem("cart");

  if (cartString) {
    const cart = JSON.parse(cartString);

    let totalItems = 0;
    for (const item of cart.cartShoes) {
      totalItems += item.quantity;
    }

    return totalItems;
  } else {
    return 0;
  }
};

const cartService = {
  addShoeToCart,
  getTotalNumberOfCartItems,
};

export default cartService;
