import { Button } from '@nextui-org/button';
import Link from 'next/link';

import styles from './style.module.scss';

export default function ArrowButtonAnimation({ text }: { text: string }) {
  return (
    <Button
      as={Link}
      className={styles.learnMore}
      href="https://drive.google.com/file/d/1cNAUaRFC9BX6eG6Yn4eR4pouWCGMzVYV/view?usp=sharing"
      target="_blanck"
    >
      <span aria-hidden="true" className={styles.circle}>
        <span className={`${styles.icon} ${styles.arrow}`} />
      </span>
      <span className={styles.buttonText}>{text}</span>
    </Button>
  );
}
