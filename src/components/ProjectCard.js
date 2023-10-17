import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, github, live }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt='project-img'/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span className="p-3">{description}</span>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h5>
              <a
                href={github}
                target="_blank"
                rel='noreferrer'
                style={{
                  display: "inline-block",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  background: "purple",
                  textDecoration: "none",
                  color: "white",
                  marginRight: "10px",
                  marginTop: "10px",
                }}
              >
                Github
              </a>
            </h5>
            <h5>
              <a
                href={live}
                target="_blank"
                rel='noreferrer'
                style={{
                  display: "inline-block",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  background: "purple",
                  textDecoration: "none",
                  color: "white",
                  marginRight: "10px",
                  marginTop: "10px",
                }}
              >
                Live
              </a>
            </h5>
          </div>
        </div>
      </div>
    </Col>
  );
};
