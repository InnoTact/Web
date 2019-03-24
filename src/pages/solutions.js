import React, { Component } from "react"
import SectionTop from "../components/SectionTop"
import Navbar from "../components/Navbar"
import Section from "../components/Section"
import ContentWrapper from "../components/ContentWrapper"
import colors from "../styles/colors"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Capability from "../components/Capability"
import GetStarted from "../components/GetStarted"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import styles from '../styles/styles'
import ContentBlob from "../components/ContentBlob";

const ExtraMargin = styled.div`
  margin-top: 60px;
  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    margin-top: -15px;
  }
`

const SolutionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

class Solutions extends Component {
  render() {
    const { data } = this.props

    return (
      <React.Fragment>
        <Navbar />
  
        <Hero>
          <ContentWrapper>
            <SectionTop
              light
              header="Solutions"
              bottomText="Learn More"
            > Non ullamco amet esse anim tempor mollit fugiat duis. Pariatur nostrud occaecat eiusmod fugiat consequat esse. Non ullamco amet esse anim tempor mollit fugiat duis. Pariatur nostrud occaecat eiusmod fugiat consequat esse.
            </SectionTop>
          </ContentWrapper>
        </Hero>
  
        <Section
          style={{ marginBottom: 0, paddingBottom: 0 }}
          backgroundColor={colors.white}
        >
          <React.Fragment>
            <ContentWrapper>
              <SectionTop
                dark
                header={`AR will Revolutionze All Industries`}
              >We are here to give you the competetive edge. We will help adapt your business to thrive in the new market.</SectionTop>
            </ContentWrapper>
            <ExtraMargin>
              <Capability
                buttonText="Build the Future"
                textLeft
                header="Visualization"
                text="Berätta hur visualisering kan användas .Culpa labore tempor sint excepteur esse non enim elit eu veniam. Exercitation incididunt incididunt nostrud irure
                  anim nostrud do Lorem amet. Ullamco voluptate ea ullamco cupidatat. Adipisicing sint reprehenderit qui mollit aliqua ut aute Lorem excepteur esse labore. Elit id cillum
                  duis aliqua laborum nulla nulla aute Lorem irure deserunt consectetur dolore. Adipisicing ad voluptate deserunt consequat officia laboris irure dolore dolor ut commodo 
                  irure sit eiusmod."
              >
                <Img
                  alt="Augmented Reality"
                  fluid={data.AugmentedRealityImage1.childImageSharp.fluid}
                />
              </Capability>
            </ExtraMargin>
            <Capability
              buttonText="Get Started"
              header="Interaction"
              text="Culpa labore tempor sint excepteur esse non enim elit eu veniam. Exercitation incididunt incididunt nostrud irure
                anim nostrud do Lorem amet. Ullamco voluptate ea ullamco cupidatat. Adipisicing sint reprehenderit qui mollit aliqua ut aute Lorem excepteur esse labore. Elit id cillum
                duis aliqua laborum nulla nulla aute Lorem irure deserunt consectetur dolore. Adipisicing ad voluptate deserunt consequat officia laboris irure dolore dolor ut commodo 
                irure sit eiusmod."
            >
              <Img
                  alt="Augmented Reality"
                  fluid={data.AugmentedRealityImage2.childImageSharp.fluid}
                />
            </Capability>
            <Capability
              buttonText="Contact Us"
              textLeft
              header="Instruct &amp; Guide"
              text="Culpa labore tempor sint excepteur esse non enim elit eu veniam. Exercitation incididunt incididunt nostrud irure
                anim nostrud do Lorem amet. Ullamco voluptate ea ullamco cupidatat. Adipisicing sint reprehenderit qui mollit aliqua ut aute Lorem excepteur esse labore. Elit id cillum
                duis aliqua laborum nulla nulla aute Lorem irure deserunt consectetur dolore. Adipisicing ad voluptate deserunt consequat officia laboris irure dolore dolor ut commodo 
                irure sit eiusmod."
            >
             <Img
                  alt="Augmented Reality"
                  fluid={data.AugmentedRealityImage3.childImageSharp.fluid}
                />
            </Capability>
          </React.Fragment>
        </Section>

        <Section backgroundColor={colors.white}>
          <ContentWrapper>
            <SectionTop
              dark
              header="Solutions We Can Provide"
            >AR can and will be applied in all different sectors, especially when AR glasses are improved. However, here are some solutions we can give you today.</SectionTop>
            <SolutionsContainer>
              <ContentBlob width={360} small heading="AR For Advertising" text='Aliqua sunt do esse occaecat dolore ut et minim laborum Lorem ad occaecat in quis. Aliqua sunt do esse occaecat dolore ut et minim laborum Lorem ad occaecat in quis' />
              <ContentBlob width={360} small heading="AR For Training" text='Aliqua sunt do esse occaecat dolore ut et minim laborum Lorem ad occaecat in quis. Aliqua sunt do esse occaecat dolore ut et minim laborum Lorem ad occaecat in quis' />
              <ContentBlob width={360} small heading="AR For Model Visualization" text='Aliqua sunt do esse occaecat dolore ut et minim laborum Lorem ad occaecat in quis. Aliqua sunt do esse occaecat dolore ut et minim laborum Lorem ad occaecat in quis' />
              <ContentBlob width={360} small heading="AR For Navigation" text='Aliqua sunt do esse occaecat dolore ut et minim laborum Lorem ad occaecat in quis. Aliqua sunt do esse occaecat dolore ut et minim laborum Lorem ad occaecat in quis' />
              <ContentBlob width={360} small heading="AR And Machine Learning" text='Aliqua sunt do esse occaecat dolore ut et minim laborum Lorem ad occaecat in quis. Aliqua sunt do esse occaecat dolore ut et minim laborum Lorem ad occaecat in quis' />
              <ContentBlob width={360} small heading="AR For Sales" text='Aliqua sunt do esse occaecat dolore ut et minim laborum Lorem ad occaecat in quis. Aliqua sunt do esse occaecat dolore ut et minim laborum Lorem ad occaecat in quis' />
            </SolutionsContainer>
          </ContentWrapper>
        </Section>
  
        <Section backgroundColor={colors.lightgrey}>
          <ContentWrapper>
            <SectionTop
              dark
              header="Technology Capabilities"
            >Förklara vilka superheta teknoligier vi använder. Att vi alltid ligger i framkant. Fördelarn det ger för kund. Esse commodo veniam id officia. Aliqua incididunt voluptate in labore id ad magna
            proident enim nostrud ex. Anim et excepteur nulla culpa enim.</SectionTop>
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
    AugmentedRealityImage1: file(relativePath: { eq: "augmented-reality1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AugmentedRealityImage2: file(relativePath: { eq: "augmented-reality2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AugmentedRealityImage3: file(relativePath: { eq: "augmented-reality3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    VRImage: file(relativePath: { eq: "VR.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    DevelopmentImage: file(relativePath: { eq: "development.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Solutions
