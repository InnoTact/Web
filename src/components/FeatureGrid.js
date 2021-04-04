import React from "react"
import SectionTop from "./SectionTop"
import Section from "./Section"
import ContentWrapper from "./ContentWrapper"
import colors from "../styles/colors"
import styled from "styled-components"
import Text from "./Text"
import ContentBlobWrapper from "./ContentBlobWrapper"

export default function FeatureGrid({ features, title, light, ...props }) {
  const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  `
  const innerSpacing = 8

  class Feature {
      constructor(title, description) {
        this.title = title
        this.description = description
      }
  }
  // const features = [
  //     new Feature("Measure tool", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
  //     new Feature("Advanced menu", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
  //     new Feature("Website integration", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
  //     new Feature("Custom fit murals", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
  //     new Feature("Rich user statistics", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
  //     new Feature("Custom branded app", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
  //     new Feature("Buy wallpapers in-app", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
  //     new Feature("Multi-language support", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
  //     new Feature("Push notifications", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
  // ]

  return (
    <Section backgroundColor={light ? colors.white : colors.lightgrey} {...props}>
      <ContentWrapper>
        <SectionTop dark header={title} />
        <Container>a
          {features.map(f => {
            return (
                <ContentBlobWrapper style={{ minWidth: '30%', paddingTop: '0', justifyContent: 'space-around' }} width={300}>
                    <Text style={{ fontSize: '1.3rem', width:'100%', textAlign: 'left', marginBottom: 0, paddingTop: innerSpacing }} dark>{f.title}</Text>
                    <Text small style={{ fontSize: '0.9rem', textAlign: 'left', marginBottom: '0', paddingTop: innerSpacing }} dark>{f.description}</Text>
                </ContentBlobWrapper>
            )
          })}
        </Container>
      </ContentWrapper>
    </Section>
  )
}

