import Categories from "../components/Categories"
import ProductArticle from "../components/ProductArticle"
import ProductFeatures from "../components/ProductFeatures"
import ProductImageGrid from "../components/ProductImageGrid"
import YouMayAlsoLike from "../components/YouMayAlsoLike"

import { useParams } from 'react-router-dom'
import { Product } from '../utils/interfaces'
import data from '../data.json'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { reset } from '../features/counter/counterSlice'
import { RootState } from "../app/store"

/* Cast the imported data to an array of Product objects */
const ProductsData: Product[] = data as Product[]

const ProductDetail = () => {

  /* Get the current counter value from Redux store */
  const counter = useSelector((state: RootState) => state.counter.value)

  /* Get the cart state from Redux store */
  const cartState = useSelector((state: RootState) => state.cart)

  console.log("Cart state", cartState)

  /* Hook to get the dispatch function from Redux store */
  const dispatch = useDispatch()

  /* Hook to get the current location */
  const location = useLocation()

  console.log('COUNTER', counter)

  /* Reset the counter value whenever the location changes */
  useEffect(() => {
    dispatch(reset())
  }, [location, dispatch])

  /* Get the product name from the URL parameters */
  const productName = useParams<{ productName?: string }>().productName || 'Default product'

  /* Filter the products based on the product name */
  const filterData = ProductsData.filter(d => d.slug === productName)

  return (
    <div>
      {/* Display the product details */}
      <ProductArticle products={filterData} />
      <ProductFeatures products={filterData} />
      <ProductImageGrid products={filterData} />
      <YouMayAlsoLike products={filterData} />
      <Categories isInsideHamburgerDropdown={false} />
    </div>
  )
}

export default ProductDetail