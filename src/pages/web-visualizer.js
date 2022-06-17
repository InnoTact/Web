import React, { Component, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CustomHelmet from "../components/CustomHelmet"
import LocalizedStrings from "react-localization"
import translation from "../translations/web-visualizer"
import styled from "styled-components"
import styles from "../styles/styles"
import colors from "../styles/colors"
import ContentWrapper from "../components/ContentWrapper"
import Section from "../components/Section"
import SectionTop from "../components/SectionTop"
import Text from '../components/Text'
import SubHeader from "../components/SubHeader"
import { VideoPitch } from "../components/VideoPitch"
import QuoteSection from "../components/QuoteSection"
import ActionSection from "../components/ActionSection"
import DetailedInfoSection from "../components/DetailedInfoSection"
import FeatureGrid from "../components/FeatureGrid"
import TryItOut from "../components/TryItOut"
import Header from "../components/Header"

class WebVisualizer extends Component {
  render() {
    const s = new LocalizedStrings(translation)

    return (
      <>
        <CustomHelmet seo={s.seo} />
        <Navbar light={false} />
        <Section backgroundColor={colors.white} style={{ marginTop: "3rem" }}
          light={true}>
          <ContentWrapper maxWidth={null}>
            <SectionTop style={{ marginBottom: "2rem" }} dark h1 header={s.landing.productName}>
              {s.landing.shortPitch}
            </SectionTop>
          </ContentWrapper>
        </Section>
        {/* <VideoPitch
          title={s.landing.productName}
          description={s.landing.shortPitch}
          videoUrl={`https://www.youtube.com/embed/WK_XrfWbkc8?rel=0`}
          videoAlt={s.landing.videoAlt}
          style={{ marginTop: "3rem" }}
          light={true}
        /> */}
        <DetailedInfoSection
          title={s.detailedInfo.title}
          subTitle={s.detailedInfo.subTitle}
          description={s.detailedInfo.description}
          light={false}
        />
        <WebVisualizerDemo
          title={s.demo.title}
          demos={s.demo.demos}
          light
        />
        {/*
        <FeatureGrid
          title={s.featureSection.title}
          light={true}
          features={s.featureSection.features}
        />
        <TryItOut light={false} />
        <ActionSection
          title={s.takeAction.title}
          description={s.takeAction.description}
          btnText={s.takeAction.btnText}
          link={"/contact/#contact-form"}
          dark={false}
        /> */}
        <Footer />
      </>
    )
  }
}

const CustomSection = styled(Section)`
  padding: 6rem 0 6rem 0;
  @media (max-width: ${styles.breakpoints.lg + "px"}) {
    padding-top: 4rem;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media (max-width: ${styles.breakpoints.lg + "px"}) {
    flex-direction: column;
  }
`

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  max-width: 50%;
  @media (max-width: ${styles.breakpoints.lg + "px"}) {
    max-width: unset;
  }
`
// const HalfWidth = styled.div`
//   max-width: 50%;
//   @media (max-width: ${styles.breakpoints.lg + "px"}) {
//     max-width: unset;
//   }
// `

function DemoDisplayer({ demo }) {
  const [selectedVersion, setSelectedVersion] = useState(Object.keys(demo.models)[0]);

  return <>
    <SideContainer>
      <SubHeader style={{ textAlign: "left", marginLeft: 0 }} dark>{demo.title}</SubHeader>
      <Text dark>{demo.description}</Text>
      {Object.keys(demo.models).length > 1 && (<select value={selectedVersion} onChange={(evt) => setSelectedVersion(evt.target.value)}>
        {Object.keys(demo.models).map(model => (<option value={model}>{model}</option>))}
      </select>)}
    </SideContainer>
    <SideContainer>
      <model-viewer src={demo.models[selectedVersion]} ar-placement="wall" ar ar-modes="scene-viewer quick-look webxr" camera-controls alt="A 3D model of some wall art" ar-scale="fixed" style={{ minHeight: "400px" }}></model-viewer>
    </SideContainer>
  </>
}

function WebVisualizerDemo(props) {

  const { light, title, demos } = props;
  return <CustomSection backgroundColor={light ? colors.white : colors.lightgrey}>
    <ContentWrapper maxWidth={null}>
      <Container>

        <Header dark
          styles={{
            color: colors.dark,

          }}
          text={title} />
        <Container>
          {demos.map(demo => (<DemoDisplayer demo={demo} key={demo.title} />))}
        </Container>
      </Container>
    </ContentWrapper>
  </CustomSection>

}
export default WebVisualizer
