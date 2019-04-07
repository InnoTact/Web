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
  justify-content: flex-start;
  align-items: center;
  max-width: 550px;
  width: ${({width}) => width ? width + 'px' : 'unset'};
  margin: 2rem auto 0 auto;
  text-align: center;
`

const ContentBlob = ({ className, children, heading, text, small = false, width, buttonText, buttonLink, ...props }) => (
  <Wrapper className={className} {...props} width={width}>
    {children}
      <SubHeading small={small} dark>{heading}</SubHeading>
      <Text style={{textAlign: 'center'}} dark>{text}</Text>
      {buttonText && <Link to={buttonLink}><Button primary>{buttonText}</Button></Link>}
  </Wrapper>
)

ContentBlob.propTypes = {
  text: PropTypes.string.isRequired,
}

export default ContentBlob
