import React, { useState, useEffect } from "react";
import ItemDetailContainer from "../../containers/itemDetailContainer/ItemDetailContainer";
import FlexWrapper from "../flexWrapper/FlexWrapper";
import Item from "../Item/Item";
import "./ItemListContainer.css";
// import { getSingleItem } from "../../services/mockAsyncService";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

  async function getProducts() {
    let respuesta = await fetch(`https://fakestoreapi.com/products/category/men's clothing`);
    let products = await respuesta.json();
    console.log(products);
    setProductList(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  // useEffect(() => {
  //   getSingleItem().then((respuesta) => {
  //     setProduct(respuesta);
  //   });
  // }, []);

  return (
    <>  
      {/* <ItemDetail */}
      <FlexWrapper>
      <div className="App-header">
      {productList.map((producto) => (
      <Item
      // <div className="card">
      //   <div>
      // <h1>Titulo: {producto.title} </h1>
      // <img src={producto.image} />
      // <a href={producto.url}>Ver detalles</a>
      // </div>
      // </div>
      key = {producto.id}
      title = {producto.title}
      price = {producto.price}
      detail = {producto.detail}
      imgurl = {producto.image}
        />
      ))}
      </div>
      </FlexWrapper>
    </>
  );
 }

export default ItemListContainer;