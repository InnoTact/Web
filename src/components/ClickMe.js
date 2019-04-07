import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'
import Text from './Text'
import { Link } from "gatsby"
import PropTypes from 'prop-types';

const ClickMe = styled(Text)`
    color: ${colors.primary};
    display: inline;
    font-style: ${({italic}) => italic ? 'italic' : 'none'};
    :hover {
        color: ${colors.primaryLowLighten};
        transition: all ease-in-out 300ms;
    }
`

ClickMe.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  }

export default ({url, children, ...props}) => <Link {...props} to={url}><ClickMe url={url} {...props}>{children}</ClickMe></Link>

