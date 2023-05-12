import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "../views/Inicio"
import Peliculas from "../views/Peliculas"
import Seies from "../views/Seies"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Simple from "../views/Simple"


const AppRouter = () => {
  return (
    <BrowserRouter>
            <Navbar />
        <div style={{marginTop: '80px'}}>
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/peliculas" element={<Peliculas />} />
            <Route path="/series" element={<Seies />} />
            <Route path="/series/:view" element={<Simple />} />
            <Route path="/peliculas/:view" element={<Simple />} />
        </Routes>
        </div>
        <Footer />
    </BrowserRouter>
  )
}

export default AppRouter
