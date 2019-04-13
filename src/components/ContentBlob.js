import React from 'react'
import styled from 'styled-components'
import SubHeading from './SubHeading'
import Text from './Text'
import Button from './Button';
import { Link } from 'gatsby'
import PropTypes from 'prop-types';
import styles from '../styles/styles'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${({ left }) => left ? 'flex-start' : 'center'};
  max-width: 550px;
  width: ${({width}) => width ? width + 'px' : 'unset'};
  margin: 2rem auto 0 auto;
  text-align: center;
`

const Heading = styled(SubHeading)`
  white-space: nowrap;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    white-space: unset;
  }
`

const ContentBlob = ({ className, left, children, heading, text, small = false, width, buttonText, buttonLink, ...props }) => (
  <Wrapper className={className} {...props} left={left} width={width}>
      {children}
      <Heading small={small} dark>{heading}</Heading>
      <Text style={{textAlign: left ? 'left' : 'center'}} dark>{text}</Text>
      {buttonText && <Link to={buttonLink}><Button style={{marginTop: 'auto'}} primary>{buttonText}</Button></Link>}
  </Wrapper>
)

ContentBlob.propTypes = {
  text: PropTypes.string.isRequired,
}

export default ContentBlob
