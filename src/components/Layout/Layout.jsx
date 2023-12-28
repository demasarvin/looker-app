import Footer from "../Footer"
import Navbar from "../NavBar"

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-primary">
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default Layout