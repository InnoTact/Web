import React, { Fragment } from 'react'
import styled from 'styled-components'
import Header from './Header'
import SubHeader from './SubHeader'
import Button from './Button'
import colors from './../styles/colors'
import Text from './Text';

const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const ReadMore = styled(Text)`
  position: absolute;
  left: 0;
  right: 0; 
  margin-left: auto;
  margin-right: auto;
  bottom: 15px;
  text-align: center;
  color: ${colors.lightgrey};

  ::after {
    content: '<';
    display: inline-block;
    position: relative;
    left: 8px;
    color: ${colors.lightgrey};
    transform: rotate(-90deg);
  }
`

const SectionTop = ({ header, text, buttonText = '', dark, readMore }) => (
  <Container>
    <React.Fragment>
      <Header text={header} styles={{ color: dark ? colors.dark : colors.white }} />
      <SubHeader style={{ color: dark ? colors.dark : colors.lightgrey, fontStyle: 'italic' }} text={text} />
      {buttonText && <Button secondary>Start a Project</Button>}
      {readMore && <ReadMore>
        Learn More
      </ReadMore>}
    </React.Fragment>
  </Container>
)

export default SectionTop
