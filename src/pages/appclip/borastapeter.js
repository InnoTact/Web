import React from "react"
import { Helmet } from "react-helmet"
import CenterContainer from "../../components/CenterContainer"
import Header from "../../components/Header"
import Text from "../../components/Text"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://www.borastapeter.com/sites/borastapeter.com/files/styles/product_full_l_2x/public/content/paragraphs/alicia_image_roomshot_livingroom_item_2005.jpg?itok=XR5ndrIq&timestamp=1622038491");
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
  background: rgba(0, 0, 0, 0.0);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContentContainer = styled.div`
  padding: 2rem 0.6rem;
  max-width: 90%;
  background: rgba(91, 111, 94, 0.9);
`

function iOSversion() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)
    return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)]
  }
}

/*
ver = iOSversion();

if (ver[0] >= 5) {
  alert('This is running iOS 5 or later.');
}
*/

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
          <Header
            styles={{ fontSize: "1.5rem", marginBottom: "0.5rem", textAlign: 'center', width: '100%' }}
            h1
            text={"View Wallpaper in AR"}
          />
          <Text light style={{ textAlign: "center", marginBottom: 0 }}>
            Press the app banner above to view the wallpaper in your room.
          </Text>
        </ContentContainer>
      </DarkOverlay>
    </Container>
  )
}
