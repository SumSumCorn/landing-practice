import Image from 'next/image';
import styles from './page.module.scss';
import bg from '@/assets/images/bread2.jpg';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt='bg'
        fill
        objectFit='cover'
        // sizes='100dvh'
        style={{ zIndex: -1 }}
      />
      <section className={`${styles.hero}`}>
        <h1 className={`${dancingScript.className} ${styles.title}`}>
          WCB Bakery
        </h1>
        <p>
          엄선된 재료와 식감이 사이 있는 빵.
          <br />
          매일 아침 갓 구운 빵.
          <br />
          빵과 함께 행복한 시간을 만끽해보세요.
        </p>
      </section>
    </>
  );
}
