import styled from "styled-components"
import colors from "../styles/colors"
import styles from "../styles/styles"

const AnchorPrimary = styled.a`
  display: inline;
  margin-bottom: 0;
  color: ${colors.primary};
  font-size: 1.1rem;

  :hover {
    color: ${colors.primaryLowLighten};
    cursor: pointer;
  }

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    font-size: 1rem;
  }
`

export default AnchorPrimary