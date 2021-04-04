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

export default function DetailedInfoSection({
  title,
  subTitle,
  description,
  imgSrc,
  light,
  ...props
}) {
  const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    @media (max-width: ${styles.breakpoints.md + "px"}) {
      flex-direction: column;
    }
  `
  const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 50%;
    margin: 0;
    @media (max-width: ${styles.breakpoints.md + "px"}) {
      max-width: unset;
    }
  `
  const Image = styled.img`
    width: 100%;
    margin: 0 auto;
  `
  const DownloadAppContainer = styled.div``
  const halfInnerMargin = 20

  return (
    <Section
      style={{ padding: "6rem 0 6rem 0" }}
      backgroundColor={light ? colors.white : colors.lightgrey}
      {...props}
    >
      <AppContext.Consumer>
        {value => {
          return (<ContentWrapper>
            <Container>
              <SideContainer
                style={{
                  paddingRight:
                    value.isTablet || value.isMobile ? 0 : halfInnerMargin,
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
              <SideContainer
                style={{
                  textAlign: "center",
                  paddingLeft:
                    value.isTablet || value.isMobile ? 0 : halfInnerMargin,
                }}
              >
                <Image src={imgSrc} />
              </SideContainer>
            </Container>
          </ContentWrapper>)
        }}
      </AppContext.Consumer>
    </Section>
  )
}
