import React from "react"
import styles from "../styles/styles"
import styled from "styled-components"
import colors from "./../styles/colors"
import PropTypes from "prop-types"
import Text from "../components/Text"

const AnchorText = styled(Text)`
  display: "inline";
  margin-bottom: 0;
  color: ${props => (props.dark ? colors.dark : colors.white)};
  font-size: ${props => (props.small ? "0.85rem" : "1.1rem")};
  font-style: ${({ italic }) => (italic ? "italic" : "none")};

  :hover {
    color: ${colors.primary};
    cursor: pointer;
  }

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    font-size: ${props => (props.small ? "0.75rem" : "0.95rem")};
  }
`
const Anchor = ({
  href,
  children,
  dark,
  light,
  italic,
  className,
  ...props
}) => (
  <AnchorText
    className={className}
    as="a"
    italic={italic}
    href={href}
    {...props}
    dark={dark}
    light={light}
  >
    {children}
  </AnchorText>
)

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}


export default Anchor
