import "./item.css";

import { ButtonChild } from "../button/Button";
import ToggleButton from "../toggleButton/ToggleButton";
import ClickTracker from "../clickTracker/clickTracker";
import ItemDetailContainer from "../../containers/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";


function Item({ title, price, detail, imgurl }) {
  return (
    <>
    <div className="item-card">
      <ToggleButton icon="♥" />
      <div className="item-card_header">
        <h2>{title}</h2>
      </div>
      <div className="item-card_img">
        <img src={imgurl} alt="imagen"></img>
      </div>
      <div className="item-card_detail">
        <h4>$ {price}</h4>
        <p>{detail}</p>
        <a href="../../containers/itemDetailContainer/ItemDetail.js">
        <ButtonChild>Ver detalle</ButtonChild>
        </a>
        <ClickTracker />
      </div>
    </div>
    </>
  );
}

export default Item;
