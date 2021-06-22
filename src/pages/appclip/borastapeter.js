import React from "react"
import { Helmet } from "react-helmet"
import CenterContainer from "../../components/CenterContainer"
import Header from "../../components/Header"
import Text from "../../components/Text"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://www.borastapeter.com/sites/borastapeter.com/files/mirage_image_roomshot_livingroom_item_7260.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
`

const ContentContainer = styled.div`
  padding: 2rem 0.6rem;
  max-width: 90%;
  background: rgba(91, 111, 94, 0.95);
  position: relative;
  top: -60px;
`

const Arrow = styled.img`
  position: absolute;
  top: 12px;
  right: 40px;
  width: 40px;
  height: 100px;
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
      <Helmet>
        <title>Wonderwall AR By Boråstapeter</title>
        <meta
          name="apple-itunes-app"
          content="app-clip-bundle-id=InnoTact.Borastapeter.Clip, app-id=N3QW3RP8Y5"
        ></meta>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Helmet>
      <i style={{ fontSize: 68, position: 'absolute', top: 5, right: 25, color: 'rgb(91, 111, 94)' }} class="fas fa-arrow-up"></i>
      <ContentContainer>
        <Header
          styles={{
            fontSize: "1.5rem",
            marginBottom: "0.5rem",
            textAlign: "center",
            width: "100%",
          }}
          h1
          text={"View Wallpaper in AR"}
        />
        <Text light style={{ textAlign: "center", marginBottom: 0 }}>
          Press the app banner above to view the wallpaper in your room.
        </Text>
      </ContentContainer>
    </Container>
  )
}
