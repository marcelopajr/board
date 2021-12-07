/* eslint-disable @next/next/no-img-element */
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export default function SignInButton() {
  const session = true;

  return session ? (
    <button type="button" className={styles.signInButton} onClick={() => {}}>
      <img src="https://github.com/marcelopajr.png" alt="Imagem do usuário" />
      Olá Marcelo
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton} onClick={() => {}}>
      <FaGithub color="#FFB800" />
      Entrar com github
    </button>
  );
}
