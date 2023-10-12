import Image from "next/image";

import styles from '../styles/project.module.scss';

const Project = (props) => {
  return (
    <div className={`flex min-h-screen flex-col justify-between ${styles.project}`}>
      <Image src={props.logo} alt={props.nameProject} className={styles.bigLogo} />
      <h4>{props.division}</h4>
      <p>{props.year}</p>

      {props.projects.map((item) => {
        return <div className={styles.project}>
          <Image src={item.image} className={styles.projectImg} />
          <div>
            <Image src={item.logo_project} className={styles.miniLogo} />
            <div className={styles.description}>
              <h2>About Project</h2>
              <p>{item.description}</p>
            </div>
            <div className={styles.description}>
              <h2>Tech Stack</h2>
              <div className={styles.flex}>
                {item.techs?.map((name) => {
                  return <div className={styles.descriptionList}>
                    <p>{name}</p>
                  </div>
                })}
              </div>
            </div>
          </div>
        </div>
      })}

    </div>
  )
}

export default Project;