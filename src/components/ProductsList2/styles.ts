import styled from 'styled-components'

import { Props } from '.'
import { Card, Info, InfoR } from '../Product/styles'
import { cores } from '../../styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;

  ${Info} {
    display: none;
  }

  ${Card} {
    margin-bottom: 32px;
    background-color: ${cores.rosa};
    color: ${cores.rosaClaro};

    ${InfoR} {
      width: 100%;
      font-size: 16px;
      a {
        background-color: ${cores.rosaClaro};
        color: ${cores.rosa};
        display: block;
        text-align: center;
      }
    }
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  margin-top: 56px;

  img {
    padding: 8px;
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
`
