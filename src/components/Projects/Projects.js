import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Cubby"
              description="Cubby is a cross-platform mobile app I designed and developed to make fashion more interactive and fun. The app allows users to digitize their wardrobe, try outfits virtually, and share their style with friends — all powered by smart image processing."
              demoLink="https://vimeo.com/manage/videos/1177044870"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="CaseX"
              description="...."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Eire Water"
              description="Discover and order your favorite water products with ease! Browse the store’s available items, add multiple products to your cart, and checkout seamlessly. Stay updated with notifications for new arrivals and never miss out on your essentials."
              ghLink="https://github.com/Naila-Malik/Erie-customer-Mobile-App"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="MobilScout"
              description="Buy, sell, and explore vehicles effortlessly! Upload your vehicle with images, and let our AI automatically extract key details for a smooth listing. Browse the latest vehicles and find your next ride in just a few taps."
              ghLink="https://github.com/MuzayyanaliSE/mobilscout-mob-app"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="E GhalaMandi"
              description="Buy and sell crops with ease! Upload your produce, explore available listings, and let buyers and sellers bid to get fair prices. Connect directly with the agriculture market and maximize value for every crop."
              ghLink="https://github.com/Naila-Malik/ghalamandiApp"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="GB Police"
              description="...."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
