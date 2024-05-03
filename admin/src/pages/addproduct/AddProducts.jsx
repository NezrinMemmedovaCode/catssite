import { useContext } from "react";
import {Helmet} from "react-helmet";
import { MainContext } from "../../context/MainProvider";

function AddProducts() {
  const {basket,setbasket}=useContext(MainContext);

  function removeproduct(item) {
    setbasket([...basket.filter((x)=>x.id !== item.id)])   
  }
  return (
    <div>
      <h1>AddProducts</h1>
      <div className="cards">
                {basket.map((x)=><div className="card" key={x.id}>
                    <img src={x.img} alt="" />
                    <h3>{x.title}</h3>
                    <p>{x.description}</p>
                    <p>{x.price}</p>
                    <button onClick={()=>removeproduct(x)}><i className="fa-solid fa-trash"></i></button>
                    <button ><i className="fa-solid fa-pen-to-square"></i></button>
                    
                </div>)}
            </div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>AddProducts</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            
    </div>
  )
}

export default AddProducts
