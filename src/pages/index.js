import React from "react"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
import colors from "../styles/colors"
import dimensions from "../styles/dimensions"
import Layout from "../components/Layout"
import { config } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"
import {
  faSoundcloud,
  faStackOverflow,
  faHackerrank,
  faGithub,
  faMedium,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"

config.autoAddCss = false

const Hero = styled("div")`
  padding-top: 2.5em;
  padding-bottom: 3em;
  margin-bottom: 6em;
  max-width: 830px;

  @media (max-width: ${dimensions.maxWidthMobile}px) {
    margin-bottom: 3em;
  }

  h1 {
    margin-bottom: 1em;

    a {
      text-decoration: none;
      transition: all 100ms ease-in-out;
      &:nth-of-type(1) {
        color: ${colors.red500};
      }
      &:nth-of-type(2) {
        color: ${colors.orange500};
      }
      &:nth-of-type(3) {
        color: ${colors.purple500};
      }
      &:nth-of-type(4) {
        color: ${colors.green500};
      }
      &:nth-of-type(5) {
        color: ${colors.teal500};
      }
      &:hover {
        cursor: pointer;
        transition: all 100ms ease-in-out;
        &:nth-of-type(1) {
          color: ${colors.red600};
          background-color: ${colors.red200};
        }
        &:nth-of-type(2) {
          color: ${colors.orange600};
          background-color: ${colors.orange200};
        }
        &:nth-of-type(3) {
          color: ${colors.purple600};
          background-color: ${colors.purple200};
        }
        &:nth-of-type(4) {
          color: ${colors.green600};
          background-color: ${colors.green200};
        }
        &:nth-of-type(5) {
          color: ${colors.teal600};
          background-color: ${colors.teal200};
        }
      }
    }
  }

  .fade-appear {
    opacity: 0.01;
  }

  .fade-appear.fade-appear-active {
    opacity: 1;
    transition: opacity 0.7s ease-in;
  }
`

// const Section = styled("div")`
//     margin-bottom: 10em;
//     display: flex;
//     flex-direction: column;
//
//     @media(max-width:${dimensions.maxWidthTablet}px) {
//         margin-bottom: 4em;
//     }
//
//     &:last-of-type {
//         margin-bottom: 0;
//     }
// `

// const WorkAction = styled(Link)`
//     font-weight: 600;
//     text-decoration: none;
//     color: currentColor;
//     transition: all 150ms ease-in-out;
//     margin-left: auto;
//
//     @media(max-width:${dimensions.maxWidthTablet}px) {
//        margin: 0 auto;
//     }
//
//     span {
//         margin-left: 1em;
//         transform: translateX(-8px);
//         display: inline-block;
//         transition: transform 400ms ease-in-out;
//     }
//
//     &:hover {
//         color: ${colors.blue500};
//         transition: all 150ms ease-in-out;
//
//         span {
//             transform: translateX(0px);
//             opacity: 1;
//             transition: transform 150ms ease-in-out;
//         }
//     }
// `

const IconBar = styled("div")`
  font-size: 1.5rem;
  a {
    cursor: pointer;
    transition: all 100ms ease-in-out;
    color: black;
    margin-right: 1.8rem;
    &:hover {
      cursor: pointer;
      transition: all 100ms ease-in-out;
      color: ${colors.red600};
    }
  }
`

const RenderBody = ({ meta }) => (
  <>
    <Helmet
      title={meta.title}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: meta.title,
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
    <Hero>
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
      >
        <h1>
          <span role={"img"} aria-label={"broken-heart"}>
            💔
          </span>{" "}
          something has <a href={"/"}>crush</a>ed.
        </h1>
        <p>
          apologize, i'm not in mood to update my own website atm.
          <br />
          here some links for you,
        </p>
        <IconBar>
          <a
            href="https://soundcloud.com/ezralazuardy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faSoundcloud} />
          </a>
          <a
            href="https://stackoverflow.com/users/8109202/ezra-lazuardy?tab=profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faStackOverflow} />
          </a>
          <a
            href="https://www.hackerrank.com/ezralazuardy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faHackerrank} />
          </a>
          <a
            href="https://github.com/ezralazuardy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://medium.com/@ezralazuardy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faMedium} />
          </a>
          <a
            href="https://linkedin.com/in/ezralazuardy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:ezralucio@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelopeSquare} />
          </a>
        </IconBar>
      </ReactCSSTransitionGroup>
    </Hero>

    {/*<Section>*/}
    {/*    {projects.map((project, i) => (*/}
    {/*        <ProjectCard*/}
    {/*            key={i}*/}
    {/*            category={project.node.project_category}*/}
    {/*            title={project.node.project_title}*/}
    {/*            description={project.node.project_preview_description}*/}
    {/*            thumbnail={project.node.project_preview_thumbnail}*/}
    {/*            uid={project.node._meta.uid}*/}
    {/*        />*/}
    {/*    ))}*/}
    {/*    <WorkAction to={"/work"}>*/}
    {/*        See more work <span>&#8594;</span>*/}
    {/*    </WorkAction>*/}
    {/*</Section>*/}

    {/*<Section>*/}
    {/*    {RichText.render(home.about_title)}*/}
    {/*    <About*/}
    {/*        bio={home.about_bio}*/}
    {/*        socialLinks={home.about_links}*/}
    {/*    />*/}
    {/*</Section>*/}
  </>
)

export default () => {
  return (
    <Layout>
      <RenderBody />
    </Layout>
  )
}
