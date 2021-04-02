import React from "react"
import colors from "../styles/colors"
import Capability from "./Capability"
import CenterContainer from "./CenterContainer"
import ContentWrapper from "./ContentWrapper"
import Section from "./Section"
import SectionTop from "./SectionTop"
import BackgroundImage from "../components/BackgroundImage"

export const Products = ({ imageData }) => {
  return (
    <Section backgroundColor={colors.white}>
      <ContentWrapper>
        <SectionTop dark header="Our Products">
          Förklara övergripande om våra produkter. Idé: att vi licensierar
          state-of-the-art AR lösningar men också tar nya beställningar.
        </SectionTop>
      </ContentWrapper>
      <Capability
        textLeft
        header={"Wallpaper Visualizer"}
        text={
          "Allow your customers to visualise your wallpapers onto their walls in their own homes. Ensuring the perfect fit between wallpaper and interior design will reduce the customer uncertainty. By doing so you will increase your sales while making your customers happier. It’s a win-win!"
        }
        buttonText={"Read More"}
        destination={"/wallpaper-visualizer"}
      >
        <BackgroundImage
          alt="Augmented Reality"
          fluid={imageData.WallpaperVisualizer.childImageSharp.fluid}
          fit="contain"
          height="100%"
          style={{ zIndex: 1 }}
        />
      </Capability>
      <Capability
        header={"Wall-art Visualizer"}
        text={
          "You customers will not only be able to find the perfect wall-art for their home but also what size and frame would fit best on their walls. Easily have your customers try out your art pieces in their home to help them find a pice that would make their home a more beautiful place."
        }
        buttonText={"Read More"}
      >
        <BackgroundImage
          alt="Augmented Reality"
          fluid={imageData.WallpaperVisualizer.childImageSharp.fluid}
          fit="contain"
          height="100%"
          style={{ zIndex: 1 }}
        />
      </Capability>
      <Capability
        textLeft
        header={"The Furniture Visualizer"}
        text={
          "Are you selling products that are placed on your customers floors? The furniture visualiser helps your customers visualize everything from beds and sofas to flowers and BBQs. Your customers can place any of your products in their home to find the perfect color and size.   "
        }
        buttonText={"Read More"}
      >
        <BackgroundImage
          alt="Augmented Reality"
          fluid={imageData.WallpaperVisualizer.childImageSharp.fluid}
          fit="contain"
          height="100%"
          style={{ zIndex: 1 }}
        />
      </Capability>
    </Section>
  )
}
