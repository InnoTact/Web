import styled from "styled-components"
import styles from "../styles/styles"

const ContentBlobWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${({ left }) => (left ? "flex-start" : "center")};
  max-width: 550px;
  width: ${({ width }) => (width ? width + "px" : "unset")};
  margin: 2rem auto 0 auto;
  text-align: center;
  min-width: 30%;
  @media (max-width: ${styles.breakpoints.xs + "px"}) {
    min-width: 51%;
}
`

export default ContentBlobWrapper
