import React from "react"
import ContentWrapper from "./ContentWrapper"
import Section from "./Section"
import TextCard from "./TextCard"
import ClickMe from "./ClickMe"
import styled from "styled-components"
import colors from "../styles/colors"
import SectionTop from "./SectionTop"
import LocalizedStrings from "react-localization"
import translation from "../translations/methodology" 

export default function MethodologySection() {
  const StepsWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  const strings = new LocalizedStrings(translation)

  return (
    <Section backgroundColor={colors.lightgrey}>
      <ContentWrapper>
        <SectionTop dark header={strings.title}>
          {strings.subTitle}
        </SectionTop>
        <StepsWrapper>
          <TextCard
            header={strings.step1.title}
            text={[
              `${strings.step1.press} `,
              <ClickMe italic url="/contact/">
                {strings.step1.here}
              </ClickMe>,
              ` ${strings.step1.description}`,
            ]}
            number={"1"}
            dark
          />
          <TextCard
            header={strings.step2.title}
            text={strings.step2.description}
            number={"2"}
            dark
          />
          <TextCard
            header={strings.step3.title}
            text={strings.step3.description}
            number={"3"}
            dark
          />
          <TextCard
            header={strings.step4.title}
            text={strings.step4.description}
            number={"4"}
            dark
          />
          <TextCard
            header={strings.step5.title}
            text={strings.step5.description}
            number={"5"}
            dark
          />
          <TextCard
            header={strings.step6.title}
            text={strings.step6.description}
            number={"6"}
            dark
          />
        </StepsWrapper>
      </ContentWrapper>
    </Section>
  )
}
