import React from "react"
import InfoCell from "../classes/InfoCell"
import solutionTranslation from "../translations/ar-solutions"
import InfoGrid from "./InfoGrid"
import LocalizedStrings from "react-localization"

export default function SolutionSection() {
  const s = new LocalizedStrings(solutionTranslation)

  return (
    <InfoGrid
      title={s.title}
      infoCells={[
        new InfoCell(
          s.teaching.title,
          s.teaching.description
        ),
        new InfoCell(
          s.marketing.title,
          s.marketing.description
        ),
        new InfoCell(
          s.modelling.title,
          s.modelling.description
        ),
        new InfoCell(
          s.navigation.title,
          s.marketing.description
        ),
        new InfoCell(s.AI.title, s.AI.description),
        new InfoCell(
          s.commerce.title,
          s.commerce.description
        ),
      ]}
    />
  )
}
