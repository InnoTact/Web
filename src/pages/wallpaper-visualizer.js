import React, { Component } from "react"
import Navbar from "./../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import { graphql } from "gatsby"
import CustomHelmet from "../components/CustomHelmet"
import WallpaperCompaniesLovingUs from "../components/WallpaperCompaniesLovingUs"
import LocalizedStrings from "react-localization"
import translation from "../translations/wallpaper-visualizer"

class WallpaperVisualizer extends Component {
  render() {
    const { data } = this.props
    const strings = new LocalizedStrings(translation)

    return (
      <React.Fragment>
        <CustomHelmet page="Wallpaper-Visualizer " />
        <Navbar />
        <Hero
          text={strings.hero}
          imageData={data.HeroBackgroundImage.childImageSharp.fluid}
        />
        <WallpaperCompaniesLovingUs imageData={data} />
        <Footer />
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query {
    HeroBackgroundImage: file(relativePath: { eq: "development9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default WallpaperVisualizer
