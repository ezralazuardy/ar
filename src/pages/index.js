import React from "react"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
import colors from "../styles/colors"
import dimensions from "../styles/dimensions"
import Layout from "../components/Layout"
import LongCard from "../components/LongCard"
import About from "../components/About"
import Button from "../components/_ui/Button"
import Image from "../components/_ui/Image"

const Hero = styled("div")`
  padding-top: 2.5em;
  padding-bottom: 3em;
  margin-bottom: 1em;
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
`

const Section = styled("div")`
    margin-bottom: 7em;
    display: flex;
    flex-direction: column;

    @media(max-width:${dimensions.maxWidthTablet}px) {
        margin-bottom: 4em;
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`

const KKSIBanner = styled("div")`
  margin-top: 2.2rem;
  img {
    max-width: 360px;
    max-height: 52px;
  }
`

const helperModules = [
  {
    title: "Penyiapan Unity",
    description: "Instalasi dan Konfigurasi Software IDE Unity",
    image: "unity.png",
    downloadLink: "https://docs.google.com/document/d/164vL5IYTCh7l7sICxVBORulaPEsgbkwUXWghwL0HHcI/edit?usp=sharing"
  },
  {
    title: "Penyiapan Vuforia",
    description: "Instalasi dan Konfigurasi Pustaka Vuforia untuk Unity",
    image: "vuforia.png",
    downloadLink: "https://docs.google.com/document/d/1ZZOCkPFXdWhcZqb82ZYXhYRm198LuXu6KyTk3IYbd5A/edit?usp=sharing"
  },
  {
    title: "Penyiapan Blender",
    description: "Instalasi dan Pengenalan Software Blender",
    image: "blender.png",
    downloadLink: "https://docs.google.com/document/d/1yK6H-tW1Xq9zfeT2BzprNuU4rTuMDxduOsWRXWMBOjI/edit?usp=sharing"
  }
]

const socialLinks = [
  {
    text: "KKSI 2019",
    url: "http://103.40.55.195/kksi"
  },
  {
    text: "KKSI 2020",
    url: "http://103.40.55.195/kksi2020"
  }
]

const Home = ({ meta }) => (
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
      <h1>
        <span role={"img"} aria-label={"book"}>📖 </span>
        <span>KKSI Augmented Reality</span>
      </h1>
      <p>
        Laman ini memuat rangkuman modul pembantu, referensi, dan dokumentasi untuk KKSI tahun 2020 bidang
        Teknologi AR/VR.<br/><br/>
        <a
          href="http://103.40.55.195/kksi2020/arvr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="Button--secondary">Detail Acara</Button>
        </a>
      </p>
      <KKSIBanner>
        <Image alt={"Logo KKSI"} filename={"kksi.png"} />
      </KKSIBanner>
    </Hero>
    <Section>
      <h2>Modul Pembantu</h2>
      <br/>
      {helperModules.map((module, i) => (
        <LongCard
          key={i}
          title={module.title}
          description={module.description}
          image={module.image}
          downloadLink={module.downloadLink}
        />
      ))}
    </Section>
    <Section>
      <h2>Rekaman Pertemuan Daring</h2>
      <p>
        <span>Rekaman pertemuan daring saat ini belum tersedia </span>
        <span role={"img"} aria-label={"confused"}>😕.</span>
      </p>
    </Section>
    <Section>
      <h2>Referensi</h2>
      <p>
        <span>Referensi saat ini belum tersedia </span>
        <span role={"img"} aria-label={"confused"}>😕.</span>
      </p>
    </Section>
    <Section>
        <h2>Tentang</h2>
        <About
            bio={<>
              Laman web ini digunakan untuk kepentingan dokumentasi KKSI tahun 2020 di bidang Tenologi AR/VR.
              Ditulis dengan 💔 oleh
              <a
                href="https://ezralazuardy.com"
                target="_blank"
                rel="noopener noreferrer"> Ezra Lazuardy</a>
              <span> dan </span>
              <a
                href="https://www.instagram.com/ayubi_/"
                target="_blank"
                rel="noopener noreferrer">Salahudin Al Ayubi</a>.
            </>}
            socialLinks={socialLinks}
        />
    </Section>
  </>
)

export default () => (
  <Layout>
    <Home />
  </Layout>
)
