import React, { Fragment } from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  width: 1244px;
  margin: 0 auto;
`

export default ({children}) => <ContentWrapper><React.Fragment>{children}</React.Fragment></ContentWrapper>

