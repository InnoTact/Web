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
import windowSize from "react-window-size"
import isMobile from "../util/screen"

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
    color: ${colors.primary};
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
  isTablet = (width) => {
    return width > styles.breakpoints.sm && width <= styles.breakpoints.md
  }

  render() {
    const { windowWidth } = this.props

    return (
      <Section
        style={{ padding: "3rem 3rem" }}
        backgroundColor={colors.darkgrey}
      >
        <ContentWrapper>
          <Container>
            <Item>
              <Logo light />
            </Item>
            <Item
              style={{
                display: this.isTablet(windowWidth) || isMobile(windowWidth) ? "none" : "inline-block",
              }}
            >
              <NavItems light />
            </Item>
            <Item style={{ minWidth: 300 }}>
              <Text
                style={{
                  display: this.isTablet(windowWidth) || isMobile(windowWidth) ? "none" : "block",
                }}
                small
                borderBottom
                light
              >
                Gothenburg, Sweden
              </Text>
              <InfoIconsContainer>
                <div style={{ marginBottom: 6 }}>
                  <Anchor style={{ display: "inline" }}
                      small
                      light
                      href="tel:+46737303797">
                      +46737303797
                  </Anchor>
                </div>
                <Anchor style={{ display: "inline" }}
                      small
                      light
                      href="mailto:niklas@innotactsoftware.com">                    
                      niklas@innotactsoftware.com
                      </Anchor>
                <SocialLogos>
                  <SocialLogoAnchor href="https://github.com/">
                    <FaGithub
                      style={
                        isMobile(windowWidth)
                          ? socialLogoStyleLarge
                          : socialLogoStyle
                      }
                    />
                  </SocialLogoAnchor>
                  <SocialLogoAnchor href="https://www.linkedin.com/company/innotact-software-ab/about/">
                    <FaLinkedin
                      style={
                        isMobile(windowWidth)
                          ? socialLogoStyleLarge
                          : socialLogoStyle
                      }
                    />
                  </SocialLogoAnchor>
                  <SocialLogoAnchor href="mailto:niklas@innotactsoftware.com">
                    <FaEnvelope
                      style={
                        isMobile(windowWidth)
                          ? socialLogoStyleLarge
                          : socialLogoStyle
                      }
                    />
                  </SocialLogoAnchor>
                </SocialLogos>
              </InfoIconsContainer>
            </Item>
          </Container>
        </ContentWrapper>
      </Section>
    )
  }
}

export default windowSize(Footer)
