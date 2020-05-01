import React, { Component } from "react"
import styled from "styled-components"
import SectionTop from "../components/SectionTop"
import Navbar from "../components/Navbar"
import Section from "../components/Section"
import ContentWrapper from "../components/ContentWrapper"
import ContentBlob from "../components/ContentBlob"
import colors from "../styles/colors"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import { FaFire, FaExpandArrowsAlt, FaUsers } from "react-icons/fa"
import styles from "../styles/styles"
import People from "../components/People"
import GetStarted from "../components/GetStarted"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "../components/BackgroundImage"
import CustomHelmet from '../components/CustomHelmet'
import LocalizedStrings from "react-localization"
import translation from "../translations/about"

const BlobContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 5rem;

  @media (max-width: ${styles.breakpoints.md + "px"}) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`

const ContentBlobCustom = styled(ContentBlob)`
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

class About extends Component {
  render() {
    const { data } = this.props
    const strings = new LocalizedStrings(translation)

    return (
      <React.Fragment>
        <CustomHelmet page='Om ' />
        <Navbar />

        <Hero
          text={strings.hero}
          imageData={data.HeroBackgroundImage.childImageSharp.fluid}
        />

        <Section backgroundColor={colors.lightgrey}>
          <ContentWrapper>
            <div style={{ boxShadow: colors.normalBoxShadow }}>
              <Img
                alt="Team photo of InnoTact"
                fluid={data.TeamImage.childImageSharp.fluid}
              />
            </div>
            <BlobContainer>
              <ContentBlobCustom
                heading="Ungdomligt driv"
                text="Vår unga ålder, som av vissa kan ses som en svaghet, är en av våra största styrkor. Vi har ett driv och en gnista som inte finns hos många andra företag. Välj oss för att få en partner som kommer göra allt för att göra dig nöjd."
              >
                <FaFire style={styles.icon} />
              </ContentBlobCustom>
              <ContentBlobCustom
                heading="Flexibilitet"
                text="Gällande anpassning till nya tekniker, arbetstider och krav från kunder är flexibiliteten genomlysande i InnoTact. Vi gör vad som krävs för att uppnå våra mål."
              >
                <FaExpandArrowsAlt style={styles.icon} />
              </ContentBlobCustom>
              <ContentBlobCustom
                heading="Vårat team"
                text="Vi tror på ett team-baserat arbetssätt. Som ett team kommer vi kunna producera mycket mer än summan av vad vi hade producerat som enskillda individer."
              >
                <FaUsers style={styles.icon} />
              </ContentBlobCustom>
            </BlobContainer>
          </ContentWrapper>
        </Section>

        <People peopleImagesData={data} />
        <GetStarted />
        <Footer />
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query {
    TeamImage: file(relativePath: { eq: "Gruppbild_InnoTact.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    JoelImage: file(relativePath: { eq: "Joel_Rudsberg.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    NiklasImage: file(relativePath: { eq: "Niklas_Gustafsson.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    AntonImage: file(relativePath: { eq: "Anton_Claesson.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    CasperImage: file(relativePath: { eq: "Casper_Lindberg.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    CarlImage: file(relativePath: { eq: "Carl_Claesson.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    FredrikImage: file(relativePath: { eq: "Fredrik_Hernqvist.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    OskarImage: file(relativePath: { eq: "Oskar_Gronqvist.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    MelkerImage: file(relativePath: { eq: "Melker_Veltman.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    HeroBackgroundImage: file(relativePath: { eq: "development7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default About
