import Image from 'next/image'
import styles from '/src/app/page.module.css'
import pen from '/public/pen.png'
import Link from 'next/link';

function Cocktailmania() {
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
      <h1 className={styles.homewords}>Cocktail Mania</h1>
      <div className={styles.rectangle}>
        <br/>
        <h1><span className={styles.label}>TRY IT OUT</span></h1>
        <h2>Go back to the project home page and click on the Cocktail Search image!</h2>
        <br/>
        <h1><span className={styles.label}>ABOUT</span></h1>
        <h2>Designed and developed a web application that allows users to search for cocktails. Results of search include detailed step-by-step recipe instructions with a list of ingredients and an image of the drink. </h2>
        <br/>
        <h1><span className={styles.label}>DEV TOOLS</span></h1>
        <h2>Angular (frontend) and Express (Node.js backend), coded on WebStorm </h2>
        <br/>
        <h1><span className={styles.label}>APIS</span></h1>
        <h2>The Cocktail DB API</h2>
        <br/>
      </div>
    </main>
  );
}

export default Cocktailmania;