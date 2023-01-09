import "./App.scss";
import "./navbar.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/itemDetailContainer/ItemDetailContainer";


// Componente APP
function App() {
  const [productList, setProductList] = useState([]);

  async function getProducts() {
    let respuesta = await fetch(`https://fakestoreapi.com/products/category/men's clothing`);
    let products = await respuesta.json();
    console.log(products);
    setProductList(products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {<NavBar />}
      {/* <Examples /> */}
      <ItemDetailContainer/>
    </>
  );
}

export default App;

