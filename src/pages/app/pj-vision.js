import React from "react"
import useOpenAppLink from "../../hooks/open-app-link";

const APP_STORE_LINK = 'https://apps.apple.com/us/app/pj-vision/id1555510992';
const PLAY_STORE_LINK = 'https://play.google.com/store/apps/details?id=com.innotactsoftware.wonderwallar.phillipjeffries'
const PJVision = () => {
    useOpenAppLink({ ios: APP_STORE_LINK, android: PLAY_STORE_LINK });
    return <div></div>;
}

export default PJVision;
