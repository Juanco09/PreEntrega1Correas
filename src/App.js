import React from "react";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/NavBar/ItemListContainer.js";

const App = () => {
  const itemListContainer = "Nuestros Vinos";
  return (
    <>
    <NavBar />
    <ItemListContainer greeting = {itemListContainer} />
    </>
  )
}

export default App;
