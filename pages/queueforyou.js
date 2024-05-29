import Image from 'next/image'
import styles from '/src/app/page.module.css'
import pen from '/public/pen.png'
import Link from 'next/link';

function Queueforyou() {
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
      <h1 className={styles.homewords}>Queue4You</h1>
      <div className={styles.rectangle}>
        <br/>
        <h1><span className={styles.label}>TRY IT OUT</span></h1>
        <h2>Go back to the project home page and click on the Q4U image!</h2>
        <br/>
        <h1><span className={styles.label}>ABOUT</span></h1>
        <h2>Collaborated with a friend to design and develop a web application that allows you to find shows based on your interests in genre, decade, streaming service, and runtime. I coded the backend, while my friend designed the frontend.</h2>
        <br/>
        <h1><span className={styles.label}>DEV TOOLS</span></h1>
        <h2>Javascript, HTML, and CSS, coded on Visual Studio Code</h2>
        <br/>
        <h1><span className={styles.label}>APIS</span></h1>
        <h2>The Movie Database (TMDB) API</h2>
        <br/>
      </div>
    </main>
  );
}

export default Queueforyou;