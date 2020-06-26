import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import ContentWrapper from "../components/ContentWrapper"
import SectionTop from "../components/SectionTop"
import BackgroundImage from "../components/BackgroundImage"

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
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    /*background: linear-gradient(to right, rgba(255,154,0, 0.675), rgba(255,77,0, 0.675));*/ /* rgb(255,116,0) */
    /*background: linear-gradient(to right, rgba(255,154,0, 0.7), rgba(255,116,0,0.7));*/
    /*background: linear-gradient(to right, rgba(240,94,35, 0.7), rgba(239,114,21, 0.7));*/
  }
`

const Hero = ({ text, imageData }) => (
  <Container>
    <DarkOverlay>
      <BackgroundImage
        alt="Augmented Reality"
        fluid={imageData}
        fit="contain"
        height="100%"
        width="100%"
        style={{ bottom: 0, right: 0, position: "absolute" }}
      />
      <ContentWrapper>
        <SectionTop
          light
          header={text.title}
          bottomText={text.action}
          zIndexHigh
        >
          {text.subTitle}
        </SectionTop>
      </ContentWrapper>
    </DarkOverlay>
  </Container>
)

Hero.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}

export default Hero
