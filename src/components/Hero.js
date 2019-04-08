import React from 'react'
import styled from "styled-components"
import colors from "../styles/colors"
import PropTypes from "prop-types"
import ContentWrapper from '../components/ContentWrapper'
import SectionTop from '../components/SectionTop'

const Container = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const DarkOverlay = styled.div`
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: unset;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

const Hero = ({ header, subHeader, buttonText, bottomText, children }) => (
  <Container>
    <DarkOverlay>
      {children}
      <ContentWrapper>
        <SectionTop
          light
          header={header}
          buttonText={buttonText}
          bottomText={bottomText}
        >
          {subHeader}
        </SectionTop>
      </ContentWrapper>
    </DarkOverlay>
  </Container>
)

Hero.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}

export default Hero


