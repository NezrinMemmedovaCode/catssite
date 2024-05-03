import { Link } from "react-router-dom"
import "./Nav.scss"
import { useContext } from "react"
import { MainContext } from "../context/MainProvider"

function Nav() {
  const {basket}=useContext(MainContext)
  return (
    <div className="nav">
        <h3>NATHSITE</h3>
        <div className="links">

        <Link className="link" to={"/"}>Home</Link>
        <Link className="link" to={"/AllProduct"}>AllProduct</Link>
        <Link className="link" to={"/AddProducts"}>AddProducts {basket.length}</Link>
        <Link className="link" to={"/Detail"}>Detail</Link>
        <Link className="link" to={"/Admin"}>Admin</Link>
        <Link className="link" to={"/UpDateProduct"}>UpDateProduct</Link>
      
        </div>
    </div>
  )
}

export default Nav
