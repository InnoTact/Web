import React, { Component } from "react"
import Navbar from "./../components/Navbar"
import Footer from "../components/Footer"
import People from "../components/People"
import Hero from "../components/Hero"
import GetStarted from "../components/GetStarted"
import { graphql } from "gatsby"
import CustomHelmet from "../components/CustomHelmet"
import LocalizedStrings from "react-localization"
import StartProjectSection from "../components/StartProjectSection"
import FactSection from "../components/FactSection"
import QuoteSection from "../components/QuoteSection"
import translation from "../translations/home"
import { Products } from "../components/Products"
import SolutionsSection from "../components/SolutionsSection"

class Index extends Component {
  render() {
    const { data } = this.props
    const strings = new LocalizedStrings(translation)

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
        <Products imageData={data} />
        <SolutionsSection />
        <GetStarted />
        <Footer />
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query {
    WallpaperVisualizer: file(
      relativePath: { eq: "augmented-reality1.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
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
