import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'
import Text from './Text'
import { Link } from "gatsby"

const ClickMe = styled(Text)`
    color: ${colors.primary};
    display: inline;
    font-style: italic;
    :hover {
        color: ${colors.primaryLowLighten};
        transition: all ease-in-out 300ms;
    }
`

export default ({url, children, ...props}) => <Link to={url}><ClickMe {...props} >{children}</ClickMe></Link>

