import React, { Component } from "react"
import styled from "styled-components"
import styles from "../styles/styles"
import SectionTop from "./../components/SectionTop"
import Navbar from "./../components/Navbar"
import Section from "./../components/Section"
import ContentWrapper from "./../components/ContentWrapper"
import ContentBlob from "./../components/ContentBlob"
import colors from "../styles/colors"
import TextCard from "../components/TextCard"
import Footer from "../components/Footer"
import People from "../components/People"
import Hero from "../components/Hero"
import GetStarted from "../components/GetStarted"
import { graphql } from "gatsby"
import { FaCubes, FaCreativeCommonsShare } from "react-icons/fa"
import { Helmet } from "react-helmet"
import ClickMe from "../components/ClickMe"
import Text from "../components/Text"
import Anchor from "../components/Anchor"
import SubHeading from "../components/SubHeading"
import BackgroundImage from '../components/BackgroundImage'

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: ${styles.breakpoints.md + "px"}) {
    flex-direction: column;
    justify-content: space-around;
  }
`

const ContentBlobCustom = styled(ContentBlob)`
  min-height: 340px;
  max-width: 47%;

  @media (max-width: ${styles.breakpoints.lg + "px"}) {
    max-width: 45%;
  }

  @media (max-width: ${styles.breakpoints.md + "px"}) {
    max-width: unset;
  }
`

const StepsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 250px;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    flex-direction: column;
    height: auto;
  }
`

const FactItem = styled.div`
  padding: 3rem;
  text-align: center;
  width: 33%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    width: 100%;
    height: auto;
  }
`

const QuoteSection = styled(Section)`
  @media (max-width: ${styles.breakpoints.md + "px"}) {
    display: none;
  }
`

const QuoteContainer = styled.div`
  padding: 4rem 0 5rem 0;
`

const Quote = styled(SubHeading)`
  text-align: center;
  line-height: 2.2;
  font-style: italic;
`

const QuoteName = styled(Anchor)`
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
  margin-top: 1rem;
  display: block;
`

const imageStyle = {
  objectFit: 'contain',
  fontFamily: 'object-fit: contain;',
  height: '100%'
}

class Index extends Component {
  render() {
    const { data } = this.props

    return (
      <React.Fragment>
        <Helmet>
          <meta
            name="description"
            content="InnoTact website. We build amazing Augmented Reality (AR) experiences and mobile applications"
          />
        </Helmet>

        <Navbar />

        <Hero
          header="Vi utvecklar Augmented Reality-applikationer"
          subHeader="Vi tar ditt företag till nästa nivå genom att implementera innovativa lösningar baserade på Augmented Reality."
          buttonText="STARTA ETT PROJEKT"
          bottomText="Läs mer"
        >
          <BackgroundImage
                  alt="Augmented Reality"
                  fluid={data.HeroBackgroundImage.childImageSharp.fluid}
                  fit='contain'
                  height='100%'
                  width='100%'
                  style={{bottom: 0, right: 0, position: 'absolute'}}
                />
        </Hero>

        <Section backgroundColor={colors.white}>
          <ContentWrapper>
            <SectionTop dark header={`Starta projekt`}>
              Vårt team, som består av motiverade och drivna utvecklare, strävar
              alltid efter att hjälpa ditt företag till nästa nivå. Vi arbetar
              med nära kundrelationer för att garantera att vi uppyller alla
              dina behov.{" "}
            </SectionTop>
            <ServiceContainer>
              <ContentBlobCustom
                heading="Realisera din idé"
                text="Har du redan en idé inom Augmented Reality? Har du en produkt du vill förverkliga? Låt oss verkställa den tillsammans."
                buttonText="Vad vi erbjuder"
                buttonLink="/Lösningar/"
              >
                <FaCubes style={styles.icon} />
              </ContentBlobCustom>
              <ContentBlobCustom
                heading="Vi skapar en idé tillsammans"
                text="Är du osäker på hur Augmented Reality kan implementeras i ditt företag? Låt oss utvärdera dina möjligheter tillsammans."
                buttonText="Läs mer"
                buttonLink="/Lösningar/"
              >
                <FaCreativeCommonsShare style={styles.icon} />
              </ContentBlobCustom>
            </ServiceContainer>
          </ContentWrapper>
        </Section>

        <Section
          style={{ paddingBottom: 0, paddingTop: 0 }}
          backgroundColor={colors.lightgrey}
        >
          <FactContainer>
            <FactItem style={{ backgroundColor: colors.lightgrey }}>
              <Text
                style={{ marginBottom: "0.7rem", textAlign: "center" }}
                dark
              >
                Augmented Reality revenue is expected to hit $120 billion by
                2020
              </Text>
              <Anchor
                small
                italic
                dark
                target="_blank"
                href="https://www.digi-capital.com/news/2016/01/augmentedvirtual-reality-revenue-forecast-revised-to-hit-120-billion-by-2020/"
              >
                Digi-Capital
              </Anchor>
            </FactItem>
            <FactItem style={{ backgroundColor: colors.lightdarkerGrey }}>
              <Text
                style={{ marginBottom: "0.7rem", textAlign: "center" }}
                dark
              >
                60% to 70% of consumers see clear benefits in using AR and IoT
                devices in their daily life and at work
              </Text>
              <Anchor
                small
                italic
                dark
                target="_blank"
                href="http://www.isaca.org/About-ISACA/Press-room/News-Releases/2016/Pages/2016-IT-RRB-News-Release-US.aspx"
              >
                Isaca
              </Anchor>
            </FactItem>
            <FactItem style={{ backgroundColor: colors.mediumGrey }}>
              <Text
                style={{ marginBottom: "0.7rem", textAlign: "center" }}
                dark
              >
                Augmented Reality headsets will have an estimated 1 Billion
                users by 2020.
              </Text>
              <Anchor
                small
                italic
                dark
                target="_blank"
                href="https://www.statista.com/topics/3286/augmented-reality-ar/"
              >
                Statista
              </Anchor>
            </FactItem>
          </FactContainer>
        </Section>

        <QuoteSection
          style={{ paddingBottom: 0, paddingTop: 0 }}
          backgroundColor={colors.lightgrey}
        >
          <ContentWrapper>
            <QuoteContainer>
              <Quote dark>
                "I do think that a significant portion of the population of
                developed countries, and eventually all countries, will have AR
                experiences every day, almost like eating three meals a day, it
                will become that much a part of you."
              </Quote>
              <QuoteName
                target="_blank"
                href="https://nordic.businessinsider.com/apple-ceo-tim-cook-explains-augmented-reality-2016-10?r=US&IR=T"
                center
                dark
              >
                Tim Cook CEO Apple
              </QuoteName>
            </QuoteContainer>
          </ContentWrapper>
        </QuoteSection>

        <People peopleImagesData={data} />

        <Section backgroundColor={colors.lightgrey}>
          <ContentWrapper>
            <SectionTop dark header={`Hur vi realiserar din idé`}>
              Vår metodik för att maximera nytta och uppfylla dina behov delas
              in i följande sex steg.
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

        <GetStarted />

        <Footer />
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query {
    JoelImage: file(relativePath: { eq: "Joel_Rudsberg.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    NiklasImage: file(relativePath: { eq: "Niklas_Gustafsson.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    AntonImage: file(relativePath: { eq: "Anton_Claesson.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    CasperImage: file(relativePath: { eq: "Casper_Lindberg.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    CarlImage: file(relativePath: { eq: "Carl_Claesson.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    HeroBackgroundImage: file(relativePath: { eq: "development1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Index
