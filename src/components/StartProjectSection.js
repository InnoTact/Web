import React from "react"
import Section from "./Section"
import ContentWrapper from "./ContentWrapper"
import SectionTop from "./SectionTop"
import { FaCubes, FaCreativeCommonsShare } from "react-icons/fa"
import styled from "styled-components"
import colors from "../styles/colors"
import styles from "../styles/styles"
import ContentBlob from "./ContentBlob"
import LocalizedStrings from "react-localization"
import translation from "../translations/start-project-section"

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: ${styles.breakpoints.md + "px"}) {
    flex-direction: column;
    justify-content: space-around;
  }
`

const ContentBlobCustom = styled(ContentBlob)`
  min-height: 340px;
  max-width: 47%;

  @media (max-width: ${styles.breakpoints.lg + "px"}) {
    max-width: 45%;
  }

  @media (max-width: ${styles.breakpoints.md + "px"}) {
    max-width: unset;
  }
`

export default function StartProjectSection() {
  const strings = new LocalizedStrings(translation)

  return (
    <Section backgroundColor={colors.white}>
      <ContentWrapper>
        <SectionTop dark header={strings.title}>
          {strings.topSection}
        </SectionTop>
        <ServiceContainer>
          <ContentBlobCustom
            heading={strings.left.title}
            text={strings.left.text}
            buttonText={strings.left.button}
            buttonLink="/kontakt/"
          >
            <FaCubes style={styles.icon} />
          </ContentBlobCustom>
          <ContentBlobCustom
            heading={strings.right.title}
            text={strings.right.text}
            buttonText={strings.right.button}
            buttonLink="/lösningar/"
          >
            <FaCreativeCommonsShare style={styles.icon} />
          </ContentBlobCustom>
        </ServiceContainer>
      </ContentWrapper>
    </Section>
  )
}
