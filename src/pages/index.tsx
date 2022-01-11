import { useState } from 'react';
import { GetStaticProps } from 'next';
import firebase from '../services/firebaseConnection';
import Head from 'next/head';
import Image from 'next/image';
import boardUser from '../../public/images/board-user.svg';

import styles from '../styles/styles.module.scss';

type Data = {
  id: string;
  donate: boolean;
  lastDonate: Date;
  image: string;
};

interface HomeProps {
  data: string;
}

export default function Home({ data }: HomeProps) {
  const [donaters, setDonaters] = useState<Data[]>(JSON.parse(data));

  return (
    <>
      <Head>
        <title>Board | Organizando tarefas</title>
      </Head>
      <main className={styles.contentContainer}>
        <Image src={boardUser} alt="Ferramenta board" />

        <section className={styles.callToAction}>
          <h1>
            Uma ferramenta para seu dia a dia. Escreva, planeje e organize-se...
          </h1>
          <p>
            <span>100% gratuita</span> e online.
          </p>
        </section>

        {donaters.length !== 0 && <h3>Apoiadores:</h3>}
        <div className={styles.donators}>
          {donaters.map((item) => (
            <Image
              key={item.image}
              width={65}
              height={65}
              src={item.image}
              alt="Foto de usuário"
              objectFit="fill"
            />
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const donaters = await firebase.firestore().collection('users').get();

  const data = JSON.stringify(
    donaters.docs.map((item) => {
      return {
        id: item.id,
        ...item.data(),
      };
    }),
  );

  return {
    props: { data },
    revalidate: 60 * 60, // Update every 60 minutes
  };
};
