import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/mockAsyncService";
import { Button2 } from "../../components/button/Button";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getSingleItem().then((respuesta) => {
      setProduct(respuesta);
    });
  }, []);

  return (
    <>
      {/* <ItemDetail */}
      <h1>Titulo: {product.title} </h1>
      <img alt="imagen_producto" src={product.imgurl} />
      <p>{product.detail}</p>
      <p>Precio: ${product.price}</p>
      <a href="../../containers/itemDetailContainer/ItemDetail.js">
      <Button2>Ver más</Button2>
      </a>
    </>
  );
}

export default ItemDetailContainer;