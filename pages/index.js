import Image from 'next/image'
import styles from '/src/app/page.module.css'
import pen from '/public/pen.png'
import twin from '/public/Tezza-8612.JPG'
import friends from '/public/IMG_2263.jpg'
import poem from '/public/F804657F-D174-43B1-9B9C-E887B9B70068.JPG'
import fashion from '/public/Tezza-3292.JPG'
import sunset from '/public/IMG_4521.jpg'
import me from '/public/IMG_7319.jpg'
import Link from 'next/link';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
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
      <h1 className={styles.homewords}>Kim Rodriguez <Image src={pen} alt="Pen" width={100} height={100} /></h1>
      <h1 className={styles.softwareeng}>software engineer...</h1>
      
      <div className={styles.softwareeng}> 
              <h2>...but here's who I am beneath the label</h2> 
              <Carousel className={styles.carousel}> 
                  <div> 
                      <Image src={twin} alt="image1" />
                      <p style={{fontSize: '20px'}} className="legend" >I love my twin</p> 
  
                  </div> 
                  <div> 
                      <Image src={friends} alt="image2" /> 
                      <p style={{fontSize: '20px'}} className="legend">I love my friends</p> 
  
                  </div> 
                  <div> 
                      <Image src={poem} alt="image3"/> 
                      <p style={{fontSize: '20px'}} className="legend">poet</p> 
  
                  </div> 
                  <div> 
                      <Image src={fashion} alt="image4"/> 
                      <p style={{fontSize: '20px'}} className="legend">fashion lover</p> 
  
                  </div> 
                  <div> 
                      <Image src={sunset} alt="image5"/> 
                      <p style={{fontSize: '20px'}} className="legend">sunset lover</p> 
  
                  </div> 
                  <div> 
                      <Image src={me} alt="image6"/> 
                      <p style={{fontSize: '20px'}} className="legend">authentically myself</p> 
  
                  </div> 
              </Carousel> 
            </div> 
    </main>
  );
}
