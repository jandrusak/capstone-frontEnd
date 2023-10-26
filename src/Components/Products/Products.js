import React, { useEffect } from "react";
import Users from "../Users";
import { useSelector, useDispatch } from "react-redux";
// import { CardContent, CardActions, Divider } from "@mui/material";
// import Link from "react-router-dom";
import "./Products.css";
import { addToCart } from "../../Redux/actions";
import axios from "axios";
import cookie from 'cookie'


const Products = (props) => {
  const cookies = cookie.parse(document.cookie);
  const dispatch = useDispatch();
    const handleAddToCart = (product_id) => {
      console.log('Product', typeof product_id)
      axios.post("http://localhost:3306/addCart" ,  {
        "productId": product_id
      },{
        headers: {
          Authorization: `Bearer ${cookies.token}`
        }
      }).then((res) => {

        console.log(res)
        // dispatch(addToCart(product_id));

      })
   } 




    
    useEffect(()=>{
        props.fetchProducts()
    }, [])
  return (
      <div className="card-container">
        {
            props.products.map((product)=>(
                //create card here maybe using MUI
                <div key={product.product_id} >
                    <h5>{product.product_title}</h5>
                    <img src={product.image_url} alt={product.product_title} className="product-image"/>
                    <button onClick={()=> handleAddToCart(product.product_id)}>Add to Cart</button>
                </div>
            ))
        }          
      </div>
  )

  
}

export default Products