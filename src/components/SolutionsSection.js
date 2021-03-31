import React from "react"
import SectionTop from "../components/SectionTop"
import Section from "../components/Section"
import ContentWrapper from "../components/ContentWrapper"
import colors from "../styles/colors"
import styled from "styled-components"
import ContentBlob from "../components/ContentBlob"

export default function SolutionsSection({ title, blobCells }) {
  const SolutionsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  `

  return (
    <Section backgroundColor={colors.lightgrey}>
      <ContentWrapper>
        <SectionTop dark header={title} />
        <SolutionsContainer>
          {blobCells.map(cell => {
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

