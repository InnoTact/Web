import React, { Fragment } from 'react'
import styled from 'styled-components'
import Header from './Header'
import SubHeader from './SubHeader'
import Button from './Button'
import colors from './../styles/colors'
import Text from './Text';
import { Link } from 'gatsby'
import styles from '../styles/styles'

const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const ReadMore = styled(Text)`
  display: block;
  position: absolute;
  left: 0;
  right: 0; 
  margin-left: auto;
  margin-right: auto;
  bottom: 15px;
  text-align: center;
  color: ${colors.mediumGrey};

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    display: none;
  }

  ::after {
    content: '<';
    display: inline-block;
    position: relative;
    left: 8px;
    color: ${colors.mediumGrey};
    transform: rotate(-90deg);
  }
`

const SectionTop = ({ header, text, buttonText = '', dark, bottomText }) => (
  <Container>
    <React.Fragment>
      <Header text={header} styles={{ color: dark ? colors.dark : colors.white }} />
      <SubHeader style={{ color: dark ? colors.dark : colors.mediumGrey, fontStyle: 'italic' }} text={text} />
      {buttonText && <Link to='/contact/'><Button secondary>Start a Project</Button></Link>}
      {bottomText && <ReadMore>
        {bottomText}
      </ReadMore>}
    </React.Fragment>
  </Container>
)

export default SectionTop
