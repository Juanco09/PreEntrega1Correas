import { NavBar } from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";


function App () {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={< ItemDetailContainer />} />
        <Route path="*" element={ <Navigate to="/" />} />
      </Routes>
         
    </BrowserRouter>
  )
}

export default App;
