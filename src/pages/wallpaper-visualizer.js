import React, { Component } from "react"
import Navbar from "./../components/Navbar"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import CustomHelmet from "../components/CustomHelmet"
import WallpaperCompaniesLovingUs from "../components/WallpaperCompaniesLovingUs"
import LocalizedStrings from "react-localization"
import translation from "../translations/wallpaper-visualizer"
import { VideoPitch } from "../components/VideoPitch"
import QuoteSection from "../components/QuoteSection"
import colors from "../styles/colors"
import IconInfoGrid from "../components/IconInfoGrid"
import MultipleQuoteSection from "../components/MultipleQuoteSection"
import ActionSection from "../components/ActionSection"
import DetailedInfoSection from "../components/DetailedInfoSection"
import FeatureGrid from "../components/FeatureGrid"
import BytTapetLogo from '../img/byttapet-logo.png';
import EmbellenceGroupLogo from '../img/embellence-logo.png';
import PJLogo from '../img/PJ_Logo_2.pdf';

class WallpaperVisualizer extends Component {
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
          videoUrl={`https://www.youtube.com/embed/wG-pAblEw5I?rel=0`}
          videoAlt={s.landing.videoAlt}
          style={{ marginTop: "3rem" }}
          light={false}
        />
        <WallpaperCompaniesLovingUs
          title={s.companies.title}
          companies={[
            {
              text: s.companies.borastapeter,
              url:
                "https://www.borastapeter.com/sites/borastapeter.com/themes/borastapeter/dist/images/logo.svg",
            },
            {
              text: s.companies.grandeco,
              url:
                "https://www.grandecogroup.com/img/logo-dark.svg",
            },
            {
              text: s.companies.pj,
              url:
                "http://www.maison-deco.info/wp-content/uploads/2018/10/phillip-jeffries-logo.png",
            },
            {
              text: s.companies.bytTapet,
              url: BytTapetLogo,
            },
          ]}
        />
        <IconInfoGrid
          light={true}
          style={{ backgroundColor: colors.white }}
          title={s.statsUseCase.title}
          iconCells={s.statsUseCase.stats}
        />
        <DetailedInfoSection
          title={s.detailedInfo.title}
          subTitle={s.detailedInfo.subTitle}
          description={s.detailedInfo.description}
          videoSrcURL={"https://www.youtube.com/embed/niRzkU6_Tpg?start=40&rel=0"}
          light={false}
        />
        <FeatureGrid
          title={s.featureSection.title}
          light={true}
          features={s.featureSection.features}
        />
        <DetailedInfoSection
          title={s.lidarInfo.title}
          subTitle={s.lidarInfo.subTitle}
          description={s.lidarInfo.description}
          videoSrcURL={"https://www.youtube.com/embed/9rxQYIqx8lM"}
          light={false}
        />
        <MultipleQuoteSection
          light={true}
          title={s.multipleQuoteSection.title}
          quotes={s.multipleQuoteSection.quotes}
        />
        <QuoteSection
          title={s.businessQuote.title}
          quote={s.businessQuote.quote}
          saidBy={s.businessQuote.saidBy}
          url={null}
          light={false}
        />
        <ActionSection
          title={s.takeAction.title}
          description={s.takeAction.description}
          btnText={s.takeAction.btnText}
          link={"/contact/#contact-form"}
          dark={false}
        />
        <Footer />
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query {
    BytTapetLogo: file(relativePath: { eq: "byttapet-logo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default WallpaperVisualizer
