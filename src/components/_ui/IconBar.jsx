import React from "react"
import styled from "@emotion/styled"
import colors from "../../styles/colors"
import { config } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"

config.autoAddCss = false

const IconBarContainer = styled("div")`
  font-size: 1.5rem;
  a {
    cursor: pointer;
    transition: all 250ms ease-in-out;
    color: black;
    margin-right: 1.8rem;
    &:hover {
      cursor: pointer;
      transition: all 250ms ease-in-out;
      color: ${colors.red600};
    }
  }
`

const Icon = styled("a")``

const IconBar = ({ icons }) => (
  <IconBarContainer>
    {console.log(icons)}
    {icons.map((icon, i) => (
      <Icon key={i} href={icon.link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={icon.image} />
      </Icon>
    ))}
  </IconBarContainer>
)

export default IconBar

IconBar.propTypes = {
  icons: PropTypes.array.isRequired,
}
