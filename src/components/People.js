import React from "react"
import styled from "styled-components"
import ContentWrapper from "./ContentWrapper"
import SectionTop from "./SectionTop"
import PeopleCard from "./PeopleCard"
import Section from "./Section"
import colors from "../styles/colors"
import LocalizedStrings from "react-localization"
import translation from "../translations/people"

const PeopleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`

export default ({ peopleImagesData }) => {
  const strings = new LocalizedStrings(translation)

  return (
    <Section backgroundColor={colors.white}>
      <ContentWrapper maxWidth={null}>
        <SectionTop dark header={strings.title}>
          {strings.subTitle}
        </SectionTop>
        <PeopleContainer>
          <PeopleCard
            name="Joel Rudsberg"
            image={
              peopleImagesData
                ? peopleImagesData.JoelImage.childImageSharp.fixed
                : ""
            }
            position={strings.joel.position}
            town={strings.joel.city}
            text={strings.joel.description}
            email="joel@innotactsoftware.com"
            linkedin="https://www.linkedin.com/in/joel-rudsberg/"
          />
          <PeopleCard
            name="Anton Claesson"
            image={
              peopleImagesData
                ? peopleImagesData.AntonImage.childImageSharp.fixed
                : ""
            }
            position={strings.anton.position}
            town={strings.anton.city}
            text={strings.anton.description}
            email="anton@innotactsoftware.com"
            linkedin="https://www.linkedin.com/in/anton-claesson/"
          />
          <PeopleCard
            name="Carl Claesson"
            image={
              peopleImagesData
                ? peopleImagesData.CarlImage.childImageSharp.fixed
                : ""
            }
            position={strings.carl.position}
            town={strings.carl.city}
            text={strings.carl.description}
            email="carl@innotactsoftware.com"
            linkedin="https://www.linkedin.com/in/carl-claesson-29145a16a/"
          />
          <PeopleCard
            name="Melker Veltman"
            image={
              peopleImagesData
                ? peopleImagesData.MelkerImage.childImageSharp.fixed
                : ""
            }
            position={strings.melker.position}
            town={strings.melker.city}
            text={strings.melker.description}
            email="melker@innotactsoftware.com"
            linkedin="https://www.linkedin.com/in/melker-veltman/"
          />
          <PeopleCard
            name="Lorenzo Björck"
            image={
              peopleImagesData
                ? peopleImagesData.LorenzoImage.childImageSharp.fixed
                : ""
            }
            position={strings.lorenzo.position}
            town={strings.lorenzo.city}
            text={strings.lorenzo.description}
            email="lorenzo@innotactsoftware.com"
            linkedin="https://www.linkedin.com/in/lorenzo-björck/"
          />
          <PeopleCard
            name="Jacob Cahn"
            image={
              peopleImagesData
                ? peopleImagesData.JacobImage.childImageSharp.fixed
                : ""
            }
            position={strings.jacob.position}
            town={strings.jacob.city}
            text={strings.jacob.description}
            email="jacob@innotactsoftware.com"
            linkedin="https://www.linkedin.com/in/jacobcahn/"
          />
        </PeopleContainer>
      </ContentWrapper>
    </Section>
  )
}
