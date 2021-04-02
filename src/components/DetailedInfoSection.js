import React from "react"
import Section from "./Section"
import ContentWrapper from "./ContentWrapper"
import colors from "../styles/colors"
import styled from "styled-components"
import Header from "./Header"
import SubHeader from "./SubHeader"
import Text from "./Text"
import styles from "../styles/styles"

export default function DetailedInfoSection({ light, ...props }) {
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
  `
  const Image = styled.img`
    width: 100%;
    margin: 0;
  `
  const DownloadAppContainer = styled.div`
  
  `
  const halfInnerMargin = 20

  return (
    <Section
        style={{ padding: '6rem 0 6rem 0' }}
      backgroundColor={light ? colors.white : colors.lightgrey}
      {...props}
    >
      <ContentWrapper>
        <Container>
          <SideContainer style={{ paddingRight: halfInnerMargin }}>
            <Header dark styles={{ color: colors.dark, textAlign: 'left', marginLeft: 0 }} text="Everything in one place" />
            <SubHeader style={{ textAlign: 'left' }} dark>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </SubHeader>
            <Text dark>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Text>
            <DownloadAppContainer>
                
            </DownloadAppContainer>
          </SideContainer>
          <SideContainer style={{ textAlign: 'center', paddingLeft: halfInnerMargin }}>
            <Image
              src={
                //"https://www.borastapeter.com/sites/borastapeter.com/files/styles/mega_teaser_lg_2x/public/content/paragraphs/ar_screens_0.jpg?itok=UMZbGThw&timestamp=1583567401"
                "https://www.borastapeter.com/sites/borastapeter.com/files/styles/paragraph_image_l_2x/public/2001_bt_nl_app2_en.jpg?itok=T0Gp1mxI&timestamp=1583573101"
              }
            />
          </SideContainer>
        </Container>
      </ContentWrapper>
    </Section>
  )
}
