import React, { useEffect, useState } from "react"

const getMobileOperatingSystem = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone"
  }

  if (/android/i.test(userAgent)) {
    return "Android"
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS"
  }
  return "unknown"
}

const APP_STORE_LINK = 'https://apps.apple.com/se/app/wonderwall-ar-by-bor%C3%A5stapeter/id1478853508';
const PLAY_STORE_LINK = 'https://play.google.com/store/apps/details?id=com.innotactsoftware.wonderwallar.borastapeter';
const Borastapeter = () => {
  useEffect(() => {
    const os = getMobileOperatingSystem()
    if (os === "iOS") {
        window.location.href = APP_STORE_LINK;
        setTimeout(() => window.history.back(), 1000);
    }
    if (os === 'Android') {
      window.location.href = PLAY_STORE_LINK;
      setTimeout(() => window.history.back(), 1000);
    }
  }, [])

  return <div></div>
}

export default Borastapeter
