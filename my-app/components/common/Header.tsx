import React from 'react';
import Link from 'next/link';
import styles from '../../src/styles/header.module.scss';
import Image from 'next/image';

interface Props {}

const HeaderComponent = ({}: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link href="/" className={styles.box}>
          <Image
            src="https://lecture-1.vercel.app/inflearn.png"
            width={110}
            height={20}
            alt="인프런 로고"
          />
        </Link>
      </div>
    </header>
  );
};

export default HeaderComponent;
