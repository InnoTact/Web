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
import SolutionSection from "../components/SolutionSection"

class Index extends Component {
  render() {
    const { data } = this.props
    const strings = new LocalizedStrings(translation)

    return (
      <React.Fragment>
        <CustomHelmet overrideTitle seo={strings.seo} />
        <Navbar light={true} />
        <Hero
          text={strings.hero}
          imageData={data.HeroBackgroundImage.childImageSharp.fluid}
        />
        <Products light={true} imageData={data} />
        <StartProjectSection light={false} />
        <SolutionSection light={false} />
        <FactSection />
        <QuoteSection
          quote="I do think that a significant portion of the population of
            developed countries, and eventually all countries, will have AR
            experiences every day, almost like eating three meals a day, it will
            become that much a part of you."
          saidBy="Tim Cook, CEO Apple"
          url={`https://nordic.businessinsider.com/apple-ceo-tim-cook-explains-augmented-reality-2016-10?r=US&IR=T`}
        />
        <GetStarted />
        <Footer />
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query {
    WallpaperVisualizer: file(relativePath: { eq: "development1.jpg" }) {
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
