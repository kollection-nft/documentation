import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
const FeatureList = [
  {
    title: 'Developer Docs',
    src: 'img/dev.png',
    description: (
      <>
        Launch your own NFT collection on Koinos. Read and learn.
      </>
    ),
    link: "/docs/developers/intro",
    linktext: "LEARN MORE"
  },
  {
    title: 'API Docs',
    src: 'img/kollection-api.png',
    description: (
      <>
        Discover the Kollection public API.
      </>
    ),
    link: "/docs/developers/api",
    linktext: "API"
  },
  {
    title: 'User Docs',
    src: 'img/customer.png',
    description: (
      <>
        Learn the basics of NFTs and Kollection!
      </>
    ),
    link: "/docs/learn/howtouse",
    linktext: "LEARN MORE"
  },
];

function Feature({ src, title, description, link, linktext }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.img} role="img" src={src} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link
          className="button button--secondary button--lg"
          to={link}>
          {linktext}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row flex-between" style={{justifyContent: "center", margin: "20px 0"}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
