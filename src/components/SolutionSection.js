import React from "react"
import InfoCell from "../classes/InfoCell"
import solutionTranslation from "../translations/ar-solutions"
import InfoGrid from "./InfoGrid"
import LocalizedStrings from "react-localization"
import colors from "../styles/colors"

export default function SolutionSection({ light }) {
  const s = new LocalizedStrings(solutionTranslation)

  return (
    <InfoGrid
      light={light}
      title={s.title}
      infoCells={[
        new InfoCell(
          s.commerce.title,
          s.commerce.description
        ),
        new InfoCell(
          s.modelling.title,
          s.modelling.description
        ),
        new InfoCell(
          s.marketing.title,
          s.marketing.description
        ),
        new InfoCell(
          s.teaching.title,
          s.teaching.description
        ),
        new InfoCell(
          s.navigation.title,
          s.marketing.description
        ),
        new InfoCell(s.AI.title, s.AI.description),
      ]}
    />
  )
}
