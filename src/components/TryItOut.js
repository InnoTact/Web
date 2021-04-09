import React from "react"
import SectionTop from "./../components/SectionTop"
import ContentWrapper from "./../components/ContentWrapper"
import Section from "./../components/Section"
import CenterContainer from "./../components/CenterContainer"
import colors from "../styles/colors"
import Button from "../components/Button"
import { Link } from "gatsby"
import styled from "styled-components"
import Text from "./Text"
import Anchor from "./Anchor"
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
            Apple's testing environment. This version uses some generic posters.
            Simply press{" "}
          </DescText>
          <AnchorPrimary
            target={"_blank"}
            dark
            rel="noopener noreferrer"
            href={`https://apps.apple.com/us/app/wonderwall-ar-by-boråstapeter/id1478853508`}
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
