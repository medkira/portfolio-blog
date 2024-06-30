import { Button } from '@nextui-org/button';
import Link from 'next/link';

import styles from './style.module.scss';

export default function ArrowButtonAnimation({ text }: { text: string }) {
  return (
    <Button
      as={Link}
      className={styles.learnMore}
      href="https://drive.google.com/file/d/1uAMNAiAjfMnzgzNuZnNx8CXH4_QAmQYY/view"
      target="_blanck"
    >
      <span aria-hidden="true" className={styles.circle}>
        <span className={`${styles.icon} ${styles.arrow}`} />
      </span>
      <span className={styles.buttonText}>{text}</span>
    </Button>
  );
}
