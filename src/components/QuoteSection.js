import React from "react"
import ContentWrapper from "./ContentWrapper"
import styled from "styled-components"
import SubHeading from "./SubHeading"
import Anchor from "./Anchor"
import Section from "./Section"
import styles from "../styles/styles"
import colors from "../styles/colors"
import SectionTop from "./SectionTop"
import Header from "./Header"

export default function QuoteSection({ title, quote, saidBy, url, ...props }) {
  const QuoteSection = styled(Section)`
    
  `

  const QuoteContainer = styled.div`
    padding: 4rem 0 4rem 0;
  `

  const Quote = styled(SubHeading)`
    text-align: center;
    line-height: 2.2;
    font-style: italic;
    margin: 2rem 0;
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
      {...props}
    >
      <ContentWrapper>
        <QuoteContainer>
          {title && <Header style={{ marginBottom: 0, display: 'block' }} dark text={title} />}
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
