import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from './index'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
  font-size: ${(props) => (props.size === 'large' ? '16px' : '10px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'small' ? '8px 16px' : '4px 6px')};
  border-radius: 2px;
  display: inline-block;
`
