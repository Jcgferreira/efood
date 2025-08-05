import { Link } from 'react-router-dom'

import { HeaderBar } from './styles'
import bannerImg2 from '../../assets/images/fundo.png'

import logo from '../../assets/images/logo1.png'
import { Imagem } from './styles'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg2})` }}>
    <HeaderBar>
      <Link to="/perfil">
        <img src={logo} alt="Logo" />
      </Link>
      <p>Viva experiências gastronômicas no conforto da sua casa</p>
    </HeaderBar>
  </Imagem>
)

export default Header
