import React, { Component } from "react"
import Navbar from "./../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import { graphql } from "gatsby"
import CustomHelmet from "../components/CustomHelmet"
import WallpaperCompaniesLovingUs from "../components/WallpaperCompaniesLovingUs"
import LocalizedStrings from "react-localization"
import translation from "../translations/wallpaper-visualizer"
import { VideoPitch } from "../components/VideoPitch"
import QuoteSection from "../components/QuoteSection"

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
        <VideoPitch />
        <QuoteSection
          quote="Det kan vara svårt att föreställa sig hur ens sovrum, vardagsrum eller kök kommer att se ut med en ny tapet när man bara har ett tapetprov. Med appen ser man direkt hur en viss tapet passar i ens egna hem. Och den är dessutom väldigt rolig att använda. Det är lätt att fastna med den och gå runt hemma och se rummen byta prägel med nya tapeter"
          saidBy="Oskar Gissberg, Head of Digital Wallvision"
          url={`https://www.di.se/pressreleaser/2020/02/04/borastapeter-ar-teknik-gor-det-mojligt-att-tapetsera-virtuellt-i-ny-app/`}
        />
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
