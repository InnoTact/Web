import styled from 'styled-components'
import colors from './../styles/colors'
import PropTypes from 'prop-types'
import styles from '../styles/styles'

const Button = styled.button`
  position: relative;
  overflow: hidden;
  padding: 0 40px;
  height: 56px;
  line-height: 42px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1px;
  text-align: center;
  font-weight: 500;
  background-color: transparent;
  color: ${props => (props.primary ? colors.primary : colors.white)};
  border: 2px solid ${props => (props.primary ? colors.primary : colors.white)};
  transition: all 0.3s ease 0s;
  font-weight: 500;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    padding: 0 32px;
    height: 46px;
    font-size: 14px;
  }

  :hover {
    cursor: pointer;
    transition: all 0.3s ease 0s;
    transform: ${({disabled}) => !disabled && 'scale(1.02)'};
    color: ${({primary, disabled}) => ((primary && !disabled)  ? colors.white : colors.primary)};
  }

  ::before {
    content: '';
    width: 800px;
    height: 300px;
    position: absolute;
    background-color: ${props => (props.primary ? colors.primary : colors.white)};;
    left: -400px;
    top: -300px;
    transform-origin: bottom center;
    transform: rotate(-45deg);
    transition: 0.4s ease-in-out left;
    z-index: -5;
 }

 :hover::before {
   left: 0;
 }

  :disabled {
    color: ${colors.mediumGrey};
    border-color: ${colors.mediumGrey};
    cursor: not-allowed;
  }
`

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Button
