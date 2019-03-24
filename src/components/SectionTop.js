import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import SubHeader from './SubHeader'
import Button from './Button'
import colors from './../styles/colors'
import Text from './Text';
import { Link } from 'gatsby'
import styles from '../styles/styles'
import { animateScroll as scroll } from 'react-scroll'

const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const ReadMore = styled(Text)`
  display: inline-block;
  max-width: 200px;
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

  :hover {
    cursor: pointer;
    color: white;
    transition: all ease-in-out 300ms;
    transform: translateY(-5px);
  }
`

function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}

const SectionTop = ({ header, children, buttonText = '', dark, bottomText, ...props }) => (
  <Container {...props}>
    <React.Fragment>
      <Header text={header} styles={{ color: dark ? colors.dark : colors.white }} />
      {children && <SubHeader style={{ color: dark ? colors.dark : colors.mediumGrey, fontStyle: 'italic' }}>{children}</SubHeader>}
      {buttonText && <Link to='/contact/#contact-form'><Button secondary>Start a Project</Button></Link>}
      {bottomText && <ReadMore onClick={() => scroll.scrollTo(vh(82))}>
        {bottomText}
      </ReadMore>}
    </React.Fragment>
  </Container>
)

export default SectionTop
