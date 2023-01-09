import "./App.scss";
import "./navbar.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer2 from "./containers/itemDetailContainer/ItemDetailContainer2";


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
      <ItemDetailContainer2/>
      {/* <div>
      {productList.map((producto) => (
      <div className="card">
        <div>
      {producto.key}={producto.id}
      <h1>Titulo: {producto.title} </h1>
      <img src={producto.image} />
      </div>
      </div>
      ))}
      </div> */}
      {/* <ItemDetail */}
      {/* <div>
      {productList.map((producto) => (
      <div className="card">
        <div>
      <h1>Titulo: {producto.title} </h1>
      <img src={producto.image} />
      </div>
      </div>
      ))}
      </div> */}
    </>
  );
}

export function Detail() {
  return (
    <>
      {<NavBar />}
      {/* <Examples /> */}
      <ItemDetailContainer/>
    </>
      )
}

export default App;

