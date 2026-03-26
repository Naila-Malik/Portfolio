import React from "react";
import Particle from "./Particle";
import { Container, Row, Col } from "react-bootstrap";

export default function Blogs() {
  return (
    <>
      {" "}
      <Particle />
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <Container>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "75vh" }}
          >
            <h1
              style={{
                fontSize: "2.1em",
                textAlign: "center",
                color: "#fff",
              }}
            >
              Updating ...
            </h1>
          </div>
        </Container>
      </Container>
    </>
  );
}
