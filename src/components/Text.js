import React from 'react'
import styled, {css} from 'styled-components'
import colors from '../styles/colors'
import styles from '../styles/styles'

const Text = styled.p`
    color: ${props => props.dark ? colors.dark : colors.white};
    font-size: ${props => props.small ? '0.85rem' : '1.1rem'};
    line-height: 1.65;
    margin-bottom: 1.5rem;
    position: relative;
    ${({borderBottom}) => borderBottom && 
    css`
        ::after {
            content: '';
            position: absolute;
            height: 1px;
            bottom: -5px;
            left: 0;
            right: 0;
            background-color: ${colors.lightgrey}
        }
    `}
    @media (max-width: ${styles.breakpoints.sm + "px"}) {
        font-size: ${props => props.small ? '0.75rem' : '0.95rem'};
  }
`

export default ({children, dark, light, className, ...props}) => <Text className={className} {...props} dark={dark} light={light}>{children}</Text>