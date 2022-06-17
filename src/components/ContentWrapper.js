import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const ContentWrapper = styled.div`
  width: 90%;
  max-width: ${props => (props.maxWidth == null ? '1244px' : props.maxWidth) };
  margin: 0 auto;
`

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ({children, className, ...props}) => <ContentWrapper className={className} {...props}><React.Fragment>{children}</React.Fragment></ContentWrapper>

