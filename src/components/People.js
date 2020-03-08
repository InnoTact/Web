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
            text="Som bolagets VD ser Niklas till att vi når vårt mål om att bli det bästa AR-företaget i landet. Då han studerar industriell ekonomi är han expert inom företagsstrategi och kundrelationer. Han ansvarar för att teamet alltid mår bra och presterar på toppen av sin förmåga. Vid frågor om företagets strategi och kunder är Niklas rätt person att fråga."
            email="niklas@innotactsoftware.se"
            linkedin="https://www.linkedin.com/in/niklas-gustafsson-93025a12a/"
          />
          <PeopleCard
            name="Joel Rudsberg"
            image={
                peopleImagesData
                  ? peopleImagesData.JoelImage.childImageSharp.fixed
                  : ""
              }            position="Grundare, projektledare &amp; utvecklare"
            town="Göteborg, Sverige"
            text="Som projektledare ansvarar Joel för att InnoTacts projekt blir klara i tid och uppfyller alla kundens krav. Exempelvis är Joel projektledare för Boråstapeters revolutionerande nya app, Wonderwall. Joel studerar IT-programmet på Chalmers och har studerat Software Engineering i USA. Joels IT-kunskaper är ovärderliga för företaget och han lägger stor tid på att fortsatt personlig utveckling. Vid frågor om specifika projekt är Joel rätt person att fråga."
            email="joel@innotactsoftware.se"
            linkedin="https://www.linkedin.com/in/joel-rudsberg/"
          />
          <PeopleCard
            name="Anton Claesson"
            image={
                peopleImagesData
                  ? peopleImagesData.AntonImage.childImageSharp.fixed
                  : ""
              }            position="Grundare &amp; AR-specialist"
            town="Mölnlycke, Sverige"
            text={`Som företagets AR-specialist ansvarar Anton för att innovativa AR-lösningar tas fram efter kundens behov. Antons problemlösningsförmåga och tävlingsinstinkt gör att han ger allt för att lösa kundernas utmaningar. Vid sidan om InnoTact studerar Anton Automation och Mekatronik med master i Data Science och AI på Chalmers. Vid frågor om vad som är möjligt att göra med augmented reality är Anton rätt person att fråga.`}
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
            text="Som företagets CTO ansvarar Casper för företagets tekniska strategi. Som erfaren programmerare och blivande data scientist är Casper expert på att snabbt lära sig och anpassa sig till nya teknologier. Casper ser till att vårt arbetssätt är effektivt och anpassat till de senaste teknologierna. Vid tekniska frågor är Casper rätt person att fråga."
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
            text="Som företagets CFO har Carl det yttersta ansvaret vid ekonomiska beslut. Carl studerar Teknisk Fysik och bidrar med sin problemlösningsförmåga och programmeringskunskaper till företaget. Carls problemlösningsförmåga har lett till flera nya innovationer som banat för nya appar. Vid frågor om företagets ekonomi är Carl rätt person att fråga."
            email="carl@innotactsoftware.se"
            linkedin="https://www.linkedin.com/in/carl-claesson-29145a16a/"
          />
          <PeopleCard
            name="Fredrik Hernqvist"
            image={
                peopleImagesData
                  ? peopleImagesData.FredrikImage.childImageSharp.fixed
                  : ""
              }            position="IT-arkitekt, utvecklare &amp; rådgivare"
            town="Stockholm, Sverige"
            text="Som IT-arkitekt, utvecklare och rådgivare ansvarar Fredrik för att kvalitetssäkra koden samt höja kompetensen i teamet. Fredrik har jobbat på Google i London, Microsoft i Seattle och Google i Stockholm. Fredrik pluggar datateknik på KTH, har gjort utbyte i Kina på det prestigefulla universitetet Tsinghua, känt som ”the Harvard of China”. Dessutom är Fredrik tävlingsprogrammerare på elitnivå och har även tävlat och presterat på elitnivå i matematiktävlingar."
            linkedin="https://www.linkedin.com/in/fredrik-hernqvist-529479104/"
          />
          <PeopleCard
            name="Oskar Grönqvist"
            image={
                peopleImagesData
                  ? peopleImagesData.OskarImage.childImageSharp.fixed
                  : ""
              }            position="Androidutvecklare med specialisering inom augmented reality"
            town="Göteborg, Sverige"
            text="Som androidutvecklare med specialisering inom augmented reality ansvarar Oskar för att utveckla appar med väl utvalda arkitektur-mönster och de senaste augmented reality- teknikerna. Oskar studerar till civilingenjör i datateknik på Chalmers och går nu första året på IT-mastern Software Engineering and Technology. Oskar har därför den senaste kunskapen som Chalmers undervisar färskt i minnet och är redo att revolutionera framtidens augmented reality-appar."
            linkedin="https://www.linkedin.com/in/oskar-gr%C3%B6nqvist-54a35b182/"
          />
        </PeopleContainer>
      </ContentWrapper>
    </Section>
  )
}
