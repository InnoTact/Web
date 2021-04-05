import React from "react"
import SectionTop from "./SectionTop"
import Section from "./Section"
import ContentWrapper from "./ContentWrapper"
import Text from "./Text"
import colors from "../styles/colors"
import styled from "styled-components"
import { FaFire } from "react-icons/fa"
import styles from "../styles/styles"
import ImageContentBlob from "./ImageContentBlob"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ContentBlobWrapper from "./ContentBlobWrapper"
import SubHeading from "./SubHeading"

const Heading = styled(SubHeading)`
  white-space: nowrap;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    white-space: unset;
  }
`

export default function IconInfoGrid({ title, iconCells, light }) {
  const SolutionsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  `
  const BadgeContainer = styled.div`
    padding-top: 4rem;
    text-align: center;
  `
  const BadgeStyle = {
    width: 140,
    height: 40,
    margin: 0,
    objectFit: "contain",
    display: "inline-block",
  }
  const data = useStaticQuery(graphql`
    query {
      AppStoreBadge: file(relativePath: { eq: "appstore.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GooglePlayStoreBadge: file(relativePath: { eq: "googleplaystore.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  var lang = navigator.language || navigator.userLanguage
  const sweUser = lang == "sv"

  return (
    <Section backgroundColor={light ? colors.white : colors.lightgrey}>
      <ContentWrapper>
        <SectionTop dark header={title} />
        <SolutionsContainer>
          {iconCells.map(cell => {
            return (
              <ContentBlobWrapper style={{ minWidth: '30%' }}>
                <Heading dark style={{ fontSize: "2.9rem", marginBottom: 0 }}>{cell.number}</Heading>
                <Text dark>{cell.text}</Text>
              </ContentBlobWrapper>
            )
          })}
        </SolutionsContainer>
        <BadgeContainer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              sweUser
                ? "https://apps.apple.com/se/app/wonderwall-ar-by-boråstapeter/id1478853508"
                : "https://apps.apple.com/us/app/wonderwall-ar-by-boråstapeter/id1478853508"
            }
            style={{ marginRight: "1.2rem" }}
          >
            <Img
              style={{ ...BadgeStyle }}
              imgStyle={BadgeStyle}
              fluid={data.AppStoreBadge.childImageSharp.fluid}
              alt={"Try AR Wallpaper Visualizer on AppStore (iOS)"}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              sweUser
                ? "https://play.google.com/store/apps/details?id=com.innotactsoftware.wonderwallar.borastapeter&hl=sv&gl=US"
                : "https://play.google.com/store/apps/details?id=com.innotactsoftware.wonderwallar.borastapeter&hl=en_US&gl=US"
            }
            style={{ marginLeft: "1.2rem" }}
          >
            <Img
              style={{ marginLeft: "1.5rem", ...BadgeStyle }}
              imgStyle={BadgeStyle}
              fluid={data.GooglePlayStoreBadge.childImageSharp.fluid}
              alt={"Try AR Wallpaper Visualizer on Google Play Store (Android)"}
            />
          </a>
        </BadgeContainer>
      </ContentWrapper>
    </Section>
  )
}
