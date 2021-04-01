import React from "react"
import SectionTop from "./../components/SectionTop"
import ContentWrapper from "./../components/ContentWrapper"
import Section from "./../components/Section"
import CenterContainer from "./../components/CenterContainer"
import colors from "../styles/colors"
import Button from "../components/Button"
import { Link } from "gatsby"

export default function ActionSection({ title, description, btnText, link, dark, ...props }) {
  return (
    <Section backgroundColor={dark ? colors.lightgrey : colors.white} {...props}>
      <ContentWrapper>
        <SectionTop dark header={title}>
          {description}
        </SectionTop>
        <CenterContainer>
          <Link to={link}>
            <Button style={{ marginTop: 25 }} primary>
              {btnText}
            </Button>
          </Link>
        </CenterContainer>
      </ContentWrapper>
    </Section>
  )
}
