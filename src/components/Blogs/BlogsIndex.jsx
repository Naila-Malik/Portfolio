import React from "react";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
// import chatify from "../../Assets/Projects/chatify.png";
import CubbyApp from "../../Assets/Projects/CubbyApp.png";

export default function BlogsIndex() {
  return (
    <>
      <Container fluid className="project-section">
        {" "}
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Blogs </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few blogs I've wrote recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={CubbyApp}
                isBlog={false}
                title="GPU Infrastructure"
                description="...."
                BlogLink="/GPUInfrastructureBlog"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={CubbyApp}
                isBlog={false}
                title="Coming Soon"
                description="...."
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={CubbyApp}
                isBlog={false}
                title="Coming Soon"
                description="...."
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
