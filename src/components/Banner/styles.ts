import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 600px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      background-color: transparent;
      font-weight: 100;
      font-size: 32px;
    }
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Titulo = styled.h2`
  font-size: 2rem;
  margin: 0;
  padding: 20px 0;
  max-width: 450px;
  color: ${cores.rosaClaro};
`
export const Preco = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
