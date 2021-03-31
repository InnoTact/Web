import React from "react"
import SectionTop from "../components/SectionTop"
import Section from "../components/Section"
import ContentWrapper from "../components/ContentWrapper"
import colors from "../styles/colors"
import styled from "styled-components"
import ContentBlob from "../components/ContentBlob"
import Img from "gatsby-image"
import Text from "./Text"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function WallpaperCompaniesLovingUs({ imageData }) {
  const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  `
  const Logo = {
    width: 160,
    height: 65,
    objectFit: 'contain'
  }
  const data = useStaticQuery(graphql`
    {
      WallvisionLogo: file(relativePath: { eq: "Logo.png" }) {
        childImageSharp {
          fixed(width: 140, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Section backgroundColor={colors.lightgrey}>
      <ContentWrapper>
        <SectionTop dark header={"Used By Industry Leaders"} />
        <Container>
          <CompanyBlob
            text={
              "Typ en mening som ger galen tyngd. Largest company in Scandinavia..."
            }
          >
            {/* <Img
              imgStyle={{
                objectFit: "contain",
                width: '100%',
                objectPosition: "50% 50%",
              }}
              fixed={data.WallvisionLogo.childImageSharp.fixed}
            /> */}
            <img style={Logo} src="https://www.wallvision.com/sites/wallvision.com/files/wallvision_0_2.png" />

          </CompanyBlob>
          <CompanyBlob
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            }
          >
            <img style={Logo} src="https://www.borastapeter.com/sites/borastapeter.com/themes/borastapeter/dist/images/logo.svg" />
          </CompanyBlob>
          <CompanyBlob
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            }
          >
            <img style={Logo} src="https://www.grandecogroup.com/frontend/corporateWebsiteBundle/img/general/logo-grandeco--b-on-w.svg" />
          </CompanyBlob>
          {/* <CompanyBlob
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            }
          >
            <img style={Logo} src="http://www.maison-deco.info/wp-content/uploads/2018/10/phillip-jeffries-logo.png" />
          </CompanyBlob>
          <CompanyBlob
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            }
          >
            <img style={Logo} src="https://cdn.shopify.com/s/files/1/1231/4680/t/8/assets/logo.png?v=7867674794526171326" />
          </CompanyBlob> */}
        </Container>
      </ContentWrapper>
    </Section>
  )
}

function CompanyBlob({ children, text }) {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: ${({ left }) => (left ? "flex-start" : "center")};
    max-width: 550px;
    width: ${({ width }) => (width ? width + "px" : "unset")};
    margin: 2rem auto 0 auto;
    text-align: center;
  `

  return (
    <Wrapper width={360}>
      {children}
      <Text center dark>{text}</Text>
    </Wrapper>
  )
}
