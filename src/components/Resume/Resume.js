import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Saad_Resume_Mitacs.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Technical Intern [Airpix]"
              date="June 2021 - July 2021"
              content={[
                "Worked on the developing the NPNT compliance firmware for a drone",
                "Researched about the current NPNT compliance regulations and requirements",
                "Analysed the NPNT compliant code for ArduPilot",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Mechanical Head [Society of Robotics and Automation]"
              content={[
                "Co - conducted many workshops like Wall-E (Self balancing bot) and Mario(3-DOF Manipulator ) for over 200 Freshmen",
                "Contributed in the code for 3-DOF Manipulator in ROS- Gazebo for the Mario Workshop",
                "Taught the basics of CAD at the Dimensions Workshop to over 80 Freshmen students",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B-tech in Mechanical Engineering [Veermata Jijabai Technological Institute, Mumbai] "
              date="2019 - Present"
              content={[`CGPA: 8.59 (Till 4th Sem)`]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Were in the Top 20 Teams in Eyantra National Robotics Challenge, Organized by IIT Bombay`,
                `Were in the Top 18 Teams in the Microouse Challenge`,
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
