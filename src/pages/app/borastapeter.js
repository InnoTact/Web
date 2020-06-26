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
const Borastapeter = () => {
  useEffect(() => {
    const os = getMobileOperatingSystem()
    if (os === "iOS") {
        window.location.href = APP_STORE_LINK;
        setTimeout(() => history.back(), 1000);
    }
  }, [])

  return <div></div>
}

export default Borastapeter
