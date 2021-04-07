import React from "react"
import Section from "./Section"
import ContentWrapper from "./ContentWrapper"
import colors from "../styles/colors"
import styled from "styled-components"
import Header from "./Header"
import SubHeader from "./SubHeader"
import Text from "./Text"
import styles from "../styles/styles"
import { AppContext } from "./RootWrapper"
import Video from "./Video"

export default function DetailedInfoSection({
  title,
  subTitle,
  description,
  imgSrc,
  light,
  ...props
}) {
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
    max-width: 50%;
    margin: 0;
    @media (max-width: ${styles.breakpoints.lg + "px"}) {
      max-width: unset;
    }
  `
  const VideoContainer = styled(SideContainer)`
    width: 100%;
    text-align: center;
    @media (max-width: ${styles.breakpoints.lg + "px"}) {
      padding-top: 1rem;
      width: 100%;
      margin-left: 0;
    }
    @media (max-width: ${styles.breakpoints.md + "px"}) {
      width: 100vw;
      margin-left: calc(-10vw/2);
    }
  `
  const Image = styled.img`
    width: 100%;
    margin: 0 auto;
  `
  const DownloadAppContainer = styled.div``
  const halfInnerMargin = 20

  return (
    <CustomSection
      backgroundColor={light ? colors.white : colors.lightgrey}
      {...props}
    >
      <AppContext.Consumer>
        {value => {
          let lessThanLG = false 
          if (typeof window !== 'undefined' && window.innerWidth) {
            lessThanLG = window.innerWidth <= styles.breakpoints.lg
          }
          let innerMargin = lessThanLG ? 0 : halfInnerMargin
          return (
            <ContentWrapper>
              <Container>
                <SideContainer
                  style={{
                    paddingRight: innerMargin
                  }}
                >
                  <Header
                    dark
                    styles={{
                      color: colors.dark,
                      textAlign: "left",
                      marginLeft: 0,
                    }}
                    text={title}
                  />
                  <SubHeader style={{ textAlign: "left" }} dark>
                    {subTitle}
                  </SubHeader>
                  <Text dark>{description}</Text>
                  <DownloadAppContainer></DownloadAppContainer>
                </SideContainer>
                <VideoContainer
                  style={{
                    paddingLeft: innerMargin
                  }}
                >
                  <Video style={{ width: '100%', height: 435 }} videoSrcURL={"https://www.youtube.com/embed/niRzkU6_Tpg?start=40&rel=0"} />
                  {/* <Image src={imgSrc} /> */}
                </VideoContainer>
              </Container>
            </ContentWrapper>
          )
        }}
      </AppContext.Consumer>
    </CustomSection>
  )
}
