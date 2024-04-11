import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Product from "./components/products/Product";
import ProductCreate from "./components/products/ProductCreate";
import ProductEdit from "./components/products/ProductEdit";
import ProductDetail from "./components/products/ProductDetail";

function App() {
    return (

        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Product/>}></Route>
                    <Route path={"/create-product"} element={<ProductCreate/>}></Route>
                    <Route path={"/edit-product/:id"} element={<ProductEdit/>}></Route>
                    <Route path={"/detail-product/:id"} element={<ProductDetail/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
