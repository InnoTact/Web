import React from "react"
import Section from "./Section"
import Anchor from "./Anchor"
import Text from "./Text"
import styled from "styled-components"
import styles from "../styles/styles"
import colors from "../styles/colors"

export default function FactSection() {
  const FactContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 250px;

    @media (max-width: ${styles.breakpoints.sm + "px"}) {
      flex-direction: column;
      height: auto;
    }
  `

  const FactItem = styled.div`
    padding: 3rem;
    text-align: center;
    width: 33%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: ${styles.breakpoints.sm + "px"}) {
      width: 100%;
      height: auto;
    }
  `

  return (
    <Section
      style={{ paddingBottom: 0, paddingTop: 0 }}
      backgroundColor={colors.lightgrey}
    >
      <FactContainer>
        <FactItem style={{ backgroundColor: colors.lightgrey }}>
          <Text style={{ marginBottom: "0.7rem", textAlign: "center" }} dark>
            Augmented Reality revenue is expected to hit US$198 billion by 2025
          </Text>
          <Anchor
            small
            italic
            dark
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.statista.com/statistics/897587/world-augmented-reality-market-value/"
          >
            Statista
          </Anchor>
        </FactItem>
        <FactItem style={{ backgroundColor: colors.lightdarkerGrey }}>
          <Text style={{ marginBottom: "0.7rem", textAlign: "center" }} dark>
            60% to 70% of consumers see clear benefits in using AR and IoT
            devices in their daily life and at work
          </Text>
          <Anchor
            small
            italic
            dark
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.isaca.org/About-ISACA/Press-room/News-Releases/2016/Pages/2016-IT-RRB-News-Release-US.aspx"
          >
            Isaca
          </Anchor>
        </FactItem>
        <FactItem style={{ backgroundColor: colors.mediumGrey }}>
          <Text style={{ marginBottom: "0.7rem", textAlign: "center" }} dark>
            40% of people are willing to pay more for a product if they can
            experience it first through AR.
          </Text>
          <Anchor
            small
            italic
            dark
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.clickz.com/how-is-ar-revolutionizing-the-in-store-experience-for-retailers/112696/"
          >
            Retail Perceptions
          </Anchor>
        </FactItem>
      </FactContainer>
    </Section>
  )
}
