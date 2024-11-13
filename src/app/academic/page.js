import Image from 'next/image';

import Ub from '../assets/ub.png';
import Sma from '../assets/sma.jpg';
import styles from '../styles/academic.module.scss';
import LongBox from '../components/Box';
import Progate from '../assets/progate.png';
import Alterra from '../assets/alterra.png';


const data = {
    result: [
        {
            id: 1,
            title: 'SMAN 03 Unggulan Palopo',
            location: 'Palopo, South Sulawesi, Indonesia',
            level: 'Senior High School',
            picture: Sma,
            year: 2013,
            compression: 'Natural science',
            awards: [
                {
                    id: 1,
                    champion: 1,
                    description: 'Basketball Woman Palopo, South Sulawesi  - West Sulawesi'
                },
                {
                    id: 2,
                    champion: 2,
                    description: 'Basketball Woman, SMAN 3 Palopo'
                },
                {
                    id: 3,
                    champion: 2,
                    description: 'Basketball Woman, SMAN 3 Palopo'
                },
                {
                    id: 4,
                    champion: 3,
                    description: 'Basketball Woman, SMAN 1 Palopo'
                }
            ],
            research: '',
            url: '',
            gpa: ''
        },
        {
            id: 2,
            title: 'Brawijaya University',
            location: 'Malang, East Java, Indonesia',
            level: 'Bachelor degree',
            picture: Ub,
            year: 2017,
            compression: 'Physics major',
            awards: [
                {
                    id: 1,
                    champion: 1,
                    description: 'Basketball Woman, MIPA faculty level'
                },
                {
                    id: 2,
                    champion: 1,
                    description: 'Marathon, MIPA faculty level'
                }
            ],
            research: 'The Effect of Antioxide From GisOliRe Extract on Microscopical Organs of Mice Kidney Organs Who Experiences Damages Resulting From Hair Spray Exposure',
            url: '',
            gpa: '3.21'
        },
        {
            id: 3,
            title: 'Brawijaya University',
            location: 'Malang, East Java, Indonesia',
            level: 'Postgraduate degree',
            picture: Ub,
            year: 2021,
            compression: 'Physics major',
            awards: [],
            research: 'Identification of electrical impedance correlation using interdigital transducer (IDT) electrode and blood glucose by giving variations of sugar concentration to male mice',
            url: 'https://www.proquest.com/openview/911a737a4591ac570561fcbad366ee64/1?pq-origsite=gscholar&cbl=4998668',
            gpa: '3.66'
        }

    ]
}

const training = {
    result: [
        {
            id: 1,
            picture: Progate,
            year: 2020,
            description: 'Digital Talent Scholarship (DTS) adalah program pelatihan pengembangan kompetensi yang telah diberikan kepada talenta digital Indonesia sejak tahun 2018. Program ini ditunjukan untuk meningkatkan keterampilan dan daya saing, produktivitas, profesionalisme SDM bidang teknologi informasi dan komunikasi bagi angkatan kerja muda Indonesia, masyarakat umum, dan aparatur sipil negaradi bidang Komunikasi dan Informatika sehingga dapat meningkatkan produktivitas dan daya saing bangsa di era Industri 4.0, serta mampu memenuhi kebutuhan tenaga terampil di bidang teknologi.',
            url: ''
        },
        {
            id: 2,
            picture: Alterra,
            year: 2022,
            description: 'Alterra Academy awalnya berdiri guna memenuhi kebutuhan talenta IT untuk induk perusahaannya, yaitu Alterra Group. Mulai dari 2021, Alterra Academy melebarkan sayap untuk menjadi IT Bootcamp yang terbuka untuk umum. Salah satunya melalui Immersive Program yang bergerak di bidang Backend, Frontend, Quality Assurance, dan Data Engineering.',
            url: ''
        }
    ]
}

const Portofolio = () => {
    return (
        <>
            <div>
                <div className={styles.sub}>
                    <h4>Academic</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="311" height="20" viewBox="0 0 311 20" fill="none">
                        <path d="M3 9.99999L18.0732 14.7676C28.6021 18.0978 40.05 16.7978 49.5641 11.1915L50.988 10.3524C61.8866 3.93027 75.3564 3.70035 86.4678 9.74681L89.3599 11.3206C99.1869 16.6681 111.154 16.2003 120.534 10.102V10.102C130.079 3.89622 142.287 3.52925 152.188 9.15057L154.298 10.3485C164.799 16.311 177.699 16.1493 188.048 9.92545V9.92545C198.264 3.78139 210.978 3.53971 221.42 9.29106L222.763 10.031C233.976 16.2071 247.622 15.9843 258.627 9.4453L259.922 8.6759C269.229 3.14605 280.426 1.76293 290.799 4.86162L308 10" stroke="url(#paint0_linear_515_1533)" strokeWidth="6" strokeLinecap="round" />
                        <defs>
                            <linearGradient id="paint0_linear_515_1533" x1="81.1097" y1="20" x2="214.268" y2="20" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#95D2FF" />
                                <stop offset="1" stop-color="#ECCFFA" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className={styles.portofolio}>
                    {data.result.map((item) => {
                        return <LongBox key={item.id}
                            id={item.id}
                        >
                            <div className={styles.academic}>
                                <div className='text-center'>
                                    <Image src={item.picture} className={styles.logo} />
                                    <p>{item.title}</p>
                                    <p>{item.location}</p>
                                </div>
                                <div>
                                    <p>{item.level}, {item.year}</p>
                                    <p>{item.compression}</p>
                                    <div className={styles.research}>
                                        <p>Research :</p>
                                        <p>{item.research}</p>
                                    </div>
                                    <p>GPA : {item.gpa}</p>
                                    <div>
                                        <p className={styles.champion}>Awards :</p>
                                        {item.awards.map((award) => {
                                            return <>
                                                <div className='flex gap-4'>
                                                    {/* buat custom component */}
                                                    <h2>{award.champion}</h2>
                                                    <h5>{award.description}</h5>
                                                </div>
                                            </>
                                        })}
                                    </div>

                                </div>
                            </div>
                        </LongBox>
                    })}
                </div>
            </div>
            <div>
                <div className={styles.sub}>
                    <h4>Trainings</h4>
                    <svg className={styles.training} xmlns="http://www.w3.org/2000/svg" width="311" height="20" viewBox="0 0 311 20" fill="none">
                        <path d="M3 9.99999L18.0732 14.7676C28.6021 18.0978 40.05 16.7978 49.5641 11.1915L50.988 10.3524C61.8866 3.93027 75.3564 3.70035 86.4678 9.74681L89.3599 11.3206C99.1869 16.6681 111.154 16.2003 120.534 10.102V10.102C130.079 3.89622 142.287 3.52925 152.188 9.15057L154.298 10.3485C164.799 16.311 177.699 16.1493 188.048 9.92545V9.92545C198.264 3.78139 210.978 3.53971 221.42 9.29106L222.763 10.031C233.976 16.2071 247.622 15.9843 258.627 9.4453L259.922 8.6759C269.229 3.14605 280.426 1.76293 290.799 4.86162L308 10" stroke="url(#paint0_linear_515_1533)" strokeWidth="6" strokeLinecap="round" />
                        <defs>
                            <linearGradient id="paint0_linear_515_1533" x1="81.1097" y1="20" x2="214.268" y2="20" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#95D2FF" />
                                <stop offset="1" stop-color="#ECCFFA" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className={styles.itemTraining}>
                    {training.result.map((item) => {
                        return <LongBox key={item.id}
                            id={item.id}
                        >
                            <div className={styles.training}>
                                <div className={styles.logoYear}>
                                    <Image src={item.picture} />
                                    <h5 className={styles.year}>{item.year}</h5>
                                </div>
                                <div>
                                    <p className={styles.description}>{item.description}</p>
                                    <button>Projects</button>
                                </div>
                            </div>
                        </LongBox>
                    })}
                </div>
            </div>
        </>
    )
}

export default Portofolio;