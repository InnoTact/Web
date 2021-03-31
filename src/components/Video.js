import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div style={{ textAlign: 'center' }}>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      style={{
          height: 600,
          width: '90%'
          
        //   position: 'absolute',
        //   width: '100vw'
      }}
    />
  </div>
)

export default Video