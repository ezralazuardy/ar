import React from "react"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
import colors from "../styles/colors"
import dimensions from "../styles/dimensions"
import Layout from "../components/Layout"
import About from "../components/About"
import LongImageCard from "../components/_ui/LongImageCard"
import ImageCard from "../components/_ui/ImageCard"
import PostCard from "../components/_ui/PostCard"
import Image from "../components/_ui/Image"
import Button from "../components/_ui/Button"

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

const ButtonBar = styled("div")`
  margin-top: 2rem;

  @media (max-width: ${dimensions.maxWidthMobile}px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`

const ButtonBarRow = styled("a")`
  margin-right: 1rem;
`

const KKSIBanner = styled("div")`
  margin-top: 2rem;
`

const PostGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5em;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5em;
  }

  @media (max-width: ${dimensions.maxWidthMobile}px) {
    grid-template-columns: 1fr;
    grid-gap: 2.5em;
  }
`

const helperModules = [
  {
    title: "Penyiapan Unity",
    description: "Instalasi dan Konfigurasi Software Unity IDE",
    image: "unity.png",
    buttonText: "Baca",
    downloadLink: "https://docs.google.com/document/d/164vL5IYTCh7l7sICxVBORulaPEsgbkwUXWghwL0HHcI/edit?usp=sharing",
  },
  {
    title: "Penyiapan Vuforia",
    description: "Instalasi dan Konfigurasi Vuforia SDK untuk Unity",
    image: "vuforia.png",
    buttonText: "Baca",
    link: "https://docs.google.com/document/d/1ZZOCkPFXdWhcZqb82ZYXhYRm198LuXu6KyTk3IYbd5A/edit?usp=sharing",
  },
  {
    title: "Penyiapan Blender",
    description: "Instalasi dan Konfigurasi Software Blender",
    image: "blender.png",
    buttonText: "Baca",
    link: "https://docs.google.com/document/d/1yK6H-tW1Xq9zfeT2BzprNuU4rTuMDxduOsWRXWMBOjI/edit?usp=sharing",
  },
]

const assets = [
  {
    title: "Gambar Latar Aplikasi",
    category: "Aset Proyek",
    description: "Gambar latar (background) aplikasi AR yang digunakan pada pembelajaran sesi 5",
    image: "rar.png",
    referenceLink: "https://drive.google.com/file/d/1D_SjAt64iLo8yFOkGhU4OILv4arpytwA/view?usp=sharing",
  },
  {
    title: "Image Target",
    category: "Aset Proyek",
    description: "Image Target AR yang digunakan pada pembelajaran sesi 8",
    image: "rar.png",
    referenceLink: "https://drive.google.com/file/d/1-EPVaY0mlfekLhUMqO4ueixhXol13bsy/view?usp=sharing",
  },
]

const recordedVideos = [
  {
    title: "Pertemuan 3",
    author: "Alfan Pujo Laksono",
    category: "Rekaman Daring",
    date: "09/30/2020",
    description: "Pengenalan Augmented Reality",
    buttonText: "Tonton",
    videoLink: "https://youtu.be/uGU8ngSaYhs",
  },
  {
    title: "Pertemuan 4",
    author: "Tim SMK Negeri 7 Semarang",
    category: "Rekaman Daring",
    date: "10/06/2020",
    description: "Pra Produksi Instalasi dan Konfigurasi Unity, Vuforia, Android SDK, dan Blender",
    buttonText: "Tonton",
    videoLink: "https://youtu.be/mvFF7KsZ5lg",
  },
  {
    title: "Pertemuan 5",
    author: "Tim SMK Negeri 7 Semarang",
    category: "Rekaman Daring",
    date: "10/07/2020",
    description: "Perancangan UI & UX Aplikasi Android Augmented Reality",
    buttonText: "Tonton",
    videoLink: "https://youtu.be/BQ4uUXXygHA",
  }
]

const references = [
  {
    title: "Unity untuk Pemula",
    category: "Playlist Youtube",
    description: "Dasar-dasar penggunaan software Unity IDE untuk pemula",
    image: "video.png",
    referenceLink: "https://www.youtube.com/playlist?list=PL0mnovdNUHinN9ssNIb-d0LxNo20Zgvs3",
  },
  {
    title: "Membuat Interface Aplikasi dengan Unity",
    category: "Playlist Youtube",
    description: "Pembuatan User Interface aplikasi dengan Unity",
    image: "video.png",
    referenceLink: "https://www.youtube.com/playlist?list=PL0mnovdNUHikNDRY6z6W4zcJFsioWc19H",
  },
  {
    title: "Penggunaan Vuforia pada Unity",
    category: "Playlist Youtube",
    description: "Implementasi AR menggunakan Vuforia pada Unity",
    image: "video.png",
    referenceLink: "https://www.youtube.com/playlist?list=PLX2vGYjWbI0Thl0pOCbKWrbbiw7RWiRG7",
  },
  {
    title: "Buku Panduan Augmented Reality",
    category: "Dokumen",
    description: "Panduan singkat tentang teknologi Augmented Reality secara general",
    image: "pdf.png",
    referenceLink: "https://drive.google.com/file/d/1s6Wzfp7a8gbIRNYWObljQ89IPHAknc7d/view?usp=sharing",
  },
  {
    title: "Pembuatan Proyek AR dengan Unity",
    category: "Dokumen",
    description: "Pembuatan proyek aplikasi Augmented Reality dengan Unity",
    image: "pdf.png",
    referenceLink: "https://drive.google.com/file/d/1b-h25VvNw0qRqsZFSWc3t64uFFKIA2MZ/view?usp=sharing",
  },
  {
    title: "Aspek Hukum dari Bisnis Daring",
    category: "Dokumen",
    description: "Presentasi tentang aspek hukum dari bisnis daring oleh FH UNPAD",
    image: "pdf.png",
    referenceLink: "https://drive.google.com/file/d/1zULBvA4ESH9dUSxQwsqsm1q9f0TQnS4u/view?usp=sharing",
  },
  {
    title: "Belajar Bisnis bersama SIKEPO",
    category: "Dokumen",
    description: "Presentasi tentang pembelajaran bisnis oleh SMK TI Cimahi",
    image: "pdf.png",
    referenceLink: "https://drive.google.com/file/d/1qZBGzWskrHW_MjuaHjy8vCyRJ-iwLZRK/view?usp=sharing",
  },
  {
    title: "Bisnis Daring dan Pemasaran",
    category: "Dokumen",
    description: "Presentasi tentang bisnis daring dan pemasaran oleh SMK Metland School",
    image: "pdf.png",
    referenceLink: "https://drive.google.com/file/d/1uZjk95m58JSWuizr0NFn-QPKEB91X4Vw/view?usp=sharing",
  },
  {
    title: "Pembukaan acara KKSI 2020",
    category: "Dokumen",
    description: "Presentasi pembukaan acara KKSI tahun 2020 oleh DITJEN DIKSI KEMDIKBUD",
    image: "pdf.png",
    referenceLink: "https://drive.google.com/file/d/1spgfKhbEDwKcl5tjabACZ6JBRxMvfuEi/view?usp=sharing",
  },
  {
    title: "Kelas Daring Augmented Reality",
    category: "Kelas Daring",
    description: "Kelas daring untuk pengembangan dasar aplikasi Augmented Reality oleh SEAMOLEC",
    image: "web.png",
    referenceLink: "http://mooc.seamolec.org/courses/course-v1:SEAMOLEC+ARMDL01+2019_07/about",
  },
]

const socialLinks = [
  {
    text: "KKSI 2019",
    url: "http://103.40.55.195/kksi",
  },
  {
    text: "KKSI 2020",
    url: "http://103.40.55.195/kksi2020",
  },
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
        Teknologi AR/VR.
        <ButtonBar>
          <ButtonBarRow
            href="http://103.40.55.195/kksi2020/arvr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="Button--secondary">Detail Acara</Button>
          </ButtonBarRow>
          <ButtonBarRow
            href="https://drive.google.com/file/d/1j1PdbLoy_0RmSd-2niApPBKUMV6GdVjO/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="Button--secondary">Jadwal Acara</Button>
          </ButtonBarRow>
          <ButtonBarRow
            href="https://t.me/kksi2020_augmented_reality"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="Button--secondary">Grup Telegram</Button>
          </ButtonBarRow>
        </ButtonBar>
      </p>
      <KKSIBanner>
        <Image alt={"Logo KKSI"} filename={"kksi.png"} width={369} />
      </KKSIBanner>
    </Hero>
    <Section>
      <h2>Modul Pembantu</h2>
      {helperModules.map((module, i) => (
        <LongImageCard
          key={i}
          title={module.title}
          description={module.description}
          image={module.image}
          buttonText={module.buttonText}
          link={module.link}
        />
      ))}
    </Section>
    <Section>
      <h2>Contoh Aset</h2>
      <PostGrid>
        {assets.map((asset, i) => (
          <ImageCard
            key={i}
            title={asset.title}
            category={asset.category}
            description={asset.description}
            image={asset.image}
            link={asset.referenceLink}
          />
        ))}
      </PostGrid>
    </Section>
    <Section>
      <h2>Rekaman Pertemuan Daring</h2>
      <PostGrid>
        {recordedVideos.map((video, i) => (
          <PostCard
            key={i}
            title={video.title}
            author={video.author}
            category={video.category}
            date={video.date}
            description={video.description}
            buttonText={video.buttonText}
            link={video.videoLink}
          />
        ))}
      </PostGrid>
    </Section>
    <Section>
      <h2>Referensi</h2>
      <PostGrid>
        {references.map((reference, i) => (
          <ImageCard
            key={i}
            title={reference.title}
            category={reference.category}
            description={reference.description}
            image={reference.image}
            link={reference.referenceLink}
          />
        ))}
      </PostGrid>
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
            href="https://porto-salahudin.azurewebsites.net/"
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
    <Home/>
  </Layout>
)
