import Banner from '../../components/Banner'
import ProductsList2 from '../../components/ProductsList2'
import Game from '../../models/game'

const perfil: Game[] = [
  {
    id: 1,
    category: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: 'https://placehold.co/304x167',
    infos: 'Italiana',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 2,
    category: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: 'https://placehold.co/304x167',
    infos: 'Italiana',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 3,
    category: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: 'https://placehold.co/304x167',
    infos: 'Italiana',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 4,
    category: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: 'https://placehold.co/304x167',
    infos: 'Italiana',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 5,
    category: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: 'https://placehold.co/304x167',
    infos: 'Italiana',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 6,
    category: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: 'https://placehold.co/304x167',
    infos: 'Italiana',
    title: 'La Dolce Vita Trattoria'
  }
]

const Categories = () => (
  <>
    <Banner />
    <ProductsList2 games={perfil} title="Perfil" background="gray" />
  </>
)

export default Categories
