import React from "react"
import SectionTop from "./SectionTop"
import Section from "./Section"
import ContentWrapper from "./ContentWrapper"
import colors from "../styles/colors"
import styled from "styled-components"
import { FaFire } from "react-icons/fa"
import styles from "../styles/styles"
import ImageContentBlob from "./ImageContentBlob"

export default function IconInfoGrid({ title, iconCells, light }) {
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
          {iconCells.map(cell => {
            return (
              <ImageContentBlob
                text={cell.title}
                textStyle={{ fontSize: '1.3rem' }}
              >
                <div style={{ marginBottom: '-1.5rem' }}>
                <FaFire style={styles.icon} />
                </div>
              </ImageContentBlob>
            )
          })}
        </SolutionsContainer>
      </ContentWrapper>
    </Section>
  )
}
