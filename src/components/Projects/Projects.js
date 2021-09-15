import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import delta from "../../Assets/Projects/delta_bot.jpg";
import micromouse from "../../Assets/Projects/micromouse.gif";
import vitarana from "../../Assets/Projects/vitirana.gif";
import moodylyser from "../../Assets/Projects/moodylyser.png";
import elderly from "../../Assets/Projects/elderly.jpg";

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
              imgPath={delta}
              isBlog={false}
              title="Delta PSP - Pick and Place Bot"
              description="Designed and manufactured a full scale Pick and Place gantry with 3 axis motion."
              link="https://github.com/SRA-VJTI/Delta2021"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={micromouse}
              isBlog={false}
              title="Micromouse"
              description="Created a maze solving bot in ROS-Gazebo, which implemented DFS algorithm for solving the maze."
              link="https://github.com/hashmis79/Micromouse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vitarana}
              isBlog={false}
              title="Vitarana Drone - Disaster Management"
              description="Created a automated Parcel delivery drone in ROS-Gazebo, which automatically goes to the parcel coordinates and delivers them."
              link="https://github.com/hashmis79/E-Yantra_Tasks"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moodylyser}
              isBlog={false}
              title="Moodylyser"
              description="Aim of this project was to predict emotions of a person by analysing a live videofeed of a person. We used a Deep Learning to detect facial features and emotions "
              link="https://github.com/hashmis79/Moodylyser"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elderly}
              isBlog={false}
              title="Elderly App"
              description="This is a flutter Application developed to help elders regarding their medical details.This app will help elders to take their medicines and diet as specified by their doctor without any delay in time."
              link="https://github.com/hashmis79/Elderly_App"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
