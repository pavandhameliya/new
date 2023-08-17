import React, { useState } from "react";
import './form.css'

const Form = () => {
  let [title, setTitle] = useState("");
  let [price, setPrice] = useState(0);
  let [img, setImg] = useState ("");

  let products = JSON.parse(localStorage.getItem("products")) || [];
  const handelsubmit = (e) => {
    e.preventDefault();

    let product = {
      title: title,
      price: price,
      img: img,
    };
    console.log(products);
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    window.location.reload();
  };

  return (
    <div>
      <form onSubmit={handelsubmit}>
        <input
          type="text"
          placeholder="Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Bhaav"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="url"
          placeholder="Image"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <input type="submit" value="Confirm" />
      </form>
    </div>
  );
};

export default Form;