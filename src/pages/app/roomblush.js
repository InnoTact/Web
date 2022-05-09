import React from "react"
import useOpenAppLink from "../../hooks/open-app-link";

const APP_STORE_LINK = 'https://apps.apple.com/se/app/roomblush-room-decorator/id1553935220';
const PLAY_STORE_LINK = 'https://play.google.com/store/apps/details?id=com.innotactsoftware.wonderwallar.roomblush'
const RoomBlush = () => {
    useOpenAppLink({ ios: APP_STORE_LINK, android: PLAY_STORE_LINK });
    return <div></div>;
}

export default RoomBlush;
