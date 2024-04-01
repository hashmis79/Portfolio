import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Saad_Resume_2022.pdf";
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
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-0D2ZBMTD5D');
    </script>
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
              title="Engineer [Technology Innovation Hub for IoT and IoE, IIT Bombay]"
              date="June 2023 - Present"
              content={[
                "Developed a program for using Realsense D455 depth camera for drone obstacle detection for range sensor-based avoidance algorithm using Python and OpenCV.",
                "Was responsible for the integration of the obstacle avoidance stack to the drone testbed using MAVROS and ROS.",
                "Curated Test cases for validation of the obstacle avoidance system in real-world environments, ensuring its effectiveness and accuracy under agricultural conditions.",
              ]}
            />
            <Resumecontent
              title="Intern [Centre for AI and Robotics, Defense R&D Organisation of India (DRDO), Bangalore]"
              date="June 2022 - July 2022"
              content={[
                "Designed the simulation setup for Single Arm Manipulation of Various Objects using ROS, Gazebo, MoveIt.",
                "Implemented GraspNet for End Effector Pose Estimation while picking up uncommon objects.",
                "Was instrumental in the interfacing of Gazebo, MoveIt, OpenCV, and GraspNet for a functional simulation Setup.",
              ]}
            />
            <Resumecontent
              title="Research Intern [Robert Bosch Center for Cyber-Physical Systems, IISC Bangalore]"
              date="December 2021 - March 2022"
              content={[
                "Designed the foot of a quadruped and later 3D Printed the part(made of TPU)",
                "Worked on strenthening different parts of the Quadruped",
                "Designed the Heat Sink for the BLDC Encoders to avoid overheating of the circuits.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Mechanical Head [Society of Robotics and Automation]"
              content={[
                "Co - conducted many workshops like Wall-E (Self balancing bot) and Mario(3-DOF Manipulator ) for over 200 Freshmen",
                "Contributed in the code for 3-DOF Manipulator in ROS- Gazebo for the Mario Workshop",
                "Taught the basics of CAD at the Dimensions Workshop to over 80 Freshmen students",
              ]}
            />
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B-tech in Mechanical Engineering [Veermata Jijabai Technological Institute, Mumbai] "
              date="August 2019 - June 2023"
              content={[`CGPA: 8.22 `]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Were in the Top 20 Teams in Eyantra National Robotics Challenge, Organized by IIT Bombay`,
                `Were in the Top 18 Teams in the Micromouse Challenge`,
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
