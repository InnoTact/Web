import React from "react"
import LocalizedStrings from "react-localization"
import translation from "../translations/get-started"
import ActionSection from "./ActionSection"

export default ({ dark }) => {
  const strings = new LocalizedStrings(translation)

  return (
    <ActionSection
      dark={dark}
      title={strings.title}
      description={strings.description}
      btnText={strings.button}
      link={"/contact/#contact-form"}
    />
  )
}
