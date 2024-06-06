import Categories from "../components/Categories"
import ProductArticle from "../components/ProductArticle"
import ProductFeatures from "../components/ProductFeatures"
import ProductImageGrid from "../components/ProductImageGrid"
import YouMayAlsoLike from "../components/YouMayAlsoLike"

const ProductDetail = () => {
  return (
    <div>
        <ProductArticle/>
        <ProductFeatures/>
        <ProductImageGrid/>
        <YouMayAlsoLike/>
        <Categories/>
    </div>
  )
}

export default ProductDetail