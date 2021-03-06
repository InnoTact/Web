import React from "react"
import colors from "../styles/colors"
import ContentWrapper from "./ContentWrapper"
import Section from "./Section"
import SectionTop from "./SectionTop"
import Video from "./Video"

export const VideoPitch = ({
  title,
  description,
  videoUrl,
  videoAlt,
  ...props
}) => {
  return (
    <Section backgroundColor={colors.white} {...props}>
      <ContentWrapper>
        <SectionTop style={{ marginBottom: "2rem" }} dark h1 header={title}>
          {description}
        </SectionTop>
      </ContentWrapper>
      <Video videoSrcURL={videoUrl} videoTitle={videoAlt} />
    </Section>
  )
}
