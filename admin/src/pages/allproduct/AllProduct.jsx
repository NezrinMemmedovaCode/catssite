import { useState } from "react";
import { useEffect } from "react";
import {Helmet} from "react-helmet";
import "./AllProduct.scss"
import { useContext } from "react";
import { MainContext } from "../../context/MainProvider";

function AllProduct() {
    const {addProducts}=useContext(MainContext)
const [products, setproducts] = useState([])


    useEffect(() => {
        fetch("https://6634d11c9bb0df2359a2d717.mockapi.io/fashion")
        .then(res=>res.json())
        .then(data=>setproducts(data))
}, [])


  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Detail</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className="cards">
                {products.map((x)=><div className="card" key={x.id}>
                    <img src={x.img} alt="" />
                    <h3>{x.title}</h3>
                    <p>{x.description}</p>
                    <p>{x.price}</p>
                    
                    <button ><i className="fa-solid fa-pen-to-square"></i></button>
                    <button onClick={()=>addProducts(x)}>addproduct</button>
                </div>)}
            </div>
    </div>
  )
}

export default AllProduct
