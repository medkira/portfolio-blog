'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './style.module.scss';
import Button from './Button/Button';
import Menu from './navbar-menu';

export const Navbar = () => {
  const menu = {
    open: {
      width: `var(--costume-width)`, // 480px

      height: 'var(--costume-height)', // 650px

      top: '-25px',

      right: '-25px',

      transition: { duration: 0.65, type: 'tween', ease: [0.76, 0, 0.24, 1] },
    },

    closed: {
      width: '100px',

      height: '40px',

      top: '0px',

      right: '0px',

      transition: {
        duration: 0.65,
        delay: 0.35,
        type: 'tween',
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className={styles.header}>
      <motion.div
        animate={isActive ? 'open' : 'closed'}
        className="relative rounded-[25px] bg-[#674086] 
          [--costume-width:75vw] 
         md:[--costume-width:50vw]   
        lg:[--costume-width:30vw]"
        // [--costume-height:53vh]
        // md:[--costume-height:70vh]
        // lg:[--costume-height:70vh]
        initial="closed"
        variants={menu}
      >
        <AnimatePresence>
          {isActive && (
            <Menu
              toggleMenu={() => {
                setIsActive(!isActive);
              }}
            />
          )}
        </AnimatePresence>
      </motion.div>
      <Button
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </div>
  );
};

/* <ThemeSwitch /> */
