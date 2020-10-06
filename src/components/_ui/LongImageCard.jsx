import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import dimensions from "../../styles/dimensions"
import colors from "../../styles/colors"
import PropTypes from "prop-types"
import Image from "./Image"

const LongImageCardContainer = styled(Link)`
  display: grid;
  grid-template-columns: 4fr 7fr;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.15);
  margin-bottom: 4em;
  transition: all 150ms ease-in-out;
  text-decoration: none;
  color: currentColor;

  @media (max-width: 950px) {
    grid-template-columns: 4.5fr 7fr;
  }

  @media (max-width: ${dimensions.maxWidthTablet}px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${dimensions.maxWidthMobile}px) {
    margin-bottom: 2em;
  }

  &:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.25);
    transition: all 150ms ease-in-out;

    .LongImageCardAction {
      color: ${colors.blue500};
      transition: all 150ms ease-in-out;

      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }

    .LongImageCardContent::before {
      opacity: 0.02;
      transition: all 150ms ease-in-out;
    }

    .LongImageCardImageContainer::before {
      opacity: 0.2;
      transition: all 150ms ease-in-out;
    }
  }
`

const LongImageCardContent = styled("div")`
  background: white;
  padding: 4em 3em 2.25em 3em;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: ${colors.blue500};
    mix-blend-mode: multiply;
    opacity: 0;
    transition: all 150ms ease-in-out;
  }

  @media (max-width: 950px) {
    padding: 3.25em 2.5em 2em 2.5em;
  }

  @media (max-width: ${dimensions.maxWidthTablet}px) {
    grid-row: 2;
  }
`

const LongImageCardTitle = styled("h3")`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`

const LongImageCardBlurb = styled("div")`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 5em;

  @media (max-width: ${dimensions.maxWidthTablet}px) {
    margin-bottom: 2.5em;
  }
`

const LongImageCardAction = styled("div")`
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }
`

const LongImageCardImageContainer = styled("div")`
  background: ${colors.grey200};
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  @media (max-width: ${dimensions.maxWidthTablet}px) {
    min-height: 100px;
    max-height: 200px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: ${colors.blue500};
    mix-blend-mode: multiply;
    opacity: 0;
    transition: all 150ms ease-in-out;
  }

  img {
    width: 100%;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
  }
`

const LongImageCard = ({ title, description, image, buttonText, link }) => (
  <LongImageCardContainer to={link} target="_blank" rel="noopener noreferrer">
    <LongImageCardContent className="LongImageCardContent">
      <LongImageCardTitle>{title}</LongImageCardTitle>
      <LongImageCardBlurb>{description}</LongImageCardBlurb>
      <LongImageCardAction className="LongImageCardAction">
        {buttonText} <span>&#8594;</span>
      </LongImageCardAction>
    </LongImageCardContent>
    <LongImageCardImageContainer className="LongImageCardImageContainer">
      <Image alt={title} filename={image} />
    </LongImageCardImageContainer>
  </LongImageCardContainer>
)

export default LongImageCard

LongImageCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}
