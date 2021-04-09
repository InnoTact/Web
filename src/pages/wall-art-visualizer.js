import React, { Component } from "react"
import Navbar from "./../components/Navbar"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import CustomHelmet from "../components/CustomHelmet"
import WallpaperCompaniesLovingUs from "../components/WallpaperCompaniesLovingUs"
import LocalizedStrings from "react-localization"
import translation from "../translations/wall-art-visualizer"
import { VideoPitch } from "../components/VideoPitch"
import QuoteSection from "../components/QuoteSection"
import colors from "../styles/colors"
import IconInfoGrid from "../components/IconInfoGrid"
import MultipleQuoteSection from "../components/MultipleQuoteSection"
import ActionSection from "../components/ActionSection"
import DetailedInfoSection from "../components/DetailedInfoSection"
import FeatureGrid from "../components/FeatureGrid"

class WallArtVisualizer extends Component {
  render() {
    const { data } = this.props
    const s = new LocalizedStrings(translation)
    return (
      <React.Fragment>
        <CustomHelmet seo={s.seo} />
        <Navbar light={false} />
        <VideoPitch
          title={s.landing.productName}
          description={s.landing.shortPitch}
          videoUrl={`https://www.youtube.com/embed/WK_XrfWbkc8?rel=0`}
          videoAlt={s.landing.videoAlt}
          style={{ marginTop: "3rem" }}
          light={false}
        />
        
        <Footer />
      </React.Fragment>
    )
  }
}

export default WallArtVisualizer
