import React from "react";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/NavBar/ItemListContainer.js";

const App = () => {
  const itemListContainer = "Bodega & Viñedos Luis Segundo Correas";
  return (
    <>
    <NavBar />
    <ItemListContainer greeting = {itemListContainer} />
    </>
  )
}

export default App;
