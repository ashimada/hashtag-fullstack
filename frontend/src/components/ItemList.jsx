import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  // console.log(title);
  // console.log(path);
  // console.log(idPath);

  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const finalItens = isHome ? items : Infinity;
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        {isHome ? (
          <Link className="iten-list__link" to={path}>
            Mostrar Tudo
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < finalItens)
          .map((currObj, index) => (
            <SingleItem
              {...currObj}
              key={`${title} + ${index}`}
              idPath={idPath}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
