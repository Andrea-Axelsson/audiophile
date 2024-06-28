import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      {/* Navbar component */}
      <Navbar />
      
      {/* Main content area where routed components will be rendered */}
      <main>
        <Outlet />
      </main>

      {/* About section */}
      <About />

      {/* Footer component */}
      <Footer />
    </>
  )
}

export default Layout