import React from "react";
import "./GPUBlog.css";
import Particle from "../Particle";
import { Container } from "react-bootstrap";

export default function GPUInfrastructureBlog() {
  return (
    <>
      {" "}
      <Particle />
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <Container>
          <div className="blog-container">
            <div className="blog-header">
              <h1 className="blog-title">
                Choosing the Right GPU Infrastructure for AI-Powered Mobile Apps
              </h1>
              <p className="blog-subtitle">
                Lessons learned while building a VR Try-On feature powered by
                Diffusion Models
              </p>
            </div>

            <div className="blog-content">
              <section className="intro-section">
                <p>
                  In one of my recent projects, we developed a mobile app
                  featuring a <strong>VR Try-On</strong> experience powered by
                  diffusion models for real-time image processing and
                  generation.
                </p>
                <p>
                  This required experimenting with multiple GPU providers — each
                  with its own strengths and trade-offs. Here's what we
                  discovered:
                </p>
              </section>

              {/* Phase 1: AWS */}
              <section className="phase-section">
                <h2 className="phase-title">Phase 1: Starting with AWS</h2>
                <div className="phase-content">
                  <p>
                    We began with <strong>AWS GPU services</strong> (EC2 +
                    SageMaker). The performance was excellent — low latency and
                    highly reliable.
                  </p>
                  <div className="highlight-box warning">
                    <strong>Challenge:</strong> The cost of running continuous
                    image-generation workloads became a big challenge. For
                    startups and fast-moving teams, AWS can quickly burn through
                    budgets.
                  </div>
                </div>
              </section>

              {/* Phase 2: Salad */}
              <section className="phase-section">
                <h2 className="phase-title">Phase 2: Exploring Salad</h2>
                <div className="phase-content">
                  <p>
                    Next, we tried <strong>Salad</strong> — a creative platform
                    that taps into distributed GPU power, making it very{" "}
                    <strong>cost-effective</strong>.
                  </p>

                  <div className="highlight-box info">
                    <strong>Limitations we faced:</strong>
                    <blockquote>
                      “The Salad GPU setup doesn’t handle storage or data
                      persistence, which are essential for development and
                      testing workflows. It’s designed for serving pre-tested,
                      containerized apps — not for iterative development.”
                    </blockquote>
                  </div>

                  <p>
                    This forced us to use <strong>two separate services</strong>{" "}
                    (Salad for GPU + our own backend for storage), which added
                    friction to the workflow.
                  </p>
                </div>
              </section>

              {/* Phase 3: RunPod */}
              <section className="phase-section">
                <h2 className="phase-title">
                  Phase 3: Transitioning to RunPod
                </h2>
                <div className="phase-content">
                  <p>
                    To simplify things, we moved to <strong>RunPod</strong>. It
                    turned out to be the best balance for our needs.
                  </p>

                  <h3 className="benefits-title">Key Benefits:</h3>
                  <ul className="benefits-list">
                    <li>
                      <strong>Persistent storage</strong> and better environment
                      flexibility
                    </li>
                    <li>
                      <strong>Lower operational complexity</strong> — GPU +
                      storage under one roof
                    </li>
                    <li>
                      Performance that matched our needs{" "}
                      <strong>without the high costs</strong> of AWS
                    </li>
                  </ul>
                </div>
              </section>

              {/* Key Insights */}
              <section className="insights-section">
                <h2 className="section-title">Key Insights</h2>
                <div className="insights-grid">
                  <div className="insight-card">
                    <h3>AWS</h3>
                    <p>
                      Great for enterprise-level performance and reliability,
                      but costly at scale.
                    </p>
                  </div>
                  <div className="insight-card">
                    <h3>Salad</h3>
                    <p>
                      Extremely cost-effective for production workloads, but
                      limited for development iteration.
                    </p>
                  </div>
                  <div className="insight-card">
                    <h3>RunPod</h3>
                    <p>
                      A balanced choice offering cost-efficiency, persistence,
                      and flexibility.
                    </p>
                  </div>
                </div>
              </section>

              {/* Final Learning */}
              <section className="learning-section">
                <div className="final-learning">
                  <h2 className="section-title">My Biggest Learning</h2>
                  <p className="highlight-text">
                    Choosing a GPU provider isn’t just about speed or price —
                    it’s about how well it fits your{" "}
                    <strong>entire development + production pipeline</strong>.
                  </p>
                </div>
              </section>

              {/* Call to Action */}
              <section className="cta-section">
                <h3>Let’s Discuss!</h3>
                <p>
                  I’d love to hear from you — What GPU providers have you tried
                  for AI, VR, or diffusion model workloads? How did they work
                  out for your projects?
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}
