import React, { Component } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import GetStarted from "../components/GetStarted"
import { graphql } from "gatsby"
import CustomHelmet from '../components/CustomHelmet'
import LocalizedStrings from "react-localization"
import ARAreasSection from "../components/ARAreasSection"
import SolutionSection from "../components/SolutionSection"
import translation from "../translations/solutions"
import { Products } from "../components/Products"

class Solutions extends Component {
  render() {
    const { data } = this.props
    const strings = new LocalizedStrings(translation)

    return (
      <React.Fragment>
        <CustomHelmet page='Lösningar ' />
        <Navbar />
        <Hero
          text={strings.hero}
          imageData={data.HeroBackgroundImage.childImageSharp.fluid}
        />
        <Products imageData={data} />
        <SolutionSection />
        <ARAreasSection data={data} />
        <GetStarted dark />
        <Footer />
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query {
    WallpaperVisualizer: file(
      relativePath: { eq: "development1.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AugmentedRealityImage1: file(
      relativePath: { eq: "augmented-reality1.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AugmentedRealityImage2: file(
      relativePath: { eq: "augmented-reality2.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AugmentedRealityImage3: file(
      relativePath: { eq: "augmented-reality3.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    VRImage: file(relativePath: { eq: "VR.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    DevelopmentImage: file(relativePath: { eq: "development.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    HeroBackgroundImage: file(relativePath: { eq: "development4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Solutions

/*

<Section
          backgroundColor={colors.lightgrey}
        >
          <React.Fragment>
            <ContentWrapper>
              <SectionTop style={{marginBottom: 40}} dark header={`Exempel på lösningar`}>
                För att förstå vilken typ av lösningar vi skapar kan du kolla på videoklippen nedan som visar två korta demon.
              </SectionTop>
              <VideoShowcase />
            </ContentWrapper>
          </React.Fragment>
        </Section>

*/
