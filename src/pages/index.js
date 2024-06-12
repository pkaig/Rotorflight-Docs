import React from 'react';
import ReactPlayer from 'react-player'
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Rotorflightsvg from '/img/Rotorflight3.svg';
import BGV from '/img/BGV.webm'
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
        <header className={clsx('box', styles.box)}>
            <meta name="viewport" content="user-scalable=no,width=device-width, initial-scale=1"></meta>
            <video src={BGV} className={clsx('Video', styles.video)} loop autoPlay muted/>
            <div className={clsx('Banner', styles.Banner)}>
            <meta name="viewport2" content="user-scalable=no,width=device-width, initial-scale=1"></meta>
                <h1 className={styles.Svg}><Rotorflightsvg /></h1>
            </div>
        </header>

  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Homepage`}
      description="Opensource Helicopter Flight Controller <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
