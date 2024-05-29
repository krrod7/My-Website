import Image from 'next/image'
import styles from '/src/app/page.module.css'
import pen from '/public/pen.png'
import Link from 'next/link';

function Spotiweather() {
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
      <h1 className={styles.homewords}>Spotiweather</h1>
      <div className={styles.rectangle}>
        <br/>
        <h1><span className={styles.label}>TRY IT OUT</span></h1>
        <h2>Right now, it's not testable based on the way the Spotify API works, but I'm working on test account to provide for you! But when it's ready, go back to the project home page and click on the Spotiweather image!</h2>
        <br/>
        <h1><span className={styles.label}>ABOUT</span></h1>
        <h2>Collaborated with 2 classmates to design and develop a web application that curates a music playlist based on the weather of the user's current location. Since I wanted to start learning React.js, I took the backend from this class project and created a frontend for it! I also added the feature to search for a location I would want a playlist for, rather than just automatically taking the user's current location.</h2>
        <br/>
        <h1><span className={styles.label}>DEV TOOLS</span></h1>
        <h2>Flask (backend) and React (frontend), coded on Visual Studio Code</h2>
        <br/>
        <h1><span className={styles.label}>APIS</span></h1>
        <h2>Spotify API, OpenWeatherMap API, and GeoLocation API</h2>
        <br/>
      </div>
    </main>
  );
}

export default Spotiweather;