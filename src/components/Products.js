import React from "react"
import colors from "../styles/colors"
import Capability from "./Capability"
import ContentWrapper from "./ContentWrapper"
import Section from "./Section"
import SectionTop from "./SectionTop"
import BackgroundImage from "../components/BackgroundImage"
import LocalizedStrings from "react-localization"
import translation from "../translations/products"

export const Products = ({ imageData }) => {
  const s = new LocalizedStrings(translation)
  const products = [
    {
      destination: "/wallpaper-visualizer",
      imgAlt: "Augmented Reality",
      img: imageData.WallpaperVisualizer.childImageSharp.fluid,
      isLeft: true,
      ...s.wallpaper,
    },
    {
      destination: "/contact",
      imgAlt: "Augmented Reality",
      img: imageData.WallpaperVisualizer.childImageSharp.fluid,
      isLeft: false,
      ...s.art,
    },
    {
      destination: "/contact",
      imgAlt: "Augmented Reality",
      img: imageData.WallpaperVisualizer.childImageSharp.fluid,
      isLeft: true,
      ...s.furniture,
    },
  ]

  return (
    <Section style={{ paddingBottom: 0 }} backgroundColor={colors.white}>
      <ContentWrapper>
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
              fluid={p.img}
              fit="contain"
              height="100%"
              style={{ zIndex: 1 }}
            />
          </Capability>
        )
      })}
    </Section>
  )
}
