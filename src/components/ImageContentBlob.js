import ContentBlob from "../components/ContentBlob"
import styled from "styled-components"
import styles from "../styles/styles"

const ImageContentBlob = styled(ContentBlob)`
width: 350px;
margin: 0 2rem 0 0;

@media (max-width: ${styles.breakpoints.lg + "px"}) {
  width: 320px;
}

@media (max-width: ${styles.breakpoints.lg + "px"}) {
  width: unset;
}

@media (max-width: ${styles.breakpoints.md + "px"}) {
  margin-right: 0;
}
`
export default ImageContentBlob