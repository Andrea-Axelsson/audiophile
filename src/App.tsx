import './App.css'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import ProductDetail from './pages/ProductDetail'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="category/:categoryName" element={<Category/>}/>
        <Route path="product" element={<ProductDetail/>}/>
      </Route>
    </Routes>
    </BrowserRouter>

      

  )
}

export default App
