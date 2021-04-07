import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const StyledContainer = styled.div`
  padding: 5rem 0 5rem 0;
  margin: 0 auto;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#fff'};
  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    padding: 4rem 0 4rem 0;
}
`

const Section = ({ children, backgroundColor, className, ...props }) => <StyledContainer className={className} {...props} backgroundColor={backgroundColor}>{children}</StyledContainer>

Section.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Section
