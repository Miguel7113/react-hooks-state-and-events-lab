
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items";

function App() {

  const [DarkMode, setDarkMode] = useState(false);
  const appClass = DarkMode ? "App dark" : "App light";

  const handleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button style={{ background: "red" }} onClick={handleDarkMode}>
          {DarkMode ? "ON" : "OFF"} Dark Mode
        </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
