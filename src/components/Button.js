import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 10px 14px;
  font-size: 1.2rem;
  border-radius: 0;
  border-color: ${props => (props.primary ? 'red' : 'white')};
  font-weight: 500;
`

export default ({ children }) => <Button>{children}</Button>
