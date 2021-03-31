import React from "react"
import ContentWrapper from "./ContentWrapper"
import styled from "styled-components"
import SubHeading from "./SubHeading"
import Anchor from "./Anchor"
import Section from "./Section"
import styles from "../styles/styles"
import colors from "../styles/colors"

export default function QuoteSection({ quote, saidBy, url }) {
  const QuoteSection = styled(Section)`
    @media (max-width: ${styles.breakpoints.md + "px"}) {
      display: none;
    }
  `

  const QuoteContainer = styled.div`
    padding: 4rem 0 5rem 0;
  `

  const Quote = styled(SubHeading)`
    text-align: center;
    line-height: 2.2;
    font-style: italic;
  `

  const QuoteName = styled(Anchor)`
    text-align: center;
    text-transform: uppercase;
    font-size: 1rem;
    margin-top: 1rem;
    display: block;
  `

  return (
    <QuoteSection
      style={{ paddingBottom: 0, paddingTop: 0 }}
      backgroundColor={colors.lightgrey}
    >
      <ContentWrapper>
        <QuoteContainer>
          <Quote dark>
            {"\"" + quote + "\""}
          </Quote>
          <QuoteName
            target="_blank"
            href={url}
            center
            dark
          >
            {saidBy}
          </QuoteName>
        </QuoteContainer>
      </ContentWrapper>
    </QuoteSection>
  )
}
