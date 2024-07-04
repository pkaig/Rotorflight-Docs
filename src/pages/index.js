import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Rotorflightsvg from '/img/Rotorflight3.svg';
import BGV from '/img/BGV.webm';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <div className={styles.wrapper}>
      <video
        src={BGV}
        className={styles.video}
        autoPlay
        playsInline
        loop
        muted
      />
      <div className={styles.mask}></div>
      <Rotorflightsvg className={styles.content} />
    </div>
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
