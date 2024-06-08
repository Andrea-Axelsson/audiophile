import Categories from "../components/Categories"
import CategoryProductDisplay from "../components/CategoryProductDisplay"
import { useParams } from 'react-router-dom'
import data from '../data.json'

const Category: React.FC = () => {


  const categoryName = useParams<{categoryName?:string}>().categoryName || 'Default category'

  const productData = data

  const filterData = productData.filter(data => data.category === categoryName)

  return (
    <>
    <header className="w-full h-20 md:h-32 bg-secondary-100 flex justify-center items-center">
        <h1 className="text-white text-28 md:text-40 text-bold">
        {categoryName ? categoryName.toUpperCase() : 'Default category'}
        </h1>
      </header>
    <CategoryProductDisplay/>
    <Categories/>
    </>
  )
}

export default Category