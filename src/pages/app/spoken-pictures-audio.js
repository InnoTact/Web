import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /*background-image: url("photographer.jpg");*/
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export default function SpokenPicturesAudio() {
    return <Container>
        <h1>Spoken Pictures [LOGGA]</h1>
        <audio controls auto-play src="https://storage.googleapis.com/innotact-resources/spoken-pictures/audio/spoken-pictures-1.wav">Unfortunately your browser does not support the feature to play this audio.</audio>
    </Container>
}