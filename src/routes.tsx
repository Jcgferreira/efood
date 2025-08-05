import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/new" element={<Home />} />
    <Route path="/perfil" element={<Categories />} />
  </Routes>
)

export default Rotas
