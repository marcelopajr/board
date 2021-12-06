import Link from 'next/link';

import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/" passHref>
          <img src="/images/logo.svg" alt="Logo Board" />
        </Link>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/board">
            <a>Meu Board</a>
          </Link>
        </nav>

        <button>Entrar com github</button>
      </div>
    </header>
  );
}
