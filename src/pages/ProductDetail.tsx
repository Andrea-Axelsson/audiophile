import Categories from "../components/Categories"
import ProductArticle from "../components/ProductArticle"
import ProductFeatures from "../components/ProductFeatures"
import ProductImageGrid from "../components/ProductImageGrid"
import YouMayAlsoLike from "../components/YouMayAlsoLike"

import { useParams } from 'react-router-dom'
import {Product} from '../utils/interfaces'
import data from '../data.json'
import { useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { reset } from '../features/counter/counterSlice'
import { RootState } from "../app/store"

const ProductsData: Product[] = data as Product[]

const ProductDetail = () => {

  const counter = useSelector((state: RootState) => state.counter.value)

  const cartState = useSelector((state: RootState) => state.cart)

  console.log("Cart state" ,cartState)

  const dispatch = useDispatch()

 const location = useLocation ()

 console.log('COUNTER', counter)

 //useEffect to listen to changes in location path. If the path changes the counter will reset

useEffect(() => {
  
    dispatch(reset())
  
}, [location, dispatch])


  const productName = useParams<{productName?:string}>().productName || 'Default product'

  const filterData = ProductsData.filter(d => d.slug === productName)


  return (

    <div>
        <ProductArticle products={filterData}/>
        <ProductFeatures products={filterData}/>
        <ProductImageGrid products={filterData}/>
        <YouMayAlsoLike products={filterData}/>
        <Categories/>
    </div>
  )
}

export default ProductDetail
