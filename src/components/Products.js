import React from "react"
import colors from "../styles/colors"
import Capability from "./Capability"
import ContentWrapper from "./ContentWrapper"
import Section from "./Section"
import SectionTop from "./SectionTop"
import BackgroundImage from "../components/BackgroundImage"
import LocalizedStrings from "react-localization"
import translation from "../translations/products"
import { useStaticQuery, graphql } from "gatsby"

export const Products = ({ light }) => {
  const data = useStaticQuery(graphql`
    query {
      WallArtVisualizer: file(relativePath: { eq: "wallart-visualizer.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      WallpaperVisualizer: file(relativePath: { eq: "wallpaper-visualizer.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const s = new LocalizedStrings(translation)
  const products = [
    {
      destination: "/wallpaper-visualizer",
      imgAlt: "Visualize wallpapers in augmented reality with your phone",
      img: data.WallpaperVisualizer.childImageSharp.fluid,
      isLeft: false,
      ...s.wallpaper,
    },
    {
      destination: "/wall-art-visualizer",
      imgAlt: "Visualize art works and posters with your phone",
      img: data.WallArtVisualizer.childImageSharp.fluid,
      isLeft: true,
      ...s.art,
    },
    // {
    //   destination: "/contact",
    //   imgAlt: "Augmented Reality",
    //   img: data.WallpaperVisualizer.childImageSharp.fluid,
    //   isLeft: false,
    //   ...s.furniture,
    // },
  ]

  return (
    <Section style={{ paddingBottom: 0 }} backgroundColor={light ? colors.white : colors.lightgrey}>
      <ContentWrapper style={{ paddingBottom: '2rem' }}>
        <SectionTop dark header={s.title}>
          {s.description}
        </SectionTop>
      </ContentWrapper>
      {products.map(p => {
        return (
          <Capability
            textLeft={p.isLeft}
            header={p.name}
            text={p.description}
            buttonText={p.btnText}
            destination={p.destination}
          >
            <BackgroundImage
              alt={p.imgAlt}
              title={p.title}
              fluid={p.img}
              height="100%"
              style={{ zIndex: 1 }}
            />
          </Capability>
        )
      })}
    </Section>
  )
}
