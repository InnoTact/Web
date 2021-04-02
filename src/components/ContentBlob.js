import React from 'react'
import styled from 'styled-components'
import SubHeading from './SubHeading'
import Text from './Text'
import Button from './Button';
import { Link } from 'gatsby'
import PropTypes from 'prop-types';
import styles from '../styles/styles'
import ContentBlobWrapper from './ContentBlobWrapper';



const Heading = styled(SubHeading)`
  white-space: nowrap;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    white-space: unset;
  }
`

const ContentBlob = ({ className, left, children, heading, text, textStyle, small = false, width, buttonText, buttonLink, ...props }) => (
  <ContentBlobWrapper className={className} left={left} width={width} {...props}>
      {children}
      <Heading small={small} dark>{heading}</Heading>
      <Text style={{textAlign: left ? 'left' : 'center', ...textStyle }} dark>{text}</Text>
      {buttonText && <Link to={buttonLink}><Button style={{marginTop: 'auto'}} primary>{buttonText}</Button></Link>}
  </ContentBlobWrapper>
)

ContentBlob.propTypes = {
  text: PropTypes.string.isRequired,
}

export default ContentBlob
