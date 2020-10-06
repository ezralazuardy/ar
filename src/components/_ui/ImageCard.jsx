import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "../../styles/colors"
import PropTypes from "prop-types"
import dimensions from "../../styles/dimensions"
import Image from "./Image"

const ImageCardContainer = styled(Link)`
  border: 1px solid ${colors.grey200};
  border-radius: 3px;
  text-decoration: none;
  color: currentColor;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
  transition: all 150ms ease-in-out;

  &:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
    transition: all 150ms ease-in-out;
    cursor: pointer;

    .ImageCardAction {
      color: ${colors.blue500};
      transition: all 150ms ease-in-out;

      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }
  }
`

const ImageCardHead = styled("div")`
  background: ${colors.grey200};
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  @media (max-width: ${dimensions.maxWidthTablet}px) {
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

const ImageCardBody = styled("div")`
  padding: 3em 2.5em 2.25em 2.5em;
`

const PostCategory = styled("h6")`
  font-weight: 600;
  color: ${colors.grey600};
`

const PostTitle = styled("h3")`
  margin: 0;
  margin-top: 0.5em;
  min-height: 80px;
`

const PostDescription = styled("div")`
  margin-top: 2em;
  margin-bottom: 2em;

  p:last-of-type {
    margin: 0;
  }
`

const ImageCard = ({ title, category, description, image, link }) => (
  <ImageCardContainer to={link} target="_blank" rel="noopener noreferrer">
    <ImageCardHead>
      <Image alt={title} filename={image} />
    </ImageCardHead>
    <ImageCardBody>
      <PostCategory>{category}</PostCategory>
      <PostTitle>{title}</PostTitle>
      <PostDescription>{description}</PostDescription>
    </ImageCardBody>
  </ImageCardContainer>
)

export default ImageCard

ImageCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}
