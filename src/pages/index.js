import React, { Component } from "react"
import styles from "../styles/styles"
import SectionTop from "./../components/SectionTop"
import Navbar from "./../components/Navbar"
import Section from "./../components/Section"
import ContentWrapper from "./../components/ContentWrapper"
import ContentBlob from "./../components/ContentBlob"
import colors from "../styles/colors"
import TextCard from "../components/TextCard"
import Footer from "../components/Footer"
import People from "../components/People"
import Hero from "../components/Hero"
import GetStarted from "../components/GetStarted"
import { graphql } from "gatsby"
import { FaCubes, FaCreativeCommonsShare } from "react-icons/fa"
import { Helmet } from "react-helmet"
import ClickMe from "../components/ClickMe"
import Text from "../components/Text"
import Anchor from "../components/Anchor"
import SubHeading from "../components/SubHeading"
import BackgroundImage from "../components/BackgroundImage"
import CustomHelmet from "../components/CustomHelmet"
import LocalizedStrings from "react-localization"
import StartProjectSection from "../components/StartProjectSection"
import FactSection from "../components/FactSection"
import QuoteSection from "../components/QuoteSection"
import MethodologySection from "../components/MethodologySection"

class Index extends Component {
  render() {
    const { data } = this.props
    const strings = new LocalizedStrings({
      en: {
        hero: {
          title: "We Develop Augmented Reality Apps",
          subTitle: "We help people and companies save time and make better decisions by closing the gap between the digital and physical world.",
          action: "Read more"
        },
      },
      sv: {
        hero: {
          title: "Vi utvecklar Augmented Reality-applikationer",
          subTitle: "Vi hjälper människor och företag att spara tid och fatta bättre beslut genom att förena den digitala och fysiska världen.",
          action: "Läs mer"
        },
      },
    })

    return (
      <React.Fragment>
        <CustomHelmet />
        <Navbar />
        <Hero
          text={strings.hero}
          imageData={data.HeroBackgroundImage.childImageSharp.fluid}
        />
        <StartProjectSection />
        <FactSection />
        <QuoteSection />
        <People peopleImagesData={data} />
        <MethodologySection />
        <GetStarted />
        <Footer />
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query {
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
    HeroBackgroundImage: file(relativePath: { eq: "development1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Index
