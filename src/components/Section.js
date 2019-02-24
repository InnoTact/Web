import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  margin: 2rem auto;
`

const Section = ({ children }) => <StyledContainer>{children}</StyledContainer>

export default Section
