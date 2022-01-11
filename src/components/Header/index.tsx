import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/images/logo.svg';

import SignInButton from '../SignInButton';

import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/" passHref>
          <a>
            <Image src={logo} alt="Logo Meu board" />
          </a>
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
