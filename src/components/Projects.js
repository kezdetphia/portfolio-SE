import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg2 from "../assets/img/project-img2.jpg";
import chatme from "../assets/img/chatme.jpg";
import t100 from '../assets/img/t-100.png'
import footballpitch from "../assets/img/footballpitch.jpg";
import laptoptracker from "../assets/img/laptoptracker.jpg";
import phoneshop from "../assets/img/phoneshop.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import mycode from '../assets/img/mycode.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsTabOne = [
    {
      title: "myCode ",
      description:
        "myCode is a dynamic MERN stack web application that helps with code management, offering secure storage, rapid retrieval, and collaborative features, empowering programmers of all skill levels to streamline their coding experience.",
      imgUrl: mycode,
      github: "https://github.com/kezdetphia/mern-mycode-front",
      live: "https://deluxe-froyo-98610e.netlify.app/",
    },
    {
      title: "T-100 Fitness",
      description:
        "T-100 Fitness' responsive website, powered by ReactJS and styled with Tailwind CSS. It showcases personal trainers' services, contact details, and introduces them to prospective clients.",
      imgUrl: t100,
      github: "https://github.com/kezdetphia/t100-fitness",
      live: "https://t100-fitness.vercel.app/",
    },
    {
      title: "ChatMe",
      description:
        "ChatMe is a sophisticated MERN stack application that empowers users to engage in real-time conversations with each other using WebSocket.",
      imgUrl: chatme,
      github: "https://github.com/kezdetphia/MERN-ChatApp",
      
    },
   
  ];

  const projectsTabTwo = [
    {
      title: "The Phone Shop",
      description:
        "The Phone Shop project is a Python and Django-based application designed for managing phone sales and inventory. It leverages PostgreSQL for robust database management, streamlining the process of handling products and transactions in a user-friendly manner.",
      imgUrl: phoneshop,
      github: "https://github.com/Temeculous/phone-shop",
    },
    {
      title: "Football Pitch",
      description:
        "Manage and customize your dream squad's dynamics with Football Pitch. Harnessing MongoDB, Express, and EJS.",
      imgUrl: footballpitch,
      github: "https://github.com/kezdetphia/football-fullstack",
    },
    {
      title: "Placeholder for upcoming projects",
      description: "Description here",
      imgUrl: projImg2,
      github: "https://github.com/kezdetphia",
      live: "https://www.linkedin.com/in/markfeher8/",
    },
  ];

  const projectsTabThree = [
    {
      title: "Placeholder for upcoming projects",
      description: "Description here",
      imgUrl: projImg2,
      github: 'https://github.com/kezdetphia',
      live: 'https://www.linkedin.com/in/markfeher8/'
    },
    {
      title: "Placeholder for upcoming projects",
      description: "Description here",
      imgUrl: projImg2,
      github: 'https://github.com/kezdetphia',
      live: 'https://www.linkedin.com/in/markfeher8/'
    },
    {
      title: "Placeholder for upcoming projects",
      description: "Description here",
      imgUrl: projImg2,
      github: 'https://github.com/kezdetphia',
      live: 'https://www.linkedin.com/in/markfeher8/'
    }, 
  ];

  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Welcome to my playground of creativity and code! Here, I've rounded up a bunch of cool projects that I've conjured up. Think of it as a digital scrapbook of my tech adventures. Take a stroll through these bits and "bytes", and see how I've been crafting digital products.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsTabOne.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projectsTabTwo.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projectsTabThree.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Boost You"></img>
    </section>
  )
}