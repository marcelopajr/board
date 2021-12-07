/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/styles.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Board | Organizando tarefas</title>
      </Head>
      <main className={styles.contentContainer}>
        <Image
          src="/images/board-user.svg"
          alt="Ferramenta Board"
          width={600}
          height={500}
        />

        <section className={styles.callToAction}>
          <h1>
            Uma ferramenta para seu dia a dia. Escreva, planeje e organize-se...
          </h1>
          <p>
            <span>100% gratuita</span> e online.
          </p>
        </section>

        <div className={styles.donators}>
          <img src="https://github.com/marcelopajr.png" alt="Usuário 1" />
        </div>
      </main>
    </>
  );
}
