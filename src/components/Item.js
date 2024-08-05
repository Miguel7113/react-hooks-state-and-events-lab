import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const handleCartToggle = () => {
    setInCart((prevInCart) => !prevInCart);
  };

  const itemClass = inCart ? "in-cart" : "";
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={itemClass}>
      <h3>{name}</h3>
      <p>{category}</p>
      <button onClick={handleCartToggle}>{buttonText}</button>
    </li>
  );
}

export default Item;
