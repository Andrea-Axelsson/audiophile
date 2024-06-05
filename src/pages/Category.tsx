import Categories from "../components/Categories"
import CategoryProductDisplay from "../components/CategoryProductDisplay"

const Category = () => {
  return (
    <>
    <header className="w-full h-20 md:h-32 bg-secondary-100 flex justify-center items-center">
        <h1 className="text-white text-28 md:text-40 text-bold">
        HEADPHONES
        </h1>
      </header>
    <CategoryProductDisplay/>
    <Categories/>
    </>
  )
}

export default Category