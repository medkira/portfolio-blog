import { motion } from 'framer-motion';
import Link from 'next/link';

import styles from './style.module.scss';
import { perspective, slideIn } from './animation';

import { siteConfig } from '@/config/site';

export default function index() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {siteConfig.navMenuItems.map((link, i) => {
          const { label, href } = link;

          return (
            // className={styles.linkContainer}
            <div key={`b_${i}`}>
              <motion.div
                animate="enter"
                className="h-fit w-fit "
                custom={i}
                exit="exit"
                initial="initial"
                transition={{ type: 'spring', stiffness: 300 }}
                variants={perspective}
                whileHover={{ scale: 1.25, originX: 0 }}
                // href={href}
              >
                <Link
                  className="text-[2rem] text-black sm:text-[2.2rem] "
                  href={href}
                >
                  {label}
                </Link>
                {/* <a href={href}>{label}</a> */}
              </motion.div>
            </div>
          );
        })}
      </div>

      <motion.div className={styles.footer}>
        {siteConfig.links.map((link, i) => {
          const { label, href } = link;

          return (
            <motion.a
              key={`f_${i}`}
              animate="enter"
              className=" mr-6 "
              custom={i}
              exit="exit"
              href={href}
              initial="initial"
              variants={slideIn}
              whileHover={{ scale: 1.25, originX: 0 }}
              //   transition={{ type: 'spring', stiffness: 300 }}
            >
              {label}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
