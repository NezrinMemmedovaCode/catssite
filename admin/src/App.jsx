
import './App.css'
import Home from './pages/home/Home'
import { BrowserRouter,Routes,  Route } from "react-router-dom";
import Mainlayout from './layout/Mainlayout';
import Detail from './pages/detail/Detail';
import Admin from './pages/admin/Admin';
import AddProducts from './pages/addproduct/AddProducts';
import UpDateProduct from './pages/updateproduct/UpDateProduct';
import AllProduct from './pages/allproduct/AllProduct';
import MainProvider from './context/MainProvider';
function App() {
 

  return (
    <>
<MainProvider>
<BrowserRouter>

<Routes>
    
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="Detail" element={<Detail />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="AddProducts" element={<AddProducts />} />
          <Route path="UpDateProduct" element={<UpDateProduct />} />
          <Route path="AllProduct" element={<AllProduct />} />
        
        </Route>
      
      </Routes>
    </BrowserRouter> 
  
</MainProvider>

   </>
  )
}

export default App
