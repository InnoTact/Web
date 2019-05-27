import React, { Component, Fragment } from "react"
import Capability from '../components/Capability'
import styled from "styled-components"
import styles from '../styles/styles'
import colors from '../styles/colors'
import Text from '../components/Text'
import SubHeading from '../components/SubHeading'
import Card from '../components/Card'

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: ${styles.breakpoints.md + "px"}) {
    flex-direction: column;
    justify-content: space-around;
  }
`

const IFrame = styled.iframe`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
`

const CustomCard = styled(Card)`
`

const VideoItemContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  width: 100%;
  overflow: hidden;
`

const Item = styled.div`
  max-width: 44%;
  max-height: auto;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: ${styles.breakpoints.md + "px"}) {
    margin-bottom: 4rem;
    max-width: 100%;
  }
`
const YOUTUBE_URL_PARAMETERS = `?autoplay=0&hl=swe&iv_load_policy=3&loop=1&modestbranding=1&mute=1&controls=1`

export default class VideoShowcase extends Component {
  render() {
    const video1URL = `https://www.youtube.com/embed/fsc9S4pX1QU${YOUTUBE_URL_PARAMETERS}`

    return (
      <Container>
        <Item>
          <CustomCard style={{padding: 0}}>
            <VideoItemContainer>
              <IFrame allowFullScreen src={video1URL} frameBorder={0} />
            </VideoItemContainer>
            <div style={{padding: '1rem 2.5rem 1rem 2.5rem'}}>
              <SubHeading dark style={{fontWeight: 'bold', fontSize: '1.4rem', marginTop: 20, marginBottom: 10, textAlign: 'left'}}>Hitta ditt favoritstaket</SubHeading>
              <Text dark>Om du vill köpa ett nytt staket till din altan eller trädgård kan det vara svårt att välja vilket staket eller räcke som hade passat bäst hemma hos dig. Istället för att bläddra mellan bilder på din dator kan du med denna applikationen testa olika staket vart du än befinner dig.</Text>
            </div>
          </CustomCard>
        </Item>

        <Item style={{marginBottom: 0}}>
          <CustomCard style={{padding: 0}}>
            <VideoItemContainer>
              <IFrame src={video1URL} frameBorder={0} />
            </VideoItemContainer>
            <div style={{padding: '1rem 2.5rem 1rem 2.5rem'}}>
              <SubHeading dark style={{fontWeight: 'bold', fontSize: '1.4rem', marginTop: 20, marginBottom: 10, textAlign: 'left'}}>Provtapetsera ditt hem</SubHeading>
              <Text dark>Att pröva ut nya tapeter är idag en osmidig process. Det kan ta tid att få hem tapetprover och svårt att visualisera hur det hade sett ut om du valde in viss tapet. Med denna applikation kan du enkelt och tydligt se hur det hade sett ut om du tapetserade om hemma hos dig.</Text>
            </div>
          </CustomCard>
        </Item>
      </Container>
    )
  }
}

/*
            <Text dark style={{fontWeight: 'bold'}}>Tapetapplikation</Text>
                        <Text dark>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
*/
