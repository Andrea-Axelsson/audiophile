import Categories from "../components/Categories"
import ProductArticle from "../components/ProductArticle"
import ProductFeatures from "../components/ProductFeatures"
import ProductImageGrid from "../components/ProductImageGrid"
import YouMayAlsoLike from "../components/YouMayAlsoLike"

import { useParams } from 'react-router-dom'
import {Product} from '../utils/interfaces'
import data from '../data.json'

const ProductsData: Product[] = data as Product[]

const ProductDetail = () => {

  const productName = useParams<{productName?:string}>().productName || 'Default product'

  const filterData = ProductsData.filter(d => d.slug === productName)
  console.log("FILTER DATA", filterData) 
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