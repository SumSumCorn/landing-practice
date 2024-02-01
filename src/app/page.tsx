import Image from 'next/image';
import bg from '@/assets/images/bread1.jpg';
import bg2 from '@/assets/images/bread2.jpg';
import Section from '@/components/Section';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.scrollWrapper}>
      <div className={styles.sectionWrapper}>
        <Image
          src={bg}
          alt='bg'
          fill
          style={{ zIndex: -1, objectFit: 'cover' }}
        />
        <Section />
      </div>
      <div className={styles.sectionWrapper}>
        <Image
          src={bg2}
          alt='bg2'
          fill
          style={{ zIndex: -1, objectFit: 'cover' }}
        />
        <Section />
      </div>
      <div className={styles.sectionWrapper}>
        <Image
          src={bg2}
          alt='bg2'
          fill
          objectFit='cover'
          style={{ zIndex: -1 }}
        />
        <Section />
      </div>
    </div>
  );
}
