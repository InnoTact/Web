import React from "react"
import { Helmet } from "react-helmet"
import LocalizedStrings from "react-localization"
import translation from "../translations/home"

export default ({ seo, overrideTitle = false }) => {
  const fallback = new LocalizedStrings(translation)
  seo = seo ? seo : fallback.seo
  let lang = fallback._language ? fallback._language : "en"
  
  return (
    <Helmet htmlAttributes={{ lang: lang }}>
      <title>{overrideTitle ? seo.title : seo.title + " – InnoTact"}</title>
      <meta name="description" content={seo.description} />
      <meta
        name="keywords"
        content="Augmented Reality, AR, ARKit, ARCore, Göteborg, Mobilapplikationer, 3D"
      />
    </Helmet>
  )
}
