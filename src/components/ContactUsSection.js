import React from "react"
import styled from "styled-components"
import SectionTop from "./../components/SectionTop"
import Section from "./../components/Section"
import CenterContainer from "./../components/CenterContainer"
import ContentWrapper from "./../components/ContentWrapper"
import colors from "../styles/colors"
import Card from "../components/Card"
import styles from "../styles/styles"
import SubHeader from "../components/SubHeader"
import { FaPhone, FaEnvelope } from "react-icons/fa"
import LocalizedStrings from "react-localization"
import translation from "../translations/contact-us"
import AnchorPrimary from "./AnchorPrimary"

const ContactUsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  margin-top: 2rem;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    flex-direction: column;
    align-items: center;
  }
`

const ContactContainer = styled.div`
  width: 45%;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    order: 1;
    width: 100%;
    margin-bottom: 4rem;
  }
`

const PhoneContainer = styled(ContactContainer)`
  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    width: 100%;
    order: 2;
  }
`

const CallUsContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export default function ContactUsSection() {
  const strings = new LocalizedStrings(translation)
  return (
    <div>
      <Section id="contact-form" backgroundColor={colors.lightgrey}>
        <ContentWrapper>
          <SectionTop dark header={strings.main.title}>
            {strings.main.subTitle}
          </SectionTop>
          <ContactUsWrapper>
            <PhoneContainer>
              <Card>
                <SubHeader dark>{strings.main.callUs}</SubHeader>
                <CallUsContent>
                  <CenterContainer>
                    <FaPhone style={{ fontSize: 30, color: colors.dark }} />
                  </CenterContainer>
                  <CenterContainer>
                    <AnchorPrimary style={{ marginLeft: 10 }} href="tel:+46737303797">
                      +46737303797
                    </AnchorPrimary>
                  </CenterContainer>
                </CallUsContent>
              </Card>
            </PhoneContainer>
            <ContactContainer>
              <Card>
                <SubHeader dark>{strings.main.emailUs}</SubHeader>
                <CallUsContent>
                  <CenterContainer>
                    <FaEnvelope style={{ fontSize: 30, color: colors.dark }} />
                  </CenterContainer>
                  <CenterContainer>
                    <AnchorPrimary
                      style={{ marginLeft: 10 }}
                      href="mailto:contact@innotactsoftware.com"
                    >
                      contact@innotactsoftware.com
                    </AnchorPrimary>
                  </CenterContainer>
                </CallUsContent>
              </Card>
            </ContactContainer>
          </ContactUsWrapper>
        </ContentWrapper>
      </Section>
    </div>
  )
}
