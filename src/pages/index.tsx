// import type {ReactNode} from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import Heading from '@theme/Heading';

// import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home(): ReactNode {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './index.module.css';
import { JSX } from 'react/jsx-runtime';


export default function HomePage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <header className={clsx('hero', styles.heroBanner)}>
        <div className={clsx('container', styles.heroContent)}>
          <img
            src="/img/dark-logo.svg"
            className={styles.heroImage}
            alt="Логотип Devcolibri"
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              Начать обучение
            </Link>
          </div>
        </div>
      </header>
      <main className={styles.mainSection}>
        <section className={styles.featureSection}>
          <div className="container">
            <h2 className="text--center">Почему выбирают Devcolibri?</h2>
            <div className="row">
              <div className="col col--4 text--center">
                <h3>Актуальные знания</h3>
                <p>Материалы обновляются вместе с Android и Kotlin.</p>
              </div>
              <div className="col col--4 text--center">
                <h3>Практика с первого дня</h3>
                <p>Реальные задачи, код, проекты и мини-собеседования.</p>
              </div>
              <div className="col col--4 text--center">
                <h3>Поддержка комьюнити</h3>
                <p>Чат, статьи, курсы, обсуждения и помощь от коллег.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}