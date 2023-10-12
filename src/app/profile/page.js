import Me from '../components/Me';

// Image
import Ub from '../assets/logo-ub.png';
import Progate from '../assets/progate.png';
import Alterra from '../assets/alterra.png';


const data = {
  result: [
    {
      id: 1,
      name: 'Dewi Wulandari',
      content: 'Hi, you can call me Wanda. I live in Malang. I’ve specialized in Frontend using React.js, Next.js, Figma, and other stack related. About me, I joined at Gloding inc in October 2022 until September 2023. When I was at that company I learned about SEO, create layout features using Java, then develop CSS and SCSS. I always keep learning and develop my soft skill, especially using React.js and Next.js',
      skills: ['React.js','Next.js', 'HTML5','Javascript', 'SASS', 'MUI', 'Bootstrap','Tailwind', 'CSS3', 'Git/Github', 'Surge', 'Vercel', 'Payara', 'Vs Code IDE', 'Netbeans IDE', 'Java & JSF','Scrum', 'Atlassian (Jira)', 'Slack', 'Discord', 'RESTful API', 'Postman', 'Responsive'],
      hobbies: ['Sport','Read Comics', 'Listen Music', 'Cook', 'Design'],
      education: [
        {
          id: 1,
          logo: Ub,
          level: 'Bachelor',
          name: 'Universitas Brawijaya',
          major: 'Physics',
          year: '2017',
          GPA: '3.21',
          research: '' ,
          url: ''         
      },
      {
        id: 2,
        logo: Ub,
        level: 'Postgraduate',
        name: 'Universitas Brawijaya',
        major: 'Medical Physics',
        year: '2021',
        GPA: '3.66',   
        research: 'Identification of electrical impedance correlation using interdigital transducer (IDT) electrode and blood glucose by giving variations of sugar concentration to male mice',
        url: 'https://iopscience.iop.org/article/10.1088/1742-6596/1796/1/012049'         
    }],
      course: [
        {
          id: 1,
          name: 'Alterra Academy',
          logo: Alterra,
          division: 'Frontend Engineer',
          year: '2022',
          describe: 'Learn command line, UI/UX, Git(GitHub), HTML & CSS, Javascript, Next.Js, React.Js, Deployment, stress management, teamwork, critical thinking, professional mindset and behavior, etc.'          
      },
      {
        id: 2,
        name: 'Progate',
        division: 'Frontend',
        logo: Progate,
        year: '2020',
        describe: 'Learn command line, React.js, HTML & CSS, Javascript, Git(GitHub), SQL, Node.js.'          
    }
      ]     
    }
  ]
}

const Profile = () => {
  return (
    <div>
      {data.result.map((item) => {
      return <Me
      key={item.id}
      id={item.id}      
      />
    })}
    </div>
    






    // <div>
    //   {data.result.map((item) => {
    //     return <Projects
    //       key={item.id}
    //       id={item.id}
    //       division={item.division}
    //       year={item.year}
    //       logo={item.logo}
    //       projects={item.projects}
    //     />
    //   })}
    // </div>
  )
}

export default Profile;