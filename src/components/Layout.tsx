import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Navbar/>
        <main>
            <Outlet/>
        </main>
    <About/>
    <Footer/>
    </>
  )
}

export default Layout