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
        <CustomHelmet page="Wallpaper-Visualizer " />
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
          title="What our end-users say"
          quotes={s.endUserQuotes}
        />
        <QuoteSection
          title={"What our business owners say"}
          quote="Det kan vara svårt att föreställa sig hur ens sovrum, vardagsrum eller kök kommer att se ut med en ny tapet när man bara har ett tapetprov. Med appen ser man direkt hur en viss tapet passar i ens egna hem. Och den är dessutom väldigt rolig att använda. Det är lätt att fastna med den och gå runt hemma och se rummen byta prägel med nya tapeter"
          saidBy="Oskar Gissberg, Head of Digital Wallvision"
          url={`https://www.di.se/pressreleaser/2020/02/04/borastapeter-ar-teknik-gor-det-mojligt-att-tapetsera-virtuellt-i-ny-app/`}
          light={false}
        />
        <IconInfoGrid
          light={true}
          style={{ backgroundColor: colors.white }}
          title="Business Use Case: Boråstapeter"
          iconCells={[
            new IconCell("+60,000 users"), // TODO: icons
            new IconCell("1,200 new users per week"),
            new IconCell("Top Rank of #4 in Sweden"),
            new IconCell("+10,000 active users per month"),
            new IconCell("+30,000 papered walls per month"),
            new IconCell("+150,000 impressions on AppStore"),
          ]}
        />
        <ActionSection
          title="Ready to innovate the wallpaper industry?"
          description="Sista ord som får de att faktiskt kontakta oss. Ändra titeln. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua."
          btnText={"Contact Us"}
          link={"/kontakt/#contact-form"}
          dark={true}
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
