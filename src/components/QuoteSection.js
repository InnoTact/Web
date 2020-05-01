import React from "react"
import ContentWrapper from "./ContentWrapper"
import styled from "styled-components"
import SubHeading from "./SubHeading"
import Anchor from "./Anchor"
import Section from "./Section"
import styles from "../styles/styles"
import colors from "../styles/colors"

export default function QuoteSection() {
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
            "I do think that a significant portion of the population of
            developed countries, and eventually all countries, will have AR
            experiences every day, almost like eating three meals a day, it will
            become that much a part of you."
          </Quote>
          <QuoteName
            target="_blank"
            href="https://nordic.businessinsider.com/apple-ceo-tim-cook-explains-augmented-reality-2016-10?r=US&IR=T"
            center
            dark
          >
            Tim Cook CEO Apple
          </QuoteName>
        </QuoteContainer>
      </ContentWrapper>
    </QuoteSection>
  )
}
