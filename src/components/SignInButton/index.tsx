import { signIn, signOut, useSession } from 'next-auth/client';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export default function SignInButton() {
  const [session] = useSession();

  return session ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      <div>
        <Image
          width={35}
          height={35}
          src={session.user.image}
          alt="Imagem do usuário"
          objectFit="fill"
        />
      </div>
      Olá {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#FFB800" />
      Entrar com github
    </button>
  );
}
