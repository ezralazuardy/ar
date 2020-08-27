import React from "react"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
import Layout from "../components/Layout"

const ProjectTitle = styled("h1")`
  margin-bottom: 1em;
`

const Project = ({ meta }) => (
  <>
    <Helmet
      title={`Project | Ezra Lazuardy`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: `Project | Ezra Lazuardy`,
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
    <ProjectTitle>Projects</ProjectTitle>
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
)

export default () => {
  const projects = null
  return (
    <Layout>
      <Project projects={projects} />
    </Layout>
  )
}
