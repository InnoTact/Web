import React from "react"
import styled from "styled-components"
import Section from "../components/Section"
import ContentWrapper from "../components/ContentWrapper"
import ImageContentBlob from "../components/ImageContentBlob"
import colors from "../styles/colors"
import { FaFire, FaExpandArrowsAlt, FaUsers } from "react-icons/fa"
import styles from "../styles/styles"
import Img from "gatsby-image"
import LocalizedStrings from "react-localization"
import translation from "../translations/team-traits"

const BlobContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 5rem;

  @media (max-width: ${styles.breakpoints.md + "px"}) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`

export default function TeamTraitsSections({ data }) {
  const strings = new LocalizedStrings(translation)

  return (
    <Section backgroundColor={colors.lightgrey}>
      <ContentWrapper maxWidth={null}>
        <div style={{ boxShadow: colors.normalBoxShadow }}>
          <Img
            alt="Team photo of InnoTact"
            fluid={data.TeamImage.childImageSharp.fluid}
          />
        </div>
        <BlobContainer>
          <ImageContentBlob
            heading={strings.energy.title}
            text={strings.energy.description}
          >
            <FaFire style={styles.icon} />
          </ImageContentBlob>
          <ImageContentBlob
            heading={strings.flexibility.title}
            text={strings.flexibility.description}
          >
            <FaExpandArrowsAlt style={styles.icon} />
          </ImageContentBlob>
          <ImageContentBlob
            heading={strings.team.title}
            text={strings.team.description}
          >
            <FaUsers style={styles.icon} />
          </ImageContentBlob>
        </BlobContainer>
      </ContentWrapper>
    </Section>
  )
}
