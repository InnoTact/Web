import React from "react"
import styled from "styled-components"
import colors from "../styles/colors"
import Text from "./Text"
import { FaMapMarker, FaEnvelope, FaLinkedin } from "react-icons/fa"
import Img from "gatsby-image"
import PropTypes from 'prop-types';

const Container = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  width: 380px;
  margin-right: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  position: relative;
  box-shadow: ${colors.normalBoxShadow};
`

const Name = styled.h5`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 15px 0 0 0;
  padding: 0;
  color: ${colors.dark};
`

const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`

const Position = styled.p`
  font-style: italic;
  color: ${colors.darkgrey};
  margin-top: 0.8rem;
  margin-bottom: 0.4rem;
  text-align: center;
`

const LogosContainer = styled.div`
  padding-top: 12px;
  margin-top: auto;
  margin-bottom: 2px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const SocialLogo = styled.a`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  border: 2px solid ${colors.primaryLowLighten};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  margin-left: 5px;

  :hover {
    border-color: ${colors.primary};
    transition: all ease-in-out 0.2s;
  }
`

const ImageStyle = {
    borderRadius: '50%',
    width: 180,
    height: 180
}

const PeopleCard = ({ name, image, position, town, text, email, linkedin }) => {
  return (
    <Container>
      {image && <Img style={ImageStyle} fixed={image} />}
      <Name>{name}</Name>
      <Position>{position}</Position>
      <LocationContainer>
        <FaMapMarker
          style={{ fontSize: "1rem", marginRight: 12, color: colors.dark }}
        />
        <Text style={{ margin: 0 }} dark>
          {town}
        </Text>
      </LocationContainer>
      <Text style={{ textAlign: "center" }} dark>
        {text}
      </Text>
      <LogosContainer>
        {email && (
          <SocialLogo href={`mailto:${email}`}>
            <FaEnvelope style={{ fontSize: 20, color: colors.primary }} />
          </SocialLogo>
        )}
        <SocialLogo href={linkedin}>
          <FaLinkedin style={{ fontSize: 20, color: colors.primary }} />
        </SocialLogo>
      </LogosContainer>
    </Container>
  )
}

PeopleCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  town: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
}

export default PeopleCard
