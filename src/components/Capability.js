import React, { Fragment, Component } from "react"
import styled from "styled-components"
import SubHeading from "./SubHeading"
import Button from "./Button"
import Text from "./Text"
import { Link } from "gatsby"
import styles from "../styles/styles"
import { AppContext } from "./RootWrapper"
import windowSize from 'react-window-size';
import { isMobile } from '../util/screen'

const Container = styled.div`
  position: relative;
`

const InfoContainer = styled.div`
  padding: 1rem 4rem 4rem 4rem;
  text-align: left;
  width: 50vw;
  margin-left: ${({ textLeft }) => (textLeft ? 0 : "50%")};

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    width: unset;
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

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    position: static;
    right: initial;
    left: initial;
  }
`

class Capability extends Component {
  render() {
    const { textLeft, header, text, buttonText, children, windowSize, ...props } = this.props

    let info = (
      <InfoContainer textLeft={textLeft}>
        <SubHeading dark text={header} />
        <Text dark>{text}</Text>
        <Link to="/contact/">
          <Button primary>{buttonText}</Button>
        </Link>
      </InfoContainer>
    )
  
    let image = <ImageContainer textLeft={textLeft}>{children}</ImageContainer>
  
    let output
    if (textLeft) {
        output = <Fragment>{info}{image}</Fragment>
    } else {
      output = <Fragment>{image}{info}</Fragment>
    }
  
    return (
      <Container {...props}>
        <Fragment>
          {isMobile(windowSize) ? <Fragment>{info}{image}</Fragment> : output }
        </Fragment>
      </Container>
    )
  }
}

export default windowSize(Capability)