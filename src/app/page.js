import Image from 'next/image';

import styles from '../app/styles/home.module.scss'

import Background_1 from '../app/assets/bg-wanda.png';
import YellowBaloon from '../app/assets/yellow-ballon.png';
import BlueBallon from '../app/assets/blue-baloon.png';
import Tech from '../app/assets/tech-stack.png';
import Profile from '../app/assets/profile.png';
import Project from '../app/assets/project.png';
import Experience from '../app/assets/experience.png';
import Gloding from '../app/assets/gloding.png';
import Alterra from '../app/assets/alterra.png';

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col justify-between ${styles.home}`}>
        <div>
          <Image src={Background_1} className={styles.background_1}/>
          <div className={styles.titleBaloon}>
            <div className={styles.fontBgTop}>
              <h2>W A N D A</h2>
              <h4>PORTFOLIO</h4>
            </div>
            <div className={styles.baloon}>
              <Image src={YellowBaloon} className={styles.yellowBaloon}/>
              <Image src={BlueBallon} className={styles.blueBaloon}/>
            </div>
          </div>
        </div>

        <div className={styles.tech}>
          <Image src={Tech}/>
          <h3>T E C H S T A C K</h3>
          <div className={styles.techLists}>
            <p>Heroku</p>
            <p>Vercel</p>
            <p>Payara</p>
            <p>Markdown</p>
            <p>HTML5</p>
            <p>React.js</p>
            <p>Next.js</p>
            <p>CSS3</p>
            <p>SASS</p>
            <p>Tailwind</p>
            <p>Boostrap</p>
            <p>MUI</p>
            <p>Redux</p>
            <p>GIT</p>
            <p>Github</p>
            <p>Figma</p>
            <p>VS Code IDE</p>
            <p>Netbeans IDE</p>
            <p>Sourch Tree</p>
            <p>Atlassian (Jira)</p>
            <p>Javascript</p>
            <p>Jquerry</p>
            <p>RESTful API</p>
            <p>Postman</p>
            <p>NPM</p>
            <p>Slack</p>
          </div>
        </div>

        <div className={styles.profile}>
          <Image src={Profile}/>
          <h3>P R O F I L E</h3>
          <div className={styles.profileList}>
            <p>Profile</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill="#908D8F"/>
            </svg>
            <p>Skill</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill="#908D8F"/>
            </svg>
            <p>Education</p>
          </div>
        </div>

        <div className={styles.projects}>
          <Image src={Project}/>
          <h3>P R O J E C T S</h3> 
          <div className={styles.miniProjects}>
            <div className={styles.projectN}>
              <div className={styles.allProjectN} >
              <p>Portfolio</p>
              </div>
              <div className={styles.hoverBox}>
                <div className={styles.purpleBox}/>
                <div className={styles.yellowBox}/>
              </div>
            </div>
            <div className={styles.projectN}>
              <div className={styles.allProjectN} >
              <p>Comic View</p>
              </div>
            </div>
            <div className={styles.projectN}>
              <div className={styles.allProjectN} >
              <p>-</p>
              </div>
            </div>
          </div>         
        </div>

        <div className={styles.experience}>
          <Image src={Experience}/>
          <h3>E X P E R I E N C E D</h3> 
          <div className={styles.institutionList}>
            <div className={styles.institution}>
              <div>
                <Image src={Gloding} />
                <h5>2022 - 2023, Japan</h5>
              </div>
              <p>Gloding Inc. is a consulting + creating company specializing in IT, made up of a 
                  team that transcends national borders, including Japan, Indonesia, France, the 
                  United States, and the United Kingdom. Our members with a global perspective 
                  provide support in every phase, from various types of consulting to realize 
                  business improvements, to system design and construction, to post-installation 
                  operation and maintenance.</p>
              <a> Detail more ...</a>
            </div>
            <div className={styles.institution}>
              <div>
                <Image src={Alterra} />
                <h5>2022, Indonesia</h5>
              </div>
              <p>Gloding Inc. is a consulting + creating company specializing in IT, made up of a 
                  team that transcends national borders, including Japan, Indonesia, France, the 
                  United States, and the United Kingdom. Our members with a global perspective 
                  provide support in every phase, from various types of consulting to realize 
                  business improvements, to system design and construction, to post-installation 
                  operation and maintenance.</p>
              <a> Detail more ...</a>
            </div>
          </div>         
        </div>
            
    </main>
  )
}

