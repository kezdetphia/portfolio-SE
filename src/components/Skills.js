// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import react from "../assets/img/react.png";
import js from "../assets/img/js.png";
import node from "../assets/img/node.png";
import express from "../assets/img/express.png";
import django from "../assets/img/django.png";
import python from "../assets/img/python.png";
import mongo from "../assets/img/mongo.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import bootstrap from "../assets/img/bootstrap.png";
import git from "../assets/img/git.png";
import mysql from "../assets/img/mysql.png";
import postgre from "../assets/img/postgre.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I absolutely love learning new technologies to keep up with the
                ever-evolving world of web development, while also maintaining
                and showcasing my current skills. Right now, I've got a bunch of
                fantastic expertise that I can bring to the table for your web
                development needs.{" "}
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={js} alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="React.Js" />
                  <h5>React.Js</h5>
                </div>
                <div className="item">
                  <img src={express} alt="Express.JS" />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img src={mongo} alt="Mongo" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={node} alt="Node.JS" />
                  <h5>Node.Js</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={django} alt="Django" />
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="MySQL" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={postgre} alt="PostgreSQL" />
                  <h5>PostgreSQL</h5>
                </div>

                <div className="item">
                  <img src={html} alt="HTML" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="CSS" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={git} alt="Github" />
                  <h5>Github</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Bootstrap" />
                  <h5>Bootstrap</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Gray Background"
      />
    </section>
  );
};
