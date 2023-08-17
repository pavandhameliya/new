import React from 'react'

const List = () => {

    let products = JSON.parse(localStorage.getItem("products")) || []
    console.log(products);
  return (
    <div>
      {products.map((product, index) => {
        return(
            <div>
                <img src={product.img} alt=""/>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
            </div>
        );
      })}
    </div>
  );
};

export default List