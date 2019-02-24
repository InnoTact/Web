import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'

const Text = styled.p`
    color: ${props => props.dark ? colors.dark : colors.white};
    font-size: 1.1rem;
    line-height: 1.4;
`

export default ({children, dark, light}) => <Text dark={dark} light={light}>{children}</Text>

