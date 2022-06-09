import React from "react"
import SectionTop from "../components/SectionTop"
import Section from "../components/Section"
import ContentWrapper from "../components/ContentWrapper"
import colors from "../styles/colors"
import styled from "styled-components"
import Text from "./Text"
import { useStaticQuery, graphql } from "gatsby"

export default function WallpaperCompaniesLovingUs({ companies, title }) {
  const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  `
  const Logo = {
    width: 160,
    height: 65,
    objectFit: "contain",
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
      <ContentWrapper style={{ maxWidth: '90vw' }}>
        <SectionTop dark header={title} />
        <Container>
          {companies.map(c => {
            return (
              <CompanyBlob text={c.text}>
                <img style={Logo} src={c.url} />
              </CompanyBlob>
            )
          })}
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
    width: ${({ width }) => (width ? width + "px" : "unset")};
    margin: 2rem auto 0 auto;
    text-align: center;
  `

  return (
    <Wrapper width={300}>
      {children}
      <Text center dark>
        {text}
      </Text>
    </Wrapper>
  )
}
