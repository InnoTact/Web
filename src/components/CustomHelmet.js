import React from "react"
import { Helmet } from "react-helmet"

export default ({page = ''}) => {
  return (
    <Helmet>
        <title>{page + 'InnoTact: Augmented Reality (AR) Utvecklare, Göteborg'}</title>
      <meta
        name="description"
        content="Vi är ett IT-bolag från Göteborg som utvecklar appar och lösningar baserade på augmented reality (AR)."
      />
      <meta
        name="keywords"
        content="Augmented Reality, AR, ARKit, ARCore, Göteborg, Mobilapplikationer, 3D"
      />
    </Helmet>
  )
}
