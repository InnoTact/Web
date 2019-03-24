import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const ContentWrapper = styled.div`
  width: 90%;
  max-width: 1244px;
  margin: 0 auto;
`

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ({children}) => <ContentWrapper><React.Fragment>{children}</React.Fragment></ContentWrapper>

