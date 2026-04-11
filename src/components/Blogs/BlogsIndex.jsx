import React from "react";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import GPU from "../../Assets/Projects/GPU.jpg";

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
                imgPath={GPU}
                isBlog={false}
                title="GPU Infrastructure"
                description="Choosing a GPU provider isn’t just about raw speed or the lowest hourly rate. It’s about how well the platform fits your entire development + production pipeline—from rapid prototyping with diffusion models to reliable serving in a mobile/VR app."
                BlogLink="/GPUInfrastructureBlog"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
