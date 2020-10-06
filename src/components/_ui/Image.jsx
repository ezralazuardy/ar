import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      if (!props.filename) return null
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) return null
      if(props.width) return <Img
        alt={props.alt}
        fluid={image.node.childImageSharp.fluid}
        imgStyle={{ objectFit: "contain" }}
        style={{ width: `${props.width}px` }}
      />
      return <Img
        alt={props.alt}
        fluid={image.node.childImageSharp.fluid}
        imgStyle={{ objectFit: "contain" }}
      />
    }}
  />
)

export default Image