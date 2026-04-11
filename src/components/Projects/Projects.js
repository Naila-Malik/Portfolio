import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mobileScout from "../../Assets/Projects/mobileScout.png";
// import emotion from "../../Assets/Projects/emotion.png";
import eiryWater from "../../Assets/Projects/eiryWater.png";
import CubbyApp from "../../Assets/Projects/CubbyApp.png";
import ghalaMandi from "../../Assets/Projects/ghalaMandi.png";
import MeetMap from "../../Assets/Projects/MeetMap.png";
import FOGO from "../../Assets/Projects/FOGO.png";

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
              imgPath={CubbyApp}
              isBlog={false}
              title="Cubby"
              description="Cubby is a cross-platform mobile app I designed and developed to make fashion more interactive and fun. The app allows users to digitize their wardrobe, try outfits virtually, and share their style with friends — all powered by smart image processing."
              demoLink="https://vimeo.com/manage/videos/1177044870"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FOGO}
              isBlog={false}
              title="FoGo"
              description="Connect with friends through seamless social interaction, real-time chat, and high-quality video calls. Upgrade to premium membership to unlock exclusive features and explore more of the app experience."
              ghLink=""
              demoLink="https://vimeo.com/1182189154?share=copy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eiryWater}
              isBlog={false}
              title="Eire Water"
              description="Discover and order your favorite water products with ease! Browse the store’s available items, add multiple products to your cart, and checkout seamlessly. Stay updated with notifications for new arrivals and never miss out on your essentials."
              ghLink="https://github.com/Naila-Malik/Erie-customer-Mobile-App"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobileScout}
              isBlog={false}
              title="MobilScout"
              description="Buy, sell, and explore vehicles effortlessly! Upload your vehicle with images, and let our AI automatically extract key details for a smooth listing. Browse the latest vehicles and find your next ride in just a few taps."
              ghLink="https://github.com/MuzayyanaliSE/mobilscout-mob-app"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ghalaMandi}
              isBlog={false}
              title="E GhalaMandi"
              description="Buy and sell crops with ease! Upload your produce, explore available listings, and let buyers and sellers bid to get fair prices. Connect directly with the agriculture market and maximize value for every crop."
              ghLink="https://github.com/Naila-Malik/ghalamandiApp"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MeetMap}
              isBlog={false}
              title="MeetMap"
              description="MeetMap helps travelers discover meaningful connections, turning every journey into a chance to meet new people and create lasting memories."
              ghLink="https://github.com/Naila-Malik/meetMap"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
