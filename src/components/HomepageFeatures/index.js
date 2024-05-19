import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Governor',
    Svg: require('@site/static/img/governor.svg').default,
    description: (
      <>Governor with precompensation
      </>
    ),
},
{
    title: 'Advanced Filtering',
    Svg: require('@site/static/img/advanced-filtering.svg').default,
    description: (
      <>
        Identify and filter
      </>
    ),
  },
  {
    title: 'Tuning from the Transmitter',
    Svg: require('@site/static/img/radio-tuning.svg').default,
    description: (
      <>
        Use 'LUA script' or 'adjustments' to tune your helicopter at the field 
      </>
    ),
  },
  {
    title: 'Rescue Mode',
    Svg: require('@site/static/img/rescue-mode.svg').default,
    description: (
      <>
        Rescue mode to auto level and gain altitude
      </>
    ),
  },
  {
    title: 'Motorised tail support',
    Svg: require('@site/static/img/motorised.svg').default,
    description: (
      <>
        Motorised tail support with TTA
      </>
    ),
  },
  {
    title: 'ESC Telemetry',
    Svg: require('@site/static/img/esc-telemetry.svg').default,
    description: (
      <>
        Read telemetry data from a wide range of ESCs
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
