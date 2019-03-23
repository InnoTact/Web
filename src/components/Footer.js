import React, { Component } from "react"
import styled from "styled-components"
import Section from "./Section"
import colors from "../styles/colors"
import Logo from "./Logo"
import NavItems from "./NavItems"
import Text from "./Text"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import ContentWrapper from "./ContentWrapper"
import styles from "../styles/styles"
import { AppContext } from "./RootWrapper"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${styles.breakpoints.md + "px"}) {
    flex-direction: column;
    justify-content: space-around;
    margin: 1rem 0;
  }
`

const Item = styled.div`
  display: inline-block;
  position: relative;
`

const Anchor = styled(Text)`
  :hover {
    color: ${colors.mediumGreyLighten};
  }
`

const SocialLogos = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: row;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    top: unset;
    bottom: -1.5rem;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
  }
`

const SocialLogoAnchor = styled.a`
  :hover {
    color: ${colors.primary};
    cursor: pointer;
  }
`

const socialLogoStyle = {
  fontSize: 16,
  marginLeft: 5,
  color: colors.white,
}

const socialLogoStyleLarge = {
  fontSize: 32,
  marginLeft: 20,
  color: colors.white,
}

const InfoIconsContainer = styled.div`
  display: relative;
  text-align: center;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    margin-top: 1.8rem;
    margin-bottom: 2rem;
  }
`

class Footer extends Component {
  render() {
    return (
      <Section
        style={{ padding: "3rem 3rem" }}
        backgroundColor={colors.darkgrey}
      >
        <ContentWrapper>
          <AppContext.Consumer>
            {value => {
              let output = null
              if (value) {
                output = (
                  <Container>
                    <Item>
                      <Logo light />
                    </Item>
                    <Item
                      style={{
                        display:
                          value.isTablet || value.isMobile
                            ? "none"
                            : "inline-block",
                      }}
                    >
                      <NavItems light />
                    </Item>
                    <Item style={{ minWidth: 300 }}>
                      <Text
                        style={{
                          display:
                            value.isTablet || value.isMobile
                              ? "none"
                              : "block",
                        }}
                        small
                        borderBottom
                        light
                      >
                        Gothenburg, Sweden
                      </Text>
                      <InfoIconsContainer>
                        <div style={{ marginBottom: 6 }}>
                          <Anchor
                            style={{ display: "inline" }}
                            small
                            light
                            href="tel:+46737303797"
                          >
                            +46737303797
                          </Anchor>
                        </div>
                        <Anchor
                          style={{ display: "inline" }}
                          small
                          light
                          href="mailto:niklas@innotactsoftware.com"
                        >
                          niklas@innotactsoftware.com
                        </Anchor>
                        <SocialLogos>
                          <SocialLogoAnchor href="https://github.com/">
                            <FaGithub
                              style={
                                value.isMobile
                                  ? socialLogoStyleLarge
                                  : socialLogoStyle
                              }
                            />
                          </SocialLogoAnchor>
                          <SocialLogoAnchor href="https://www.linkedin.com/company/innotact-software-ab/about/">
                            <FaLinkedin
                              style={
                                value.isMobile
                                  ? socialLogoStyleLarge
                                  : socialLogoStyle
                              }
                            />
                          </SocialLogoAnchor>
                          <SocialLogoAnchor href="mailto:niklas@innotactsoftware.com">
                            <FaEnvelope
                              style={
                                value.isMobile
                                  ? socialLogoStyleLarge
                                  : socialLogoStyle
                              }
                            />
                          </SocialLogoAnchor>
                        </SocialLogos>
                      </InfoIconsContainer>
                    </Item>
                  </Container>
                )
              }

              return output
            }}
          </AppContext.Consumer>
        </ContentWrapper>
      </Section>
    )
  }
}

export default Footer
