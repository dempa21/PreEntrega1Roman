import React, { useState, useEffect} from 'react';

import FlexWrapper from "../flexWrapper/FlexWrapper";
import Item from "../Item/Item";

import "./ItemListContainer.css";


import imgcamiseta from "../../assets/img/camiseta.jpg";
import imgshort from "../../assets/img/short-futbol.jpg";
import botines from "../../assets/img/botines.jpg";

function ItemListContainer() {
  const greeting = "Bienvenidos a mi Ecommerce!";
  const [toggle, setToggle] = useState(false);
  const [otroToggle, setOtroToggle] = useState(false);

  console.log("Renderizando ItemListContainer..", "background-color: blue");

  useEffect(() => {
      console.log("Obteniendo items de la base de datos",
       "background-color: green");
       return () => console.log("Desmontando componente...")
  }, []);

  useEffect(() => {
    console.log("%cEffecto dependiente de Toggle",
     "background-color: orange");
}, [toggle]);

    const productoA = {
        title: "Camiseta",
        price: 1200,
        detail: "Camiseta oficial de la Argentina con tres estrellas",
        imgurl:{imgcamiseta}
    }
  return <>
  <div className="App-header">
  {greeting}
  </div>
   <FlexWrapper>
        <Item
          title={productoA.title}
          price={productoA.price}
          detail={productoA.detail}
          imgurl={imgcamiseta}
        />
        <Item
          title="Short"
          price={500}
          detail="Short oficial de Argentinos Juniors titular color negro"
          imgurl={imgshort}
        />
        <Item
          title="Botines"
          price={600}
          detail="Botines Nike Zoom Mercurial Superfly 9 Academy TF"
          imgurl={botines}
        />
      </FlexWrapper>
      </>;
}

export default ItemListContainer