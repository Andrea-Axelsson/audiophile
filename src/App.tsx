import './App.css'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import ProductDetail from './pages/ProductDetail'
import Checkout from './pages/Checkout'
import ScrollToTop from './utils/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      {/* Ensure the page scrolls to the top on route change */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Define routes for the application */}
          <Route index element={<Home />} />
          <Route path="category/:categoryName" element={<Category />} />
          <Route path="product/:productName" element={<ProductDetail />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App