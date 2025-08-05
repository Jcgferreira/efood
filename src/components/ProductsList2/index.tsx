import Game from '../../models/game'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList2 = ({ background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            title={game.title}
            infos={game.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList2
