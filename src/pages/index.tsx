import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Box, { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from '@theme/IdealImage';
import image1 from '../../static/img/landing-page-image-1.png';
import image2 from '../../static/img/landing-page-image-2.png';
import ImageUrl from '@site/static/img/landing-page-image-1.png'
import styles from './index.module.css';

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 3,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        ...sx,
      }}
      {...other}
    />
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const additionalDescription = "While the world wastes about 1.4 billion tons of food2 every year, the United States discards more food than any other country in the world: nearly 40 million tons...That’s like every person in America throwing more than 650 averagesized apples right into the garbage — or rather right into landfills, as most discarded food ends up there";


  return (

    <Box
      sx={{
        display: 'flex-column',
        m: 1,
        p: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
      }}
    >

      {/* First Block */}
      <Item sx={{bgcolor: '#B8DCEE'}}>
       <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>{additionalDescription}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Read
          </Link>
        </div>
      </Item>

      {/* Our Mission */}
      <Item >
        <h1 className="hero__title">Our Mission</h1>
        <p className="hero__subtitle">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      </Item>

      {/* The problem is numbers */}
      <Item sx={{bgcolor: '#B8DCEE'}}>
        <h1 className="hero__title">The Problem in Numbers</h1>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignContent: "space-between",
            m: 2
          }}
        >
          <Image img={image1}  />
          <div style={{margin: 2}}>
            <p className="hero__subtitle">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignContent: "space-between",
            m: 2
          }}
        >
          <p className="hero__subtitle">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          <Image img={image2} />
        </Box>
        
      </Item>

      {/* Our Solution */}
      <Item
      >
        <h1 className="hero__title">Our Solution</h1>
        <p className="hero__subtitle">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignContent: "space-between"
          }}
        >
          <Button
            href="/docs/intro"
            sx={{
              borderRadius: 3,
              bgcolor: '#B8DCEE', 
              m: 3, 
              p: 2, 
              fontSize: '1.3rem',
              fontWeight: '700',
            }}
          >
            Take Action
          </Button>
          <Button
            href="/docs/intro"
            sx={{
              borderRadius: 3,
              bgcolor: '#B8DCEE', 
              m: 3, 
              p: 2, 
              fontSize: '1.3rem',
              fontWeight: '700',
            }}
          >
            Take Quiz
          </Button>
        </Box>
      </Item>
    </Box>
    // <header className={clsx('hero hero--primary', styles.heroBanner)}>

    // </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
