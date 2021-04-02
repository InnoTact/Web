import React from "react"
import ContentWrapper from "./ContentWrapper"
import styled from "styled-components"
import SubHeading from "./SubHeading"
import Anchor from "./Anchor"
import Section from "./Section"
import colors from "../styles/colors"
import Text from "./Text"
import SectionTop from "./SectionTop"
import ContentBlobWrapper from "./ContentBlobWrapper"
import { FaStar } from "react-icons/fa"

export default function MultipleQuoteSection({
  title,
  quotes,
  light,
  ...props
}) {
  const ContentContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  `
  const StarContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  `
  let stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FaStar style={{
        fontSize: 18,
        color: "gold"
      }} />
    )
  }
  const innerSpacing = 8

  return (
    <Section
      backgroundColor={light ? colors.white : colors.lightgrey}
      {...props}
    >
      <ContentWrapper>
        <SectionTop dark header={title} />
        <ContentContainer>
          {quotes.map(q => {
            return (
              <ContentBlobWrapper style={{ paddingTop: '0.5rem', justifyContent: 'space-around', height: '130%' }} width={300}>
                <Text style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: 0, paddingTop: innerSpacing }} dark>{'"' + q.quote + '"'}</Text>
                <StarContainer style={{ paddingTop: innerSpacing }}>
                  {stars.map(star => star)}
                </StarContainer>
                <Text style={{ textAlign: 'center', marginBottom: '0', paddingTop: innerSpacing }} dark>{"— " + q.saidBy}</Text>
              </ContentBlobWrapper>
            )
          })}
        </ContentContainer>
      </ContentWrapper>
    </Section>
  )
}
