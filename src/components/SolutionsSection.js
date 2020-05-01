import React from "react"
import SectionTop from "../components/SectionTop"
import Section from "../components/Section"
import ContentWrapper from "../components/ContentWrapper"
import colors from "../styles/colors"
import styled from "styled-components"
import ContentBlob from "../components/ContentBlob"
import LocalizedStrings from "react-localization"
import translation from "../translations/ar-solutions"

export default function SolutionsSection() {
  const SolutionsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  `

  const strings = new LocalizedStrings(translation)

  return (
    <Section backgroundColor={colors.lightgrey}>
      <ContentWrapper>
        <SectionTop dark header={strings.title} />
        <SolutionsContainer>
          <ContentBlob
            left
            width={360}
            small
            heading={strings.teaching.title}
            text={strings.teaching.description}
          />
          <ContentBlob
            left
            width={360}
            small
            heading={strings.marketing.title}
            text={strings.marketing.description}
          />
          <ContentBlob
            left
            width={360}
            small
            heading={strings.modelling.title}
            text={strings.modelling.description}
          />
          <ContentBlob
            left
            width={360}
            small
            heading={strings.navigation.title}
            text={strings.navigation.description}
          />
          <ContentBlob
            left
            width={360}
            small
            heading={strings.AI.title}
            text={strings.AI.description}
          />
          <ContentBlob
            left
            width={360}
            small
            heading={strings.commerce.title}
            text={strings.commerce.description}
          />
        </SolutionsContainer>
      </ContentWrapper>
    </Section>
  )
}
