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

  return (
    <Section backgroundColor={light ? colors.white : colors.lightgrey} {...props}>
      <ContentWrapper>
        <SectionTop dark header={title} />
        <Container>
          {features.map(f => {
            return (
                <ContentBlobWrapper style={{ minWidth: '30%', paddingTop: '0' }} width={300}>
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

