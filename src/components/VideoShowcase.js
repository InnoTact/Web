import React, { Component, Fragment } from "react"
import Capability from '../components/Capability'
import styled from "styled-components"

const VideoContainer = styled.iframe`
  width: 100%;
  height: 100%;
`

const YOUTUBE_URL_PARAMETERS = `?autoplay=1&hl=swe&iv_load_policy=3&loop=1&modestbranding=1&mute=1&controls=0`

export default class VideoShowcase extends Component {
  render() {
    const video1URL = `https://www.youtube.com/embed/GBGahn0cACI${YOUTUBE_URL_PARAMETERS}`

    return (
      <Fragment>
        <Capability
          buttonText="Kom igång"
          header="Staketapplikation"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        >
          <VideoContainer src={video1URL} frameBorder={0} />
        </Capability>
        <Capability
        textLeft
          buttonText="Kom igång"
          header="Tapetapplikation"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        >
          <VideoContainer src={video1URL} frameBorder={0} />
        </Capability>
      </Fragment>
    )
  }
}
