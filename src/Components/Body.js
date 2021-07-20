import React from "react";

export default function Body(props) {
  const fridgeItems = props.drinks.map((drink) => (
    <li
      style={{
        display: "block",
        textDecoration: "none",
      }}
    >
      {drink}
    </li>
  ));

  return (
    <div>
      <h3>Drinks in the fridge</h3>
      <ul>{fridgeItems}</ul>
    </div>
  );
}
