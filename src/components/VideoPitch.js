import React from "react"
import colors from "../styles/colors"
import ContentWrapper from "./ContentWrapper"
import Section from "./Section"
import SectionTop from "./SectionTop"
import Video from "./Video"

export const VideoPitch = () => {
  return (
    <Section backgroundColor={colors.white}>
      <ContentWrapper>
        <SectionTop style={{ marginBottom: '2rem' }} dark header="Visualize Wallpapers Instantly">
          En stark övergripande pitch om produkten. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </SectionTop>
        <Video
          videoSrcURL={`https://www.youtube.com/embed/wG-pAblEw5I`}
          videoTitle="Wallpaper Visualizer using Augmented Reality"
        />
        </ContentWrapper>
    </Section>
  )
}
