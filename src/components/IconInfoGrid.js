import React from "react"
import SectionTop from "./SectionTop"
import Section from "./Section"
import ContentWrapper from "./ContentWrapper"
import colors from "../styles/colors"
import styled from "styled-components"
import { FaFire } from "react-icons/fa"
import styles from "../styles/styles"
import ImageContentBlob from "./ImageContentBlob"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function IconInfoGrid({ title, iconCells, light }) {
  const SolutionsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  `
  const BadgeContainer = styled.div`
    padding-top: 2rem;
    text-align: center;
  `
  const BadgeStyle = {
    width: 220,
    height: 60,
    margin: 0,
    objectFit: "contain",
    display: "inline-block",
  }
  const data = useStaticQuery(graphql`
    query {
      AppStoreBadge: file(relativePath: { eq: "app-store-badge.png" }) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GooglePlayStoreBadge: file(
        relativePath: { eq: "google-play-badge.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Section backgroundColor={light ? colors.white : colors.lightgrey}>
      <ContentWrapper>
        <SectionTop dark header={title} />
        <SolutionsContainer>
          {iconCells.map(cell => {
            return (
              <ImageContentBlob
                text={cell.title}
                textStyle={{ fontSize: "1.3rem" }}
              >
                <div style={{ marginBottom: "-1.5rem" }}>
                  <FaFire style={styles.icon} />
                </div>
              </ImageContentBlob>
            )
          })}
        </SolutionsContainer>
        <BadgeContainer>
          <Img
            style={{ marginRight: '1.5rem',  ...BadgeStyle }}
            imgStyle={BadgeStyle}
            fluid={data.AppStoreBadge.childImageSharp.fluid}
            alt={"Try AR Wallpaper Visualizer on AppStore (iOS)"}
          />
          <Img
            style={{ marginLeft: '1.5rem', ...BadgeStyle }}
            imgStyle={BadgeStyle}
            fluid={data.GooglePlayStoreBadge.childImageSharp.fluid}
            alt={"Try AR Wallpaper Visualizer on Google Play Store (Android)"}
          />
        </BadgeContainer>
      </ContentWrapper>
    </Section>
  )
}
