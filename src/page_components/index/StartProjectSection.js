import React from "react"
import Section from "../../components/Section"
import ContentWrapper from "../../components/ContentWrapper"
import SectionTop from "../../components/SectionTop"
import { FaCubes, FaCreativeCommonsShare } from "react-icons/fa"
import styled from "styled-components"
import colors from "../../styles/colors"
import styles from "../../styles/styles"
import ContentBlob from "../../components/ContentBlob"
import LocalizedStrings from "react-localization"

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
  const strings = new LocalizedStrings({
    en: {
      title: "Start a project",
      topSection:
        "Our team, which consists of motivated and driven developers, always strives to help you take your business to the next level. We work with close customer relationships to ensure that we meet all your needs.",
      left: {
        title: "Turn your idea into reality",
        text:
          "Do you already have an idea within Augmented Reality? Let's turn your idea into reality together.",
        button: "START A PROJECT",
      },
      right: {
        title: "Develop an idea together",
        text:
          "Not sure how Augmented Reality can be implemented in your business? Let’s evaluate your opportunities together.",
        button: "READ MORE",
      },
    },
    sv: {
      title: "Starta projekt",
      topSection:
        "Vårt team, som består av motiverade och drivna utvecklare, strävar alltid efter att hjälpa ditt företag till nästa nivå. Vi arbetar med nära kundrelationer för att garantera att vi uppyller alla dina behov.",
      left: {
        title: "Realisera din idé",
        text:
          "Har du redan en idé inom Augmented Reality? Har du en produkt du vill förverkliga? Låt oss verkställa den tillsammans.",
        button: "STARTA ETT PROJEKT",
      },
      right: {
        title: "Vi skapar en idé tillsammans",
        text:
          "Är du osäker på hur Augmented Reality kan implementeras i ditt företag? Låt oss utvärdera dina möjligheter tillsammans.",
        button: "LÄS MER",
      },
    },
  })

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
