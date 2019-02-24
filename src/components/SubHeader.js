import React, {Fragment} from 'react'
import styled from 'styled-components'

const SubHeader = styled.h2`
  color: #ccc;
  display: inline-block;
  margin-bottom: 1.2rem;
  margin: 0 auto 30px;
  font-size: 1.1rem;
  letter-spacing: 0;
  text-transform: none;
  line-height: 1.5;
  text-align: center;
  max-width: 1080px;
`

export default ({ text, styles = {} }) => <SubHeader style={{ ...styles }}>{text}</SubHeader>
