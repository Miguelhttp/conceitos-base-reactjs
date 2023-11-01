import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from '../components/Header'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Footer from "../layout/Footer"

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default AppRoutes