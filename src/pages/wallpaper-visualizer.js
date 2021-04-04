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
          videoUrl={`https://www.youtube.com/embed/wG-pAblEw5I`}
          videoAlt={s.landing.videoAlt}
          style={{ marginTop: "3rem" }}
          light={false}
        />
        <WallpaperCompaniesLovingUs
          companies={[
            {
              text: s.companies.wallvision,
              url:
                "https://www.wallvision.com/sites/wallvision.com/files/wallvision_0_2.png",
            },
            {
              text: s.companies.borastapeter,
              url:
                "https://www.borastapeter.com/sites/borastapeter.com/themes/borastapeter/dist/images/logo.svg",
            },
            {
              text: s.companies.grandeco,
              url:
                "https://www.grandecogroup.com/frontend/corporateWebsiteBundle/img/general/logo-grandeco--b-on-w.svg",
            },
          ]}
        />
        <DetailedInfoSection
          title={s.detailedInfo.title}
          subTitle={s.detailedInfo.subTitle}
          description={s.detailedInfo.description}
          imgSrc={
            "https://www.borastapeter.com/sites/borastapeter.com/files/styles/paragraph_image_l_2x/public/2001_bt_nl_app2_en.jpg?itok=T0Gp1mxI&timestamp=1583573101"
          }
          light={true}
        />
        <FeatureGrid title={s.featureSection.title} light={false} features={s.featureSection.features} />
        <MultipleQuoteSection
          light={true}
          title={s.multipleQuoteSection.title}
          quotes={s.multipleQuoteSection.quotes}
        />
        <QuoteSection
          title={s.businessQuote.title}
          quote={s.businessQuote.quote}
          saidBy={s.businessQuote.saidBy}
          url={`https://www.di.se/pressreleaser/2020/02/04/borastapeter-ar-teknik-gor-det-mojligt-att-tapetsera-virtuellt-i-ny-app/`}
          light={false}
        />
        <IconInfoGrid
          light={true}
          style={{ backgroundColor: colors.white }}
          title={s.statsUseCase.title}
          iconCells={s.statsUseCase.stats}
        />
        <ActionSection
          title={s.takeAction.title}
          description={s.takeAction.description}
          btnText={s.takeAction.btnText}
          link={"/contact/#contact-form"}
          dark={true}
        />
        <Footer />
      </React.Fragment>
    )
  }
}

export default WallpaperVisualizer
