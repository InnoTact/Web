import React from "react"
import SectionTop from "./../components/SectionTop"
import ContentWrapper from "./../components/ContentWrapper"
import Section from "./../components/Section"
import colors from "../styles/colors"
import styled from "styled-components"
import Text from "./Text"
import AnchorPrimary from "./AnchorPrimary"

export default function TryItOut({ title, children, light, ...props }) {
  const DescText = styled(Text)`
    display: inline;
    text-align: center;
    color: ${colors.dark};
  `
  return (
    <Section
      backgroundColor={light ? colors.white : colors.lightgrey}
      {...props}
    >
      <ContentWrapper>
        <SectionTop dark header={"Want to try it out?"}>
        <div style={{ textAlign: "center" }}>
          <DescText center dark>
            We have made a beta-version available for testing using TestFlight,
            Apple's testing environment, that uses generic posters.
            Simply press{" "}
          </DescText>
          <AnchorPrimary
            target={"_blank"}
            dark
            rel="noopener noreferrer"
            href={`https://testflight.apple.com/join/zFpgNn86`}
          >
            this link
          </AnchorPrimary>
          <DescText center dark>
            {" "}
            and follow the instructions to try it on your iOS device.
          </DescText>
        </div>
        </SectionTop>
        
      </ContentWrapper>
    </Section>
  )
}
