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
              <ContentBlobWrapper style={{ paddingTop: '0.5rem' }} width={300}>
                <Text style={{ textAlign: 'center', fontStyle: 'italic' }} dark>{'"' + q.quote + '"'}</Text>
                <Text style={{ textAlign: 'center', marginTop: '-0.5rem' }} dark>{"— " + q.saidBy}</Text>
              </ContentBlobWrapper>
            )
          })}
        </ContentContainer>
      </ContentWrapper>
    </Section>
  )
}
