import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import CartItems from "../CartItems/CartItems";
import cookie from "cookie";
import axios from "axios";

function Cart() {
  const cookies = cookie.parse(document.cookie);
  const [cartItems, setCartItems] = useState([]);
  const [itemDetails, setItemDetails] = useState([]);

  const fetchCart = () => {
    axios
      .get("http://localhost:3306/Cart", {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        // console.log(res.data)
        setCartItems(res.data);
      });
  };

  const fetchDetails = () => {
    let data = [];
    for (let item of cartItems) {
      axios
        .get(`http://localhost:3306/Products/${item.product_id}`)
        .then((response) => {
          console.log(response.data);
          data = [...data, response.data];
          setItemDetails(data);
        })
        .catch((error) => {
          console.error("error fetching product details", error);
          // setError("Failed to load product details");
        });
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    fetchDetails();
  }, [cartItems]);

  console.log(itemDetails);
  console.log(cartItems);

  const cartTotal = () => {
    let results = 0
    for (let item of itemDetails) {
      results += item.price
    }
    return results.toFixed(2)

  } 

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      {itemDetails.map((item) => (
        <div className="cart-item" key={item.product_id}>
          <div className="cart-details">
            <img src={item?.image_url} alt={item?.product_title} />
            <p>{item?.product_title}</p>
          </div>
          <p>${item?.price.toFixed(2)}</p>
        </div>
      ))}
      <h4>Total ${cartTotal()}</h4>
      {/* <p>Checkout (unavailable at this time)</p> */}
    </div>
  );
}

export default Cart;
