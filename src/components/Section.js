import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  padding: 2.5rem 0 6rem 0;
  margin: 0 auto;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#fff'};
`

const Section = ({ children, backgroundColor }) => <StyledContainer backgroundColor={backgroundColor}>{children}</StyledContainer>

export default Section
