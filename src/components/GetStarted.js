import React from "react"
import SectionTop from "./../components/SectionTop"
import ContentWrapper from "./../components/ContentWrapper"
import Section from "./../components/Section"
import CenterContainer from "./../components/CenterContainer"
import colors from "../styles/colors"
import Button from "../components/Button"
import { Link } from "gatsby"
import LocalizedStrings from "react-localization"
import translation from "../translations/get-started"

export default () => {
  const strings = new LocalizedStrings(translation)

  return (
    <Section backgroundColor={colors.white}>
      <ContentWrapper>
        <SectionTop dark header={strings.title}>
          {strings.description}
        </SectionTop>
        <CenterContainer>
          <Link to="/kontakt/#contact-form">
            <Button style={{ marginTop: 25 }} primary>
              {strings.button}
            </Button>
          </Link>
        </CenterContainer>
      </ContentWrapper>
    </Section>
  )
}
