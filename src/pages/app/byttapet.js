import React from "react"
import useOpenAppLink from "../../hooks/open-app-link";

const APP_STORE_LINK = 'https://apps.apple.com/us/app/byttapet/id1619765829';
const Byttapet = () => {
    useOpenAppLink({ ios: APP_STORE_LINK, android: '' });
    return <div></div>;
}

export default Byttapet;
