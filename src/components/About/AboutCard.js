import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohammed Saad Hashmi </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />I am a junior pursuing B-Tech in Mechanical Engineering in 
            VJTI, Mumbai.
            <br />
            <br />
            Apart from coding and designing, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Speed-Cubing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Never pursue anything which you aren't passionate about!"{" "}
          </p>
          <footer className="blockquote-footer">Mohammed Saad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
