import { motion } from 'framer-motion';

import styles from './style.module.scss';

export default function Button({
  isActive,
  toggleMenu,
}: {
  isActive: Boolean;
  toggleMenu: any;
}) {
  return (
    <div className={styles.button}>
      <motion.div
        animate={{ top: isActive ? '-100%' : '0%' }}
        className={styles.slider}
        transition={{ duration: 0.5, type: 'tween', ease: [0.76, 0, 0.24, 1] }}
      >
        <button
          className={styles.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Menu" />
        </button>

        <button
          className={styles.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Close" />
        </button>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }: { label: string }) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
