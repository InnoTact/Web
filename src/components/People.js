import React from "react"
import styled from "styled-components"
import ContentWrapper from "./ContentWrapper"
import SectionTop from "./SectionTop"
import CenterContainer from "./CenterContainer"
import SubHeader from "./SubHeader"
import PeopleCard from "./PeopleCard"
import Section from "./Section"
import colors from "../styles/colors"

const PeopleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`

export default ({ peopleImagesData }) => {
  return (
    <Section backgroundColor={colors.white}>
      <ContentWrapper>
        <SectionTop
          dark
          header="Teamet"
        >
        Möt teamet som består av ett gäng nära vänner med flera års erfarenhet av att jobba tillsammans.
          </SectionTop>
        
        <PeopleContainer>
          <PeopleCard
            name="Niklas Gustafsson"
            image={
              peopleImagesData
                ? peopleImagesData.NiklasImage.childImageSharp.fixed
                : ""
            }
            position="Grundare &amp; VD "
            town="Göteborg, Sverige"
            text="Som bolagets VD ser Niklas till att vi når vårat mål om att bli det bästa AR-företaget i landet. Då han studerar industriell ekkonomi är han expert inom företagsstrategi och kundrelationer. Han ansvarar för att teamet alltid mår bra och presterar på toppen av sin förmåga. Vid frågor om företagets strategi och kunder är Niklas rätt person att fråga."
            email="niklas@innotactsoftware.se"
            linkedin="https://www.linkedin.com/in/niklas-gustafsson-93025a12a/"
          />
          <PeopleCard
            name="Joel Rudsberg"
            image={
                peopleImagesData
                  ? peopleImagesData.JoelImage.childImageSharp.fixed
                  : ""
              }            position="Grundare &amp; Utvecklare"
            town="Göteborg, Sverige"
            text="Som projektledare är Joel ofta i nära kontakt med våra kunder. Han ansvarar för att kunderna är nöjda gällande produkterna vi skapar, vilket han verkar lyckas med varje gång. Efter ha studerat Software Engineering i USA under ett år håller Joel nu till på IT-programmet på Chalmers. Vid frågor specifika projekt är Joel rätt person att fråga."
            email="joel@innotactsoftware.se"
            linkedin="https://www.linkedin.com/in/joel-rudsberg/"
          />
          <PeopleCard
            name="Anton Claesson"
            image={
                peopleImagesData
                  ? peopleImagesData.AntonImage.childImageSharp.fixed
                  : ""
              }            position="Grundare &amp; Utvecklare"
            town="Mölnlycke, Sverige"
            text={`Antons öga för design gör honom i högsta grad lämplig för att ansvara för våra produkters utseende. Anton ser till att det vi utvecklar alltid är snyggt och enkelt att förstå och använda. Anton pluggar just nu automation och mekatronik på Chalmers. Vid frågor om våra produkters användarupplevelse eller design är Anton rätt person att fråga.`}
            email="anton@innotactsoftware.se"
            linkedin="https://www.linkedin.com/in/anton-claesson/"
          />
          <PeopleCard
            name="Casper Lindberg"
            image={
                peopleImagesData
                  ? peopleImagesData.CasperImage.childImageSharp.fixed
                  : ""
              }            position="Grundare, CTO &amp; utvecklare"
            town="Göteborg, Sverige"
            text="Som företagets CTO ansvarar Casper för företagets tekniska strategi. Som en erfaren programmerare och kommande elektroingenjör är Casper expert på att snabbt lära sig och anpassa sig till nya teknologier. Casper ser till att vårat arbetssätt är effektivt och anpassat till de senaste teknologierna. Vid frågor om vår arbetsstruktur är Casper rätt person att fråga."
            email="casper@innotactsoftware.se"
            linkedin="https://www.linkedin.com/in/casperlindberg1997/"
          />
          <PeopleCard
            name="Carl Claesson"
            image={
                peopleImagesData
                  ? peopleImagesData.CarlImage.childImageSharp.fixed
                  : ""
              }            position="Grundare, CFO &amp; utvecklare"
            town="Mölnlycke, Sverige"
            text="Förutom att vara företagets CFO bidrar Carl med mycket struktur till företaget. Som teknisk fysikstuden vet Carl betydelsen av hårt jobb och dedikation. Något som han sprider till alla i teamet. Han ser till att alla presterar sitt yttersta vid varje given tidpunkt. Vid frågor om vår ekonomi eller arbetskapacitet är Carl rätt person att fråga. "
            email="carl@innotactsoftware.se"
            linkedin="https://www.linkedin.com/in/carl-claesson-29145a16a/"
          />
        </PeopleContainer>
      </ContentWrapper>
    </Section>
  )
}
