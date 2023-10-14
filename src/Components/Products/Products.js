import React, { useEffect } from "react";
import Users from "../Users";
import { useSelector } from "react-redux";
import { CardContent, CardActions, Divider } from "@mui/material";
import Link from "react-router-dom";

const Home = (props) => {
    console.log(props.products)
    useEffect(()=>{
        props.fetchProducts()
    }, [])
  return (
      <div className="card-container">
        {
            props.products.map((product)=>(
                //create card here maybe using MUI
                <div key={product.product_id} >
                    <p>{product.product_title}</p>
                    <img src={product.image_url} alt={product.description}/>
                    <button>AddtoCart</button>
                </div>
            ))
        }
          {/* Change cars to props.cars and remove the cars.json import above */}
          {/* {props.cars.map((car, idx) => (
              <Card key={idx} className="card">
                  <CardContent className="text-gray">
                      <span>{car.name.toUpperCase()}</span>
                      <ul>
                      <li>Test: {car["mpg"]}</li>
                      </ul>
                  </CardContent>
                  <Divider />
                  <CardActions>
                      <Link>See More Details</Link>
                  </CardActions>
              </Card>
          ))} */}
      </div>
  )
}

export default Home