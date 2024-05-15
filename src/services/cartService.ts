import Shoe from "../types/shoe";

const addShoeToCart = (newShoe: Shoe) => {
  const cartString = localStorage.getItem("cart");
  console.log(cartString);
  let cart = cartString ? JSON.parse(cartString) : [];
  console.log(cart);
  let addedShoe;
  if (cart.length > 0) {
    addedShoe = cart.find((shoe: Shoe) => shoe.id === newShoe.id);
  }

  if (addedShoe) {
    const newCartShoes = cart.filter((shoe: Shoe) => shoe.id !== newShoe.id);
    if (addedShoe.quantity + 1 > 6) {
      return;
    }
    newCartShoes.push({ id: addedShoe.id, quantity: addedShoe.quantity + 1 });
    localStorage.setItem("cart", JSON.stringify(newCartShoes));
    console.log(getTotalNumberOfCartItems());
  } else {
    cart.push({ id: newShoe.id, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(getTotalNumberOfCartItems());
  }
};

// TODO: Implement
const getTotalNumberOfCartItems = (): number => {
  const cartString = localStorage.getItem("cart");
  //[]
  console.log(cartString);
  if (cartString) {
    const cart = JSON.parse(cartString);
    if (cart.length === 0) return 0;

    let totalItems = 0;

    for (const item of cart) {
      totalItems += item.quantity;
    }
    return totalItems;
  } else {
    return 0;
  }
};

const resetCart = () => {
  localStorage.removeItem("cart");
};

const cartService = {
  addShoeToCart,
  getTotalNumberOfCartItems,
  resetCart,
};

export default cartService;
