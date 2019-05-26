import React, { Component } from "react"
import SectionTop from "../components/SectionTop"
import Navbar from "../components/Navbar"
import Section from "../components/Section"
import ContentWrapper from "../components/ContentWrapper"
import colors from "../styles/colors"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Capability from "../components/Capability"
import GetStarted from "../components/GetStarted"
import { graphql } from "gatsby"
import BackgroundImage from "../components/BackgroundImage"
import styled from "styled-components"
import styles from "../styles/styles"
import ContentBlob from "../components/ContentBlob"
import VideoShowcase from '../components/VideoShowcase'

const ExtraMargin = styled.div`
  margin-top: 60px;
  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    margin-top: -15px;
  }
`
const SolutionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

class Solutions extends Component {
  render() {
    const { data } = this.props

    return (
      <React.Fragment>
        <Navbar />

        <Hero
          header="Våra lösningar"
          subHeader="En av våra största styrkor är att snabbt kunna anpassa oss till
          nya utmaningar och ny teknologi. Därför kan vi skapa lösningar
          till dig oavsett om du vill använda Android, iOS eller
          AR-glasögon. Våra produkter skapas alltid med framtiden i åtanke
          och underhåll är en stor del av det vi gör."
          bottomText="Läs mer"
        >
          <BackgroundImage
            alt="Augmented Reality"
            fluid={data.HeroBackgroundImage.childImageSharp.fluid}
            fit="contain"
            height="100%"
            width="100%"
            style={{ bottom: 0, right: 0, position: "absolute" }}
          />
        </Hero>

        <Section
          style={{ marginBottom: 0, paddingBottom: 0 }}
          backgroundColor={colors.white}
        >
          <React.Fragment>
            <ContentWrapper>
              <SectionTop dark header={`Hur AR kommer förbättra ditt företag`}>
                Våra lösningar syftar alltid till att förbättra sättet våra
                kunder arbetar på. Alla företag kan förbättras genom att
                implementera AR på något sätt. Det finns framförallt tre områden
                där AR är särskilt effektivt.
              </SectionTop>
            </ContentWrapper>
            <ExtraMargin>
              <Capability
                buttonText="Kom igång"
                textLeft
                header="Visualisering"
                text="AR är den effektivaste teknologin för att visualisera objekt i din miljö och omgivning. Du kan exempelvis se hur en ny tavla hade sett ut i ditt vardagsrum eller hur ditt kontor hade sett ut om du inredde det med nya möbler. Visualisering är viktigt inför köpbeslut för att ge dig all information du behöver inom några få sekunder."
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
              buttonText="Starta ett projekt"
              header="Interaktion"
              text="Vad som tidigare krävt fysiska knappar eller en navigation via en smart mobilskärm kan nu ske genom bildigenkänning och maskininlärning i realtid via AR. Användarupplevelsen av digitala lösningar kan förändras helt när AR-glasögon möjliggör att kunna ha båda händerna fria samtidigt som du får all information du behöver."
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
              buttonText="Kontakta oss"
              textLeft
              header="Instruktioner &amp; vägledning"
              text="Genom AR kan du få tydliga instruktioner i realtid för att hjälpa dig med olika problem som uppstår. Du kan få tillgång till detaljerad information som annars hade hämtats via Internet eller en manual. Du kan även få support via en extern part i realtid. Detta kan hjälpa både dig som privatperson som vill förenkla reparationer eller dig som arbetar med avancerad support."
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
