import React, { Component } from "react"
import styled from "styled-components"
import Section from "./Section"
import colors from "../styles/colors"
import Logo from "./Logo"
import NavItems from "./NavItems"
import Text from "./Text"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"
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

const Anchor = styled.a`
  display: "inline";
  margin-bottom: 0;
  color: white;
  font-size: 0.85rem;

  :hover {
    color: ${colors.primaryHighLighten};
    cursor: pointer;
  }

  @media (max-width: ${styles.breakpoints.md + "px"}) {
    font-size: 0.75rem;
  }
`

const SocialLogos = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: row;

  @media (max-width: ${styles.breakpoints.md + "px"}) {
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
  text-align: left;

  @media (max-width: ${styles.breakpoints.md + "px"}) {
    margin-top: 1.8rem;
    margin-bottom: 2rem;
    text-align: center;
  }
`

const AdressText = styled(Text)`
  @media (max-width: ${styles.breakpoints.md + "px"}) {
    margin-bottom: -20px;
    margin-top: 20px; 
    text-align: center;
  }
`

const Wrapper = styled(ContentWrapper)`
  @media (max-width: ${styles.breakpoints.lg + "px"}) and (min-width: ${styles.breakpoints.md + "px"}) {
    width: 95%;
  }
`

class Footer extends Component {
  render() {
    return (
      <Section
        backgroundColor={colors.darkgrey}
        style={{padding: '3rem 3rem'}}
      >
        <Wrapper>
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
                      <InfoIconsContainer>
                        <div style={{ marginBottom: 6 }}>
                          <Anchor
                            small
                            light
                            href="tel:+46737303797"
                          >
                            +46737303797
                          </Anchor>
                        </div>
                        <Anchor
                          small
                          light
                          href="mailto:contact@innotactsoftware.com"
                        >
                          contact@innotactsoftware.com
                        </Anchor>
                        <SocialLogos>
                          <SocialLogoAnchor href="https://www.linkedin.com/company/18905374/">
                            <FaLinkedin
                              style={
                                value.isTablet || value.isMobile
                                  ? socialLogoStyleLarge
                                  : socialLogoStyle
                              }
                            />
                          </SocialLogoAnchor>
                          <SocialLogoAnchor href="tel:+46737303797">
                            <FaPhone
                              style={
                                value.isTablet || value.isMobile
                                  ? socialLogoStyleLarge
                                  : socialLogoStyle
                              }
                            />
                          </SocialLogoAnchor>
                          <SocialLogoAnchor href="mailto:contact@innotactsoftware.com">
                            <FaEnvelope
                              style={
                                value.isTablet || value.isMobile
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
        </Wrapper>
      </Section>
    )
  }
}

export default Footer
