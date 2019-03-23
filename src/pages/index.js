import React, { Component } from "react"
import { Navbar, Section } from "../components/"
import styled from "styled-components"
import styles from "../styles/styles"
import SectionTop from "./../components/SectionTop"
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
import {Helmet} from "react-helmet";
import ClickMe from '../components/ClickMe'

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    flex-direction: column;
    justify-content: space-around;
  }
`

const StepsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

class Index extends Component {
  render() {
    const { data } = this.props

    return (
      <React.Fragment>
        <Helmet>
          <meta name="description" content="InnoTact website. We build amazing Augmented Reality (AR) experiences and mobile applications"/>
        </Helmet>

        <Navbar />

        <Hero>
          <ContentWrapper> 
            <SectionTop
              light
              header="We build amazing Augmented Reality experiences"
              buttonText="Start a project"
              bottomText='Learn More'
            >Together we will take your business to the next level by developing innovative augmented reality and mobile applications.</SectionTop>
          </ContentWrapper>
        </Hero>

        <Section backgroundColor={colors.lightgrey}>
          <ContentWrapper>
            <SectionTop
              dark
              header={`Let's get started`} 
              >Our team of highly skilled and motivated developers always strive towards perfection. While working with close relationships we make sure to meet every need of our customers while we develop Augmented Reality applications to change the way our customers work today. </SectionTop>
            <ServiceContainer>
              <ContentBlob
                heading="Bring your idea to life"
                text="Do you already have an AR idea? Let us turn it into reality."
                buttonText="Make it Real"
              >
                <FaCubes style={styles.icon} />
              </ContentBlob>
              <ContentBlob
                heading="Let us create an idea together"
                text="If you are not sure how use AR to improve your business we evaluate your opportunities and create an idea. "
                buttonText={`Let's do it`}
              >
                <FaCreativeCommonsShare style={styles.icon} />
              </ContentBlob>
            </ServiceContainer>
          </ContentWrapper>
        </Section>

        <People peopleImagesData={data} />

        <Section backgroundColor={colors.lightgrey}>
          <ContentWrapper>
            <SectionTop
              dark
              header={`How we bring your product to life`}
              text="Our methology for maximizing custumer value and satisfy your needs is divided into the following six steps."
            />
            <StepsWrapper>
              <TextCard
                style={{ marginTop: 40 }}
                header="Lets arrange for a meeting."
                text={[`Press `, <ClickMe url='/contact/'>here</ClickMe> , ' to book a meeting with us where we can discuss your needs and posibilities.']}
                number={"1"}
                dark
              />
              <TextCard
                header="We create an action plan depending on your needs."
                text="After identifying the best solution to your situation we create an action plan together to make sure you get your solution the way you want it at the time you need it."
                number={"2"}
                dark
              />
              <TextCard
                header="While maintaining close contact we start executing the action plan."
                text="While we start the execution state we make continious checks with you to make sure the solution turns out the way you want it."
                number={"3"}
                dark
              />
              <TextCard
                header="We keep on working on the solution until all your needs are met."
                text="The solution is not completed until you are fully satisfied."
                number={"4"}
                dark
              />
              <TextCard
                header="We finish and lunch the solution."
                text="When the solution is ready we bring it to life and launch it in your bussiness."
                number={"5"}
                dark
              />
              <TextCard
                header="Continuous improvements for your future needs."
                text="Even when your solution is launched we continue working on improvements to fit the dvelopment of your company."
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
  }
`

export default Index
