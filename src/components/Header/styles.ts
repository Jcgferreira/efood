import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  font-weight: bold;
  padding: 16px;

  .container {
    justify-content: space-between;
    align-items: center;
  }
`

export const HeaderBar = styled.header`
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: inline-block;
  margin-bottom: 40px;
  width: 100%;
  justify-items: center;
  align-items: center;
  text-align: center;

  p {
    margin-top: 138px;
    color: ${cores.rosa};
    font-size: 36px;
    font-weight: 900;
    text-align: center;
    height: 84px;
    width: 539px;
  }
`
export const Links = styled.ul`
  list-style: none;
  display: flex;
  margin-left: 40px;

  li {
    margin-right: 16px;
  }
`
export const LinkCart = styled.a`
  display: flex;
  text-decoration: none;

  img {
    margin-left: 16px;
  }

  &:hover {
    text-decoration: underline;
  }
`
