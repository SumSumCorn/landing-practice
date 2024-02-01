import React from 'react';
import styles from './Section.module.scss';
import { Dancing_Script, Single_Day } from 'next/font/google';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaMeta } from 'react-icons/fa6';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
});
const singleDay = Single_Day({ weight: '400' });

const Section = () => {
  return (
    <section className={`${styles.hero}`}>
      <h1 className={`${dancingScript.className} ${styles.title}`}>
        WEB Bakery
      </h1>
      <p className={singleDay.className}>
        엄선된 재료와 식감이 사이 있는 빵.
        <br />
        매일 아침 갓 구운 빵.
        <br />
        빵과 함께 행복한 시간을 만끽해보세요.
      </p>
      <FaXTwitter /> <FaInstagram /> <FaMeta />
    </section>
  );
};

export default Section;
