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
      <ContentWrapper>
        <SectionTop dark header={strings.title}>
          {strings.subTitle}
        </SectionTop>
        <PeopleContainer>
          <PeopleCard
            name="Niklas Gustafsson"
            image={
              peopleImagesData
                ? peopleImagesData.NiklasImage.childImageSharp.fixed
                : ""
            }
            position={strings.niklas.position}
            town={strings.niklas.city}
            text={strings.niklas.description}
            email="niklas@innotactsoftware.se"
            linkedin="https://www.linkedin.com/in/niklas-gustafsson-93025a12a/"
          />
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
            email="joel@innotactsoftware.se"
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
            email="anton@innotactsoftware.se"
            linkedin="https://www.linkedin.com/in/anton-claesson/"
          />
          <PeopleCard
            name="Casper Lindberg"
            image={
              peopleImagesData
                ? peopleImagesData.CasperImage.childImageSharp.fixed
                : ""
            }
            position={strings.casper.position}
            town={strings.casper.city}
            text={strings.casper.description}
            email="casper@innotactsoftware.se"
            linkedin="https://www.linkedin.com/in/casperlindberg1997/"
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
            email="carl@innotactsoftware.se"
            linkedin="https://www.linkedin.com/in/carl-claesson-29145a16a/"
          />
          <PeopleCard
            name="Fredrik Hernqvist"
            image={
              peopleImagesData
                ? peopleImagesData.FredrikImage.childImageSharp.fixed
                : ""
            }
            position={strings.fredrik.position}
            town={strings.fredrik.city}
            text={strings.fredrik.description}
            linkedin="https://www.linkedin.com/in/fredrik-hernqvist-529479104/"
          />
          <PeopleCard
            name="Oskar Grönqvist"
            image={
              peopleImagesData
                ? peopleImagesData.OskarImage.childImageSharp.fixed
                : ""
            }
            position={strings.oskar.position}
            town={strings.oskar.city}
            text={strings.oskar.description}
            linkedin="https://www.linkedin.com/in/oskar-gr%C3%B6nqvist-54a35b182/"
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
            linkedin="https://www.linkedin.com/in/melker-veltman/"
          />
        </PeopleContainer>
      </ContentWrapper>
    </Section>
  )
}
