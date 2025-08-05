import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerFooter = styled.section`
  background-color: ${cores.bege};
`

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
  padding-top: 40px;
`

export const ListLogos = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  padding-top: 32px;

  li {
    width: 24px;
    height: 24px;
  }

  a {
    text-decoration: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  #twitter {
    margin: 0 8px;
  }
`

export const TextFooter = styled.p`
  color: ${cores.rosa};
  font-size: 10px;
  width: 480px;
  text-align: center;
  display: block;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 40px;
`
