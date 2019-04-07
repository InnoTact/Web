import React, { Component } from "react"
import styled from "styled-components"
import SectionTop from "./../components/SectionTop"
import Navbar from "./../components/Navbar"
import Section from "./../components/Section"
import ContentWrapper from "./../components/ContentWrapper"
import ContentBlob from "./../components/ContentBlob"
import colors from "../styles/colors"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import { FaCubes } from "react-icons/fa"
import styles from "../styles/styles"
import People from "../components/People"
import GetStarted from "../components/GetStarted"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const BlobContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    flex-direction: column;
    justify-content: space-around;
  }
`

class About extends Component {
  render() {
    const { data } = this.props

    return (
      <React.Fragment>
        <Navbar />

        <Hero>
          <ContentWrapper>
            <SectionTop
              light
              header="Företaget"
              bottomText="Läs mer"
            > TheSpark består av ett team högpresterande ingenjörsstudenter från Chalmers Tekniska Högskola, i Göteborg. Vår högsta prioritet är alltid att göra våra kunder nöjda. Vi älskar att skapa idéer tillsammans med våra kunder för att förbättra och förenkla processerna i deras företag.
            </SectionTop>
          </ContentWrapper>
        </Hero>

        <Section backgroundColor={colors.lightgrey}>
          <ContentWrapper>
            <Img
              alt="Team photo of TheSpark"
              fluid={data.TeamImage.childImageSharp.fluid}
            />
            <BlobContainer>
              <ContentBlob
                heading="Ungdomligt driv"
                text="Vår unga ålder, som av vissa kan ses som en svaghet, är en av våra största styrkor. Vi har ett driv och en gnista som inte finns hos många andra företag. Välj oss för att få en partner som kommer göra allt för att göra dig nöjd. 
"
              >
                <FaCubes style={styles.icon} />
              </ContentBlob>
              <ContentBlob
                heading="Flexibilitet"
                text="Gällande anpassning till nya tekniker, arbetstider och krav från kunder är flexibiliteten genomlysande i TheSpark. Vi gör vad som krävs för att uppnå våra mål."
              >
                <FaCubes style={styles.icon} />
              </ContentBlob>
              <ContentBlob
                heading="Vårt team"
                text="Vi tror på ett team-baserat arbetssätt. Som ett team kommer vi kunna producera mycket mer än summan av vad vi hade producerat som enskillda individer."
              >
                <FaCubes style={styles.icon} />
              </ContentBlob>
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
    TeamImage: file(relativePath: { eq: "team.jpg" }) {
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
  }
`

export default About
