import styled from 'styled-components'
import colors from '../styles/colors'

const Hero = styled.div`
  background-image: linear-gradient(to right, ${colors.primaryLower}, ${colors.primaryHigher});
  width: 100vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export default Hero