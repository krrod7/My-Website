import Image from 'next/image'
import styles from '/src/app/page.module.css'
import pen from '/public/pen.png'
import kim from '/public/IMG_4207.jpg'
import Link from 'next/link';

function About() {
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
      <h1 className={styles.homewords}>About Me! <Image src={pen} alt="Pen" width={100} height={100} /></h1>
      <div className={styles.rectangle}>
        <br/>
        <div className={styles.authorInfo}>
            <Image src={kim} className={styles.authorImg} />
            <p>Hi! I'm Kim, and I earned a Bachelor of Arts in Computer Science with a minor in Deaf Studies from Boston University in 2024. Growing up, I really loved being creative, whether that was songwriting, playing the ukelele, drawing, etc. I found that I could capture some of my creative side through my education with web development, where I could design websites on the frontend while structuring those websites through the backend. This is something I have enjoyed learning and doing, so feel free to check out some of my projects! Other than that, some of my favorite hobbies include writing poetry, traveling, fashion, watching tv, and hanging out with my friends and identical twin!
            </p>
        </div>
        <br/>
      </div>
    </main>
  );
}

export default About;