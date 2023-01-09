import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/mockAsyncService";
import { Button2 } from "../../components/button/Button";

const ItemDetailContainer2 = () => {
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
      <p>Precio: {product.price}</p>
      <p>{product.detail}</p>
      <Button2>Volver</Button2>
    </>
  );
}

export default ItemDetailContainer2;