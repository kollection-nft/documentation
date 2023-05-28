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
        You're a developer and want to launch your own NFT collection on Koinos? Perfect. We have the docs! Read and learn.
      </>
    ),
    link: "/docs/developers/intro",
    linktext: "LEARN MORE"
  },
  {
    title: 'User Docs',
    src: 'img/customer.png',
    description: (
      <>
        Learn the basics of NFTs and Kollection, the digital collectibles marketplace with no gas fees on the Koinos blockchain.
      </>
    ),
    link: "/docs/learn/howtouse",
    linktext: "LEARN MORE"
  },
];

function Feature({ src, title, description, link, linktext }) {
  return (
    <div className={clsx('col col--6')}>
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
        </Link><br></br><br></br>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row flex-between">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
