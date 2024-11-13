import Image from 'next/image';
import "bootstrap/dist/css/bootstrap.min.css";

import styles from '../app/styles/home.module.scss';
import Rating from '../app/components/Rating';
import Activities from '../app/components/Activities';

import Background_1 from '../app/assets/bg-wanda.png';
import YellowBaloon from '../app/assets/yellow-ballon.png';
import BlueBallon from '../app/assets/blue-baloon.png';
import Profile from '../app/assets/profile.png';
import About from '../app/assets/about.png';
import Academic from '../app/assets/bg-yellow-2.png';
import Website from '../app/assets/bg-yellow-3.png';
import Design from '../app/assets/bg-yellow-4.png';
import Coding from '../app/assets/code.png';
import Youtube from '../app/assets/youtube.png';
// import Lynk from '../app/assets/lynkid.png';
// import Etsy from '../app/assets/etsy.png';
// import Amazon from '../app/assets/amazon.png';
// import Tokopedia from '../app/assets/tokopedia.png';
// import Shopee from '../app/assets/shopee.png';
// import Lazada from '../app/assets/lazada.png';


const dataTech = {
  result: [
    {
      id: 1,
      title: 'HTML5',
      value: 3,
      description: ''
    },
    {
      id: 2,
      title: 'React.js',
      value: 3,
      description: ''
    },
    {
      id: 3,
      title: 'NEXT.js',
      value: 3,
      description: ''
    },
    {
      id: 4,
      title: 'Javascript',
      value: 2,
      description: ''
    },
    {
      id: 5,
      title: 'JQuerry',
      value: 1,
      description: ''
    },
    {
      id: 6,
      title: 'SEO',
      value: 2,
      description: ''
    },
    {
      id: 7,
      title: 'CSS3',
      value: 3,
      description: ''
    },
    {
      id: 8,
      title: 'SAAS',
      value: 3,
      description: ''
    },
    {
      id: 9,
      title: 'Boostrap',
      value: 3,
      description: ''
    },
    {
      id: 10,
      title: 'Tailwind',
      value: 3,
      description: ''
    },
    {
      id: 11,
      title: 'Figma',
      value: 3,
      description: ''
    },
    {
      id: 12,
      title: 'Postman',
      value: 3,
      description: ''
    },
    {
      id: 13,
      title: 'RestAPI',
      value: 3,
      description: ''
    },
    {
      id: 14,
      title: 'Responsive',
      value: 3,
      description: ''
    },
    {
      id: 15,
      title: 'Git/Github',
      value: 3,
      description: ''
    }
  ]
};

const dataActivities = {
  result: [
    {
      id: 1,
      title: 'Frontend Engineer',
      image: Coding,
      description: '',
      link: ''
    },
    {
      id: 2,
      title: 'Youtube',
      image: Youtube,
      description: '',
      link: 'https://www.youtube.com/@wandakids18/videos'
    }
    // {
    //   id: 3,
    //   title: 'Lynk Id',
    //   image: Lynk,
    //   description: '',
    //   link: 'https://lynk.id/wanda18'
    // },
    // {
    //   id: 4,
    //   title: 'Etsy (soon)',
    //   image: Etsy,
    //   description: '',
    //   link: ''
    // },
    // {
    //   id: 5,
    //   title: 'Amazon (soon)',
    //   image: Amazon,
    //   description: '',
    //   link: ''
    // },
    // {
    //   id: 6,
    //   title: 'Tokopedia (soon)',
    //   image: Tokopedia,
    //   description: '',
    //   link: ''
    // },
    // {
    //   id: 7,
    //   title: 'Shopee (soon)',
    //   image: Shopee,
    //   description: '',
    //   link: ''
    // },
    // {
    //   id: 8,
    //   title: 'Lazada (soon)',
    //   image: Lazada,
    //   description: '',
    //   link: ''
    // }
  ]
};


const Home = () => {
  return (
    <main className={`flex min-h-screen flex-col justify-between ${styles.home}`}>

      <div>
        <Image src={Background_1} className={styles.background_1} />
        <div className={styles.titleBaloon}>
          <div className={styles.fontBgTop}>
            <p className={styles.creative}>CREATIVE BY</p>
            <h2>W A N D A</h2>
            <h4>PORTFOLIO</h4>
          </div>
          <div className={styles.baloon}>
            <Image src={YellowBaloon} className={styles.yellowBaloon} />
            <Image src={BlueBallon} className={styles.blueBaloon} />
          </div>
        </div>
      </div>

      <div className={styles.groupHome}>
        <div className={`grid grid-cols-3 gap-4 ${styles.dewi} mx-6`}>
          <div>
            <Image src={Profile} />
          </div>
          <div className="col-span-2">
            <h3>Dewi<br />Wulandari</h3>
            <p>Hi, you can call me Wanda. I live in Malang.
              I’ve specialized in Frontend using React.js, Next.js, Figma, and other stack related. About me,
              I joined at Gloding inc in October 2022 until September 2023. When I was at that company I learned about SEO,
              create layout features using Java, then develop CSS and SCSS. I always keep learning and develop my soft skill,
              especially using React.js and Next.js</p>
          </div>
        </div>

        <div className={styles.bgYellow}>
          <h4> ALL ABOUT</h4>
          <div className={''}>
            <div className={styles.allAbout}>
              <div className={styles.allAboutImg}>
                <a href='./experience' className={styles.href}>
                  <p className={styles.titleTech}>TECH STACK</p>
                  <Image src={About} className={''} />
                </a>
              </div>
              <div className={styles.allAboutImg}>
                <a href='./website' className={styles.href}>
                  <p className={styles.titleTech}>WEBSITE</p>
                  <Image src={Website} className={''} />
                </a>
              </div>
              <div className={styles.allAboutImg}>
                <a href='./design' className={styles.href}>
                  <p className={styles.titleTech}>DESIGN</p>
                  <Image src={Design} className={''} />
                </a>
              </div>
              <div className={styles.allAboutImg}>
                <a href='./website' className={styles.href}>
                  <p className={styles.titleTech}>ACADEMIC</p>
                  <Image src={Academic} className={''} />
                </a>
              </div>
            </div>
          </div>

        </div>

        <div>
          <h4 className={styles.techStack}>TECH STACK</h4>
          <Rating className={styles.ratings} data={dataTech} />
        </div>

        <div className={styles.secAct}>
          <h4 className={styles.activities}>CURRENT ACTIVITIES</h4>
          <Activities data={dataActivities} />
        </div>

        <div className={`my-20 ${styles.lastSec}`}>
          <h4 className={styles.portofolio}> PORTOFOLIO</h4>
          <p className={styles.descPorto}>This is my portfolio when I pursuing education in the academic field and non-academic  fields, and training too</p>
          <div className={styles.detailMore}>Detail more</div>
        </div>
      </div>
    </main >
  )
}

export default Home;
