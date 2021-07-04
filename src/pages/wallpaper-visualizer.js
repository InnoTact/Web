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
          videoUrl={`https://www.youtube.com/embed/wG-pAblEw5I?rel=0`}
          videoAlt={s.landing.videoAlt}
          style={{ marginTop: "3rem" }}
          light={false}
        />
        <WallpaperCompaniesLovingUs
          title={s.companies.title}
          companies={[
            // {
            //   text: s.companies.wallvision,
            //   url:
            //     "https://www.wallvision.com/sites/wallvision.com/files/wallvision_0_2.png",
            // },
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
            {
              text: "Phillip Jeffries is one of the world leaders in textured and specialty wallcoverings.",
              url: `https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_880,h_414/https://lushluxuryng.com/wp-content/uploads/2019/08/output-onlinepngtools-2.png`
            }
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
        <MultipleQuoteSection
          light={false}
          title={s.multipleQuoteSection.title}
          quotes={s.multipleQuoteSection.quotes}
        />
        {/* <QuoteSection
          title={s.businessQuote.title}
          quote={s.businessQuote.quote}
          saidBy={s.businessQuote.saidBy}
          url={`https://www.di.se/pressreleaser/2020/02/04/borastapeter-ar-teknik-gor-det-mojligt-att-tapetsera-virtuellt-i-ny-app/`}
          light={true}
        /> */}
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

export default WallpaperVisualizer
