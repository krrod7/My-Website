import Image from 'next/image'
import styles from '/src/app/page.module.css'
import pen from '/public/pen.png'
import spotiweather from '/public/Screenshot 2024-05-25 015656.png'
import Q4U from '/public/Screenshot 2024-05-25 014526.png'
import cocktail from '/public/Screenshot 2024-05-28 200419.png'
import Link from 'next/link';

function Projects() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <nav className={styles.navbar}>
          <h1 className={styles.navlogo}>Kim Rodriguez <Image src={pen} alt="Pen" width={30} height={30} /></h1>
          <div>
            <Link href="/" className={styles.navlink}>
              home
            </Link>
            <Link href="/about" className={styles.navlink}>
              about
            </Link>
            <Link href="/projects" className={styles.navlink}>
              projects
            </Link>
            <Link href="/contact" className={styles.navlink}>
              contact
            </Link>
          </div>
        </nav>
      </div>
      <div className={styles.container}>
        <div className={styles.box}>
          <h1>Spotiweather
            <Link href="/spotiweather" className={styles.link}>learn more</Link>
          </h1>
            <Link href='https://spotiweather.vercel.app/' target="_blank" rel="noopener noreferrer"><Image src={spotiweather} alt="Spotiweather" className={styles.image}></Image></Link>
          </div>
        <div className={styles.box}>
          <h1>Queue4You
            <Link href="/queueforyou" className={styles.link}>learn more</Link>
          </h1>
          <Link href='https://ajrod0702.github.io/queue-for-you/' target="_blank" rel="noopener noreferrer"><Image src={Q4U} alt="Queue for You" className={styles.image}></Image></Link>
        </div>
        <div className={styles.box}>
          <h1>Cocktail Mania
            <Link href="/cocktailmania" className={styles.link}>learn more</Link>
          </h1>
          <Link href='https://cocktail-mania2.vercel.app/' target="_blank" rel="noopener noreferrer"><Image src={cocktail} alt="Queue for You" className={styles.image2}></Image></Link>
        </div>
        <div className={styles.box}>
          <h1>Silly Singers</h1>
          <h2 style={{color: 'red', textAlign: 'center'}}>
            <br/>
            <br/>
            <br/>
            <br/>
            Work In Progress
          </h2>
        </div>
      </div>
    </main>
  );
}

export default Projects;