import React from "react"
import useOpenAppLink from "../../hooks/open-app-link"

const APP_STORE_LINK = 'https://apps.apple.com/se/app/wonderwall-ar-by-bor%C3%A5stapeter/id1478853508';
const PLAY_STORE_LINK = 'https://play.google.com/store/apps/details?id=com.innotactsoftware.wonderwallar.borastapeter';
const Borastapeter = () => {
  useOpenAppLink({ios: APP_STORE_LINK, android: PLAY_STORE_LINK});
  return <div></div>
}

export default Borastapeter
