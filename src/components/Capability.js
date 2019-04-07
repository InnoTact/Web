import React, { Fragment, Component } from "react"
import styled from "styled-components"
import SubHeading from "./SubHeading"
import Button from "./Button"
import Text from "./Text"
import { Link } from "gatsby"
import styles from "../styles/styles"
import { AppContext } from "./RootWrapper"
import ContentWrapper from "./ContentWrapper";
import PropTypes from 'prop-types';

const Container = styled.div`
  position: relative;
`

const Header = styled(SubHeading)`
  @media (min-width: ${styles.breakpoints.md + "px"}) {
    margin-top: 0;
  }
`

const InfoContainer = styled.div`
  padding: 4rem 4rem 4rem 4rem;
  text-align: left;
  width: 50vw;
  margin-left: ${({ textLeft }) => (textLeft ? 0 : "50%")};

  @media (max-width: ${styles.breakpoints.md + "px"}) {
    width: unset;
    padding: 0 0 4rem 0;
    margin-left: unset;
  }
`

const ImageContainer = styled.div`
  position: absolute;
  right: ${props => (props.textLeft ? 0 : "50%")};
  left: ${props => (props.textLeft ? "50%" : 0)};
  top: 0;
  bottom: 0;
  overflow: hidden;

  @media (max-width: ${styles.breakpoints.md + "px"}) {
    position: static;
    right: initial;
    left: initial;
  }
`

class Capability extends Component {
  render() {
    const {
      textLeft,
      header,
      text,
      buttonText,
      children,
      windowWidth,
      ...props
    } = this.props

    let info = (
      <InfoContainer {...props} textLeft={textLeft}>
        <ContentWrapper>
          <Header dark>{header}</Header>
          <Text dark>{text}</Text>
          <Link to="/contact/#contact-form">
            <Button primary>{buttonText}</Button>
          </Link>
        </ContentWrapper>
      </InfoContainer>
    )

    let image = <ImageContainer textLeft={textLeft}>{children}</ImageContainer>

    let output
    if (textLeft) {
      output = (
        <Fragment>
          {info}
          {image}
        </Fragment>
      )
    } else {
      output = (
        <Fragment>
          {image}
          {info}
        </Fragment>
      )
    }

    return (
      <Container {...props}>
        <AppContext.Consumer>
          {value => {
            if (value) {
              if (value.isMobile || value.isTablet) {
                output =
                  <Fragment>
                    {info}
                    {image}
                  </Fragment>
              }
              return output
            } else {
              return null
            }
          }}
        </AppContext.Consumer>
      </Container>
    )
  }
}

Capability.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Capability
