import React from 'react'
import { Helmet } from "react-helmet"

export default function borastapeter() {
    return (
        <div>
            <Helmet>
                <title>Wonderwall AR By Boråstapeter</title>
                <meta 
                name="apple-itunes-app" 
                content="app-clip-bundle-id=InnoTact.Borastapeter.Clip, app-id=N3QW3RP8Y5"
                ></meta>
            </Helmet>
            <p>
            Press the app banner above to launch the AR experience.
            </p>
        </div>
    )
}
