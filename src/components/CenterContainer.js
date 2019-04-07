import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CenterContainer = ({ children }) => <Center>{children}</Center>

CenterContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CenterContainer
