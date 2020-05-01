import React from "react"
import ContentWrapper from "./ContentWrapper"
import Section from "./Section"
import TextCard from "./TextCard"
import ClickMe from "./ClickMe"
import styled from "styled-components"
import colors from "../styles/colors"
import SectionTop from "./SectionTop"

export default function MethodologySection() {
  const StepsWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  return (
    <Section backgroundColor={colors.lightgrey}>
      <ContentWrapper>
        <SectionTop dark header={`Hur vi realiserar din idé`}>
          Vår metodik för att maximera nytta och uppfylla dina behov delas in i
          följande sex steg.
        </SectionTop>
        <StepsWrapper>
          <TextCard
            header="Vi bokar ett möte."
            text={[
              `Tryck `,
              <ClickMe italic url="/kontakt/">
                här
              </ClickMe>,
              " för att boka ett möte där vi kan diskutera dina behov och möjligheter.",
            ]}
            number={"1"}
            dark
          />
          <TextCard
            header=" Vi skapar en plan baserad på dina behov."
            text="Efter att ha identifierat den bästa lösningen till dina problem skapar vi en plan tillsammans för att se till att du får den lösning du behöver."
            number={"2"}
            dark
          />
          <TextCard
            header="Samtidigt som vi håller en nära kontakt börjar vi utveckla lösningen."
            text="Under hela utvecklingsfasen uppdaterar vi dig kontinuerligt för att säkerställa att vi utvecklar något du blir nöjd med."
            number={"3"}
            dark
          />
          <TextCard
            header="Vi fortsätter arbeta tills du är nöjd."
            text="Vår lösning är inte färdig förrän du är helt nöjd med resultatet."
            number={"4"}
            dark
          />
          <TextCard
            header="Vi avslutar och integrerar lösningen."
            text="När lösningen är klar ser vi till att den kan integreras i ditt företag."
            number={"5"}
            dark
          />
          <TextCard
            header="Kontinuerliga förbättringar för dina framtida behov."
            text="Även när lösningen är lanserad fortsätter vi arbeta på förbättringar efter dina önskemål."
            number={"6"}
            dark
          />
        </StepsWrapper>
      </ContentWrapper>
    </Section>
  )
}
