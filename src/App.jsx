
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from "react-router-dom";

import Home from './assets/views/Home'

import ShoppingCart from './assets/views/ShoppingCart'
import NotFound from './assets/views/NotFound';
import Pizza from './assets/views/Pizza';
import PizzasProvider from './assets/context/PizzasContext'
import NavBar from './assets/components/NavBar';

function App() {

  return (
    <>
      <PizzasProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pizza/:id" element={<Pizza />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="*" element={<NotFound />}
          />
        </Routes>
      </PizzasProvider>
    </>
  )
}

export default App
