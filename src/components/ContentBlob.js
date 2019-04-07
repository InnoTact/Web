import React from 'react'
import styled from 'styled-components'
import SubHeading from './SubHeading'
import Text from './Text'
import Button from './Button';
import { Link } from 'gatsby'
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 550px;
  width: ${({width}) => width ? width + 'px' : 'unset'};
  margin: 2rem auto 0 auto;
  text-align: center;
`

const Item = styled.div`
`

const ContentBlob = ({ children, heading, text, small = false, width, buttonText, buttonLink, ...props }) => (
  <Wrapper {...props} width={width}>
    <Item>
      {children}
    </Item>
    <Item>
      <SubHeading small={small} dark>{heading}</SubHeading>
    </Item>
    <Item>
      <Text dark>{text}</Text>
    </Item>
    <Item>
      {buttonText && <Link to={buttonLink}><Button primary>{buttonText}</Button></Link>}
    </Item>
  </Wrapper>
)

ContentBlob.propTypes = {
  text: PropTypes.string.isRequired,
}

export default ContentBlob
