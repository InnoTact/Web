import React from "react"
import SectionTop from "./SectionTop"
import Section from "./Section"
import ContentWrapper from "./ContentWrapper"
import colors from "../styles/colors"
import styled from "styled-components"
import Text from "./Text"
import ContentBlobWrapper from "./ContentBlobWrapper"
import SubHeading from "./SubHeading"

export default function FeatureGrid({ features, title, light, ...props }) {
  const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  `
  const innerSpacing = 8

  return (
    <Section backgroundColor={light ? colors.white : colors.lightgrey} {...props}>
      <ContentWrapper maxWidth={null}>
        <SectionTop dark header={title} />
        <Container>
          {features.map(f => {
            return (
                <ContentBlobWrapper style={{ minWidth: '30%', paddingTop: '0' }} width={300}>
                  {/* <SubHeading dark small style={{ paddingTop: innerSpacing, textAlign: 'left', width: '100%' }}>
                    {f.title}
                  </SubHeading> */}
                    <Text as="h3" style={{ marginTop: '0.5rem', fontSize: '1.3rem', width:'100%', textAlign: 'left', marginBottom: 0, paddingTop: innerSpacing }} dark>{f.title}</Text>
                    <Text small style={{ fontSize: '0.9rem', textAlign: 'left', marginBottom: '0', paddingTop: innerSpacing }} dark>{f.description}</Text>
                </ContentBlobWrapper>
            )
          })}
        </Container>
      </ContentWrapper>
    </Section>
  )
}

