import { useState } from "react"
import { createContext } from "react"

export const MainContext=createContext()
function MainProvider({children}) {
    
    const [basket, setbasket] = useState([])
    function addProducts(item) {
        console.log(item)
        setbasket([...basket,item])
       
      }
      console.log(basket)
  return (
    <div>
        <MainContext.Provider value={{basket , addProducts,setbasket}}>
            {children}
        </MainContext.Provider>
      
    </div>
  )
}

export default MainProvider
