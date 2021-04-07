import React from "react"
import SectionTop from "./SectionTop"
import Section from "./Section"
import ContentWrapper from "./ContentWrapper"
import colors from "../styles/colors"
import styled from "styled-components"
import ContentBlob from "./ContentBlob"

export default function InfoGrid({ title, infoCells, light }) {
  const SolutionsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  `

  return (
    <Section backgroundColor={light ? colors.white : colors.lightgrey}>
      <ContentWrapper>
        <SectionTop dark header={title} />
        <SolutionsContainer>
          {infoCells.map(cell => {
            return (
              <ContentBlob
                left
                width={360}
                small
                heading={cell.title}
                text={cell.text}
              />
            )
          })}
        </SolutionsContainer>
      </ContentWrapper>
    </Section>
  )
}

