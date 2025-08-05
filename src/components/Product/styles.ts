import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  border: 1px solid ${cores.rosa};
  position: relative;
  margin-bottom: 40px;
  height: 398px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 8px;
  padding-left: 7px;
  padding-top: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
`

export const Info = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const InfoR = styled.div`
  justify-content: space-between;
  padding: 8px;
  p {
    margin-bottom: 16px;
  }
  a {
    margin-top: 16px;
    border: 2px solid ${cores.rosa};
    color: ${cores.rosaClaro};
    background-color: ${cores.rosa};
    font-size: 14px;
    font-weight: bold;
    padding: 4px 6px;
    text-decoration: none;
    border-radius: 2px;
    margin-right: 8px;
  }
`
