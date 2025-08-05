import Tag from '../Tag/index'
import { Card, Descricao, Info, InfoR, Titulo } from './styles'

type Props = {
  title: string
  category: string
  description: string
  infos: string
  image: string
}

const Product = ({ title, category, description, infos, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Info>{<Tag key={infos}>{infos}</Tag>}</Info>
    <Titulo>{title}</Titulo>
    <InfoR>
      <Descricao>{description}</Descricao>
      <a href="#">{category}</a>
    </InfoR>
  </Card>
)

export default Product
