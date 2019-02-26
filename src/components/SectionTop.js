import React, { Fragment } from 'react'
import styled from 'styled-components'
import Header from './Header'
import SubHeader from './SubHeader'
import Button from './Button'
import colors from './../styles/colors'

const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const SectionTop = ({ header, text, buttonText = '', light = false, dark = false }) => (
  <Container>
    <React.Fragment>
      <Header text={header} styles={{ color: dark ? colors.dark : colors.white }} />
      <SubHeader style={{ color: dark ? colors.dark : colors.white }} text={text} />
      {buttonText && <Button secondary>Start a Project</Button>}
    </React.Fragment>
  </Container>
)

export default SectionTop
