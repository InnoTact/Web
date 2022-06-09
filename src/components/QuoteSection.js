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

export default function QuoteSection({ title, quote, saidBy, url, light, ...props }) {
  const QuoteContainer = styled.div`
    padding: 5rem 0 5rem 0;

    @media (max-width: ${styles.breakpoints.sm + "px"}) {
      padding: 2rem 0 3rem 0;
    }
  `

  const Quote = styled.p`
    text-align: center;
    line-height: 2.2;
    font-style: italic;
    margin: 2rem 0;
    font-size: 1.8rem;
    font-weight: bold;

    @media (max-width: ${styles.breakpoints.sm + "px"}) {
      font-size: 1.1rem;
      line-height: 1.7;
    }
  `

  const QuotedNameNoAnchor = styled.p`
    text-align: center;
    text-transform: uppercase;
    font-size: 1rem;
    margin-top: 1rem;
    display: block;
    @media (max-width: ${styles.breakpoints.sm + "px"}) {
      font-size: 0.9rem;
    }
  `

  const QuoteName = styled(Anchor)`
    text-align: center;
    text-transform: uppercase;
    font-size: 1rem;
    margin-top: 1rem;
    display: block;
    @media (max-width: ${styles.breakpoints.sm + "px"}) {
      font-size: 0.9rem;
    }
  `

  let quotedBy
  if (url) {
    quotedBy = <QuoteName
      target="_blank"
      href={url}
      style={{ 'pointerEvents': url ? 'unset' : 'none' }}
      center
      dark
    >
      {saidBy}
    </QuoteName>
  } else {
    quotedBy = <QuotedNameNoAnchor>{saidBy}</QuotedNameNoAnchor>
  }

  return (
    <Section
      style={{ paddingBottom: 0, paddingTop: 0 }}
      backgroundColor={light ? colors.white : colors.lightgrey}
      {...props}
    >
      <ContentWrapper>
        <QuoteContainer>
          {title && <Header style={{ marginBottom: 0, display: 'block' }} dark text={title} />}
          <Quote dark>
            {"\"" + quote + "\""}
          </Quote>
          {quotedBy}
        </QuoteContainer>
      </ContentWrapper>
    </Section>
  )
}
