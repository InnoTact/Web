import { useEffect } from "react"

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

const useOpenAppLink = (linksData) => {
    const iosLink = linksData.ios;
    const androidLink = linksData.android;
    useEffect(() => {
        const os = getMobileOperatingSystem()
        if (os === "iOS" && iosLink) {
            window.location.href = iosLink;
            setTimeout(() => window.history.back(), 1000);
        }
        if (os === 'Android' && androidLink) {
            window.location.href = androidLink;
            setTimeout(() => window.history.back(), 1000);
        }
    }, []);
}

export default useOpenAppLink;