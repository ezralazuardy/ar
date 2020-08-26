import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const ProjectTitle = styled("h1")`
  margin-bottom: 1em;
`

const Project = ({ meta }) => (
  <>
    <Helmet
      title={`Projects | Ezra Lazuardy`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: `Work | Prist, Gatsby & Prismic Starter`,
        },
        {
          property: `og:description`,
          content: meta.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: meta.author,
        },
        {
          name: `twitter:title`,
          content: meta.title,
        },
        {
          name: `twitter:description`,
          content: meta.description,
        },
      ].concat(meta)}
    />
    <Layout>
      <ProjectTitle>Projects</ProjectTitle>
      <>
        {/*{projects.map((project, i) => (*/}
        {/*  <ProjectCard*/}
        {/*    key={i}*/}
        {/*    category={project.node.project_category}*/}
        {/*    title={project.node.project_title}*/}
        {/*    description={project.node.project_preview_description}*/}
        {/*    thumbnail={project.node.project_preview_thumbnail}*/}
        {/*    uid={project.node._meta.uid}*/}
        {/*  />*/}
        {/*))}*/}
      </>
    </Layout>
  </>
)

export default ({ data }) => {
  const meta = data.site.siteMetadata
  const projects = null
  return <Project meta={meta} projects={projects} />
}

Project.propTypes = {
  meta: PropTypes.array.isRequired,
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
