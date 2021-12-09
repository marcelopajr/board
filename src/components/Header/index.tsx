/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import SignInButton from '../SignInButton';

import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/" passHref>
          <img src="/images/logo.svg" alt="Logo Meu board" />
        </Link>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/board">
            <a>Meu Board</a>
          </Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
