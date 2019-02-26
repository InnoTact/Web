import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'

const Text = styled.p`
    color: ${props => props.dark ? colors.dark : colors.white};
    font-size: 1.1rem;
    line-height: 1.4;
    margin-bottom: 1.5rem;
`

export default ({children, dark, light, ...props}) => <Text {...props} dark={dark} light={light}>{children}</Text>

