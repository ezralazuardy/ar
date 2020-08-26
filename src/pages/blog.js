import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const BlogTitle = styled("h1")`
  margin-bottom: 1em;
`

// const BlogGrid = styled("div")`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-gap: 2.5em;
//
//   @media (max-width: 1050px) {
//     grid-template-columns: repeat(2, 1fr);
//     grid-gap: 1.5em;
//   }
//
//   @media (max-width: ${dimensions.maxWidthMobile}px) {
//     grid-template-columns: 1fr;
//     grid-gap: 2.5em;
//   }
// `

const Blog = ({ meta }) => (
  <>
    <Helmet
      title={`Blog | Ezra Lazuardy`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: `Blog | Prist, Gatsby & Prismic Starter`,
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
      <BlogTitle>Blog</BlogTitle>
      {/*<BlogGrid>*/}
      {/*  {posts.map((post, i) => (*/}
      {/*    <PostCard*/}
      {/*      key={i}*/}
      {/*      author={post.node.post_author}*/}
      {/*      category={post.node.post_category}*/}
      {/*      title={post.node.post_title}*/}
      {/*      date={post.node.post_date}*/}
      {/*      description={post.node.post_preview_description}*/}
      {/*      uid={post.node._meta.uid}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</BlogGrid>*/}
    </Layout>
  </>
)

export default ({ data }) => {
  const meta = data.site.siteMetadata
  const posts = null
  return <Blog meta={meta} posts={posts} />
}

Blog.propTypes = {
  meta: PropTypes.object.isRequired,
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
