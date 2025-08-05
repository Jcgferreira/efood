import ProductsList from '../../components/ProductsList'
import Game from '../../models/game'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: 'https://placehold.co/472x217',
    infos: 'Italiana',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 2,
    category: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: 'https://placehold.co/472x217',
    infos: 'Italiana',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 3,
    category: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: 'https://placehold.co/472x217',
    infos: 'Italiana',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 4,
    category: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: 'https://placehold.co/472x217',
    infos: 'Italiana',
    title: 'La Dolce Vita Trattoria'
  }
]

const Home = () => (
  <>
    <ProductsList games={promocoes} title="Ação" background="gray" />
  </>
)

export default Home
