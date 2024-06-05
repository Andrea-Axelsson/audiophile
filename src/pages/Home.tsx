import Hero from '../components/Hero'
import Categories from '../components/Categories'
import ProductHighlightSpeakerOrange from '../components/ProductHighlightSpeakerOrange'
import ProductHighlightSpeakerGray from '../components/ProductHighlightSpeakerGray'
import ProductHighlightEarphones from '../components/ProductHighlightEarphones'

const Home = () => {
  return (
    <>
      <Hero/>
      <Categories/>
      <ProductHighlightSpeakerOrange/>
      <ProductHighlightSpeakerGray/>
      <ProductHighlightEarphones/>
    </>
  )
}

export default Home