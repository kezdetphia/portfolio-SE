import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg2 from "../assets/img/project-img2.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsTabOne = [
    {
      title: "Laptop Tracker",
      description: "Laptop Tracker is a MERN stack application developed by a team of three individuals.This project aims to track and manage laptop inventory using a web-based interface. It allows users to add, edit, and delete laptop records, view laptop details, and search for specific laptops in the inventory.",
      imgUrl: projImg2,
      github: 'https://github.com/wilsonckm/laptop_tracker',
      live: 'https://secret-cove-46952-926c125f7927.herokuapp.com/'
    },
    {
      title: "ChatMe",
      description: "ChatMe is a MERN stack app where users can chat live to each other",
      imgUrl: projImg2,
      github: 'https://github.com/wilsonckm/laptop_tracker',
      live: 'https://secret-cove-46952-926c125f7927.herokuapp.com/'
    },
    {
      title: "Coming: Clothing e-commerce",
      description: "A React website for ecommerce clothing",
      imgUrl: projImg2,
      github: 'https://github.com/wilsonckm/laptop_tracker',
      live: 'https://secret-cove-46952-926c125f7927.herokuapp.com/'
    }, 
  ];

  const projectsTabTwo = [
    {
      title: "Placeholder for upcoming projects",
      description: "Description here",
      imgUrl: projImg2,
      github: 'https://github.com/wilsonckm/laptop_tracker',
      live: 'https://secret-cove-46952-926c125f7927.herokuapp.com/'
    },
    {
      title: "Placeholder for upcoming projects",
      description: "Description here",
      imgUrl: projImg2,
      github: 'https://github.com/wilsonckm/laptop_tracker',
      live: 'https://secret-cove-46952-926c125f7927.herokuapp.com/'
    },
    {
      title: "Placeholder for upcoming projects",
      description: "Description here",
      imgUrl: projImg2,
      github: 'https://github.com/wilsonckm/laptop_tracker',
      live: 'https://secret-cove-46952-926c125f7927.herokuapp.com/'
    }, 
  ];

  const projectsTabThree = [
    {
      title: "Placeholder for upcoming projects",
      description: "Description here",
      imgUrl: projImg2,
      github: 'https://github.com/wilsonckm/laptop_tracker',
      live: 'https://secret-cove-46952-926c125f7927.herokuapp.com/'
    },
    {
      title: "Placeholder for upcoming projects",
      description: "Description here",
      imgUrl: projImg2,
      github: 'https://github.com/wilsonckm/laptop_tracker',
      live: 'https://secret-cove-46952-926c125f7927.herokuapp.com/'
    },
    {
      title: "Placeholder for upcoming projects",
      description: "Description here",
      imgUrl: projImg2,
      github: 'https://github.com/wilsonckm/laptop_tracker',
      live: 'https://secret-cove-46952-926c125f7927.herokuapp.com/'
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