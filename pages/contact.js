import Image from 'next/image'
import styles from '/src/app/page.module.css'
import pen from '/public/pen.png'
import Link from 'next/link';

function Contact() {
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
      <h1 className={styles.homewords}>Feel Free to Contact Me! <Image src={pen} alt="Pen" width={100} height={100} /></h1>
      <div className={styles.rectangle}>
        <br/>
        <h1>email: krrod7@bu.edu</h1>
        <br/>
        <h1>linkedin: <Link href='https://www.linkedin.com/in/kimberly-rodriguez-65ba6a23a/'>Kim Rodriguez</Link></h1>
        <br/>
      </div>
    </main>
  );
}

export default Contact;