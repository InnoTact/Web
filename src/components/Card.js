import styled from 'styled-components'
import colors from '../styles/colors'
import styles from '../styles/styles'

const Container = styled.div`
    padding: 2rem 3.3rem 0.5rem 3.3rem;
    position: relative;
    background-color: ${colors.white};
    box-shadow: ${colors.normalBoxShadow};

    @media (max-width: ${styles.breakpoints.sm + "px"}) {
    padding: 1rem 1.65rem;
  }
`

export default Container