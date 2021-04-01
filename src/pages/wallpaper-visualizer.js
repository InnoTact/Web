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
import InfoGrid from "../components/InfoGrid"
import InfoCell from "../classes/InfoCell"
import colors from "../styles/colors"
import IconInfoGrid from "../components/IconInfoGrid"
import IconCell from "../classes/IconCell"

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
        <VideoPitch />
        <WallpaperCompaniesLovingUs imageData={data} />
        <QuoteSection
          style={{ backgroundColor: colors.white }}
          quote="Det kan vara svårt att föreställa sig hur ens sovrum, vardagsrum eller kök kommer att se ut med en ny tapet när man bara har ett tapetprov. Med appen ser man direkt hur en viss tapet passar i ens egna hem. Och den är dessutom väldigt rolig att använda. Det är lätt att fastna med den och gå runt hemma och se rummen byta prägel med nya tapeter"
          saidBy="Oskar Gissberg, Head of Digital Wallvision"
          url={`https://www.di.se/pressreleaser/2020/02/04/borastapeter-ar-teknik-gor-det-mojligt-att-tapetsera-virtuellt-i-ny-app/`}
        />
        <InfoGrid title="Key Features" light={false} infoCells={[
            new InfoCell(
              "In App Purchases",
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            ),
            new InfoCell(
              "Link to your website",
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            ),
            new InfoCell(
              "Multi Language Support",
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            ),
        ]} />
        <IconInfoGrid light style={{ backgroundColor: colors.white }} title="Use Case: Stats from Boråstapeter" iconCells={[
          new IconCell("+60,000 users"), // TODO: icons
          new IconCell("1,200 new users per week"),
          new IconCell("Top Rank of #4 in Sweden"),
          new IconCell("+10,000 active users per month"),
          new IconCell("+30,000 papered walls per month"),
          new IconCell("+150,000 impressions on AppStore"),
        ]} />
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
