import React, { Component } from "react"
import SectionTop from "../components/SectionTop"
import Navbar from "../components/Navbar"
import Section from "../components/Section"
import ContentWrapper from "../components/ContentWrapper"
import colors from "../styles/colors"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import GetStarted from "../components/GetStarted"
import { graphql } from "gatsby"
import styled from "styled-components"
import ContentBlob from "../components/ContentBlob"
import CustomHelmet from '../components/CustomHelmet'
import LocalizedStrings from "react-localization"
import ARAreasSection from "../components/ARAreasSection"
import translation from "../translations/solutions"

const SolutionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

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

        <ARAreasSection data={data} />
 
        <Section backgroundColor={colors.lightgrey}>
          <ContentWrapper>
            <SectionTop dark header="Lösningar vi erbjuder">
              Genom AR kan du få tydliga instruktioner i realtid för att hjälpa
              dig med olika problem som uppstår. Du kan få tillgång till
              detaljerad information som annars hade hämtats via Internet eller
              en manual. Du kan även få support via en extern part i realtid.
              Detta kan hjälpa både dig som privatperson som vill förenkla
              reparationer eller dig som arbetar med avancerad support.
            </SectionTop>
            <SolutionsContainer>
              <ContentBlob
                left
                width={360}
                small
                heading="AR för upplärning"
                text="Genom att simulera de arbetsmiljöer som finns inom företaget kan upplärning ske vart som helst utan risk för att störa er process. AR-upplärning kan både minksa tid och kostnader för att utbilda ny arbetskraft."
              />
              <ContentBlob
                left
                width={360}
                small
                heading="AR för marknadsföring"
                text="Genom AR kan du visualisera information om ditt företag rakt framför ögonen på potentiella kunder utan att investera i hårdvara. Detta är ett steg i digitaliseringens framfart och hur framtiden kommer förändra sättet vi marknadsför oss."
              />
              <ContentBlob
                left
                width={360}
                small
                heading="AR för modellvisualisering"
                text="AR möjliggör att kunna studera 3D-modeller i realtid för att få en inblick i hur en viss komponent eller maskin ser ut och fungerar. Det går även att interagera med objektet och välja särskilda delar du vill studera mer i detalj."
              />
              <ContentBlob
                left
                width={360}
                small
                heading="AR för navigation"
                text="Istället för att översätta information från en GPS på en skärm till verkligheten kan navigationen ske rakt framför dina ögon. Genom AR-navigation behöver du inte fokusera på en GPS utan kan fullt ut koncentrera sig på att exempelvis köra bil eller cykla."
              />
              <ContentBlob
                left
                width={360}
                small
                heading="AR och maskininlärning"
                text="Genom att kombinera AR och maskininlärning kan du få information i realtid. Information kommer inte längre behöva sökas upp via mobilen eller användarmanualer utan vara tillgänglig rakt framför dina ögon när du behöver den."
              />
              <ContentBlob
                left
                width={360}
                small
                heading="AR för internetförsäljning"
                text="När du köper artiklar via Internet finns det så mycket mer att se av produkten än bara bilder på en skärm. Genom AR kan du visualisera hur produkten ser ut i verklig form och storlek i den miljön du vill använda den i."
              />
            </SolutionsContainer>
          </ContentWrapper>
        </Section>

        <GetStarted />

        <Footer />
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query {
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
