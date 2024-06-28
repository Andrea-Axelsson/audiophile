import React from 'react'
import Categories from "../components/Categories"
import CategoryProductDisplay from "../components/CategoryProductDisplay"
import { useParams } from 'react-router-dom'
import { Product } from '../utils/interfaces'
import data from '../data.json'

/* Cast the imported data to an array of Product objects */
const ProductsData: Product[] = data as Product[];

const Category: React.FC = () => {

  /* Get the category name from the URL parameters */
  const categoryName = useParams<{ categoryName?: string }>().categoryName || 'Default category'

  /* Filter the products based on the category name */
  const filterData = ProductsData.filter(d => d.category === categoryName)

  return (
    <>
      <header className="w-full h-20 md:h-32 bg-secondary-100 flex justify-center items-center">
        <h1 className="text-white text-28 md:text-40 text-bold">
          {categoryName ? categoryName.toUpperCase() : 'Default category'}
        </h1>
      </header>
      {/* Display the filtered products */}
      <CategoryProductDisplay products={filterData} />
      {/* Display the categories */}
      <Categories isInsideHamburgerDropdown={false} />
    </>
  )
}

export default Category