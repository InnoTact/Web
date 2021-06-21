import React from "react"
import { Helmet } from "react-helmet"
import CenterContainer from "../../components/CenterContainer"
import Header from "../../components/Header"
import Text from "../../components/Text"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://www.borastapeter.com/sites/borastapeter.com/files/styles/card_teaser_lg_2x/public/nightingalegarden_image_roomshot_diningarea_item_3561_sr.jpg?itok=0vX2wod4&timestamp=1615969949");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.70);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContentContainer = styled.div`
  padding: 2rem;
`

export default function borastapeter() {
  return (
    <Container>
      <DarkOverlay>
        <Helmet>
          <title>Wonderwall AR By Boråstapeter</title>
          <meta
            name="apple-itunes-app"
            content="app-clip-bundle-id=InnoTact.Borastapeter.Clip, app-id=N3QW3RP8Y5"
          ></meta>
        </Helmet>
        <ContentContainer>
          <Header styles={{ fontSize: '1.5rem', marginBottom: '0.5rem' }} h1 text={"Wonderwall AR By Boråstapeter"} />
          <Text light style={{ textAlign: "center" }}>
            Press the app banner above to view the wallpaper in AR.
          </Text>
        </ContentContainer>
      </DarkOverlay>
    </Container>
  )
}
