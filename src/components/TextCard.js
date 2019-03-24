import React, { Fragment } from "react"
import styled from "styled-components"
import SubHeader from "./SubHeader"
import Text from "./Text"
import colors from "../styles/colors"
import ColorFadeSection from "./ColorFadeSection"
import Card from "./Card"

const Container = styled.div`
  position: relative;
  max-width: 740px;
  margin-top: 65px;
`

const Number = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 35px;
  left: -20px;
  background-color: ${colors.white};
  color: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${colors.normalBoxShadow};
`

export default ({ header, text, number, ...props }) => (
  <Container>
    <Card {...props}>
      <SubHeader dark >{header}</SubHeader>
      <Text style={{marginBottom: 0}} dark>{text}</Text>
      {number && (
        <Number>
          <React.Fragment>
            <Text style={{ marginBottom: 4, fontSize: "1.3rem" }} dark>
              {number}
            </Text>
            <ColorFadeSection
              style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
            />
          </React.Fragment>
        </Number>
      )}
    </Card>
  </Container>
)
