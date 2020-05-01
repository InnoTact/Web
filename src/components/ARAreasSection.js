import React, { Component } from "react"
import SectionTop from "../components/SectionTop"
import Section from "../components/Section"
import ContentWrapper from "../components/ContentWrapper"
import colors from "../styles/colors"
import Capability from "../components/Capability"
import BackgroundImage from "../components/BackgroundImage"
import styled from "styled-components"
import styles from "../styles/styles"
import LocalizedStrings from "react-localization"
import translation from "../translations/ARAreas"

const ExtraMargin = styled.div`
  margin-top: 60px;
  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    margin-top: -15px;
  }
`

class ARAreasSection extends Component {
  render() {
    const { data } = this.props
    const strings = new LocalizedStrings(translation)

    return (
      <Section
        style={{ marginBottom: 0, paddingBottom: 0 }}
        backgroundColor={colors.white}
      >
        <React.Fragment>
          <ContentWrapper>
            <SectionTop dark header={strings.title}>
              {strings.subTitle}
            </SectionTop>
          </ContentWrapper>
          <ExtraMargin>
            <Capability
              buttonText={strings.visualize.button}
              textLeft
              header={strings.visualize.title}
              text={strings.visualize.description}
            >
              <BackgroundImage
                alt="Augmented Reality"
                fluid={data.AugmentedRealityImage1.childImageSharp.fluid}
                fit="contain"
                height="100%"
                style={{ zIndex: 1 }}
              />
            </Capability>
          </ExtraMargin>
          <Capability
            buttonText={strings.interaction.button}
            header={strings.interaction.title}
            text={strings.interaction.description}
          >
            <BackgroundImage
              alt="Augmented Reality"
              fluid={data.AugmentedRealityImage2.childImageSharp.fluid}
              fit="contain"
              height="100%"
              style={{ zIndex: 1 }}
            />
          </Capability>
          <Capability
            buttonText={strings.instruction.button}
            textLeft
            header={strings.instruction.title}
            text={strings.instruction.description}
          >
            <BackgroundImage
              alt="Augmented Reality"
              fluid={data.AugmentedRealityImage3.childImageSharp.fluid}
              fit="contain"
              height="100%"
              style={{ zIndex: 1 }}
            />
          </Capability>
        </React.Fragment>
      </Section>
    )
  }
}

export default ARAreasSection
