import React from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import thumbnail from "./assets/thumbnail.png";

const videoData = [
  {
    title: "How to Create a Resume?",
    thumbnail: thumbnail,
  },
  {
    title: "How to Write a Cover Letter?",
    thumbnail: thumbnail,
  },
  {
    title: "What Are Soft and Hard Skills?",
    thumbnail: thumbnail,
  },
];

const faqData = [
  {
    question: "How do I prepare for an interview?",
    answer:
      "Research the company, practice common interview questions, and dress appropriately. Show enthusiasm and ask thoughtful questions about the role.",
  },
  {
    question: "How can I make my resume stand out?",
    answer:
      "Focus on your achievements, tailor your resume to the job you're applying for, and highlight relevant skills. Keep it clear and concise.",
  },
  {
    question: "How do I know which career path is right for me?",
    answer:
      "Reflect on your interests, skills, and values. Seek advice from mentors and explore different fields to find what suits you best.",
  },
  {
    question: "What should I include in a cover letter?",
    answer:
      "Introduce yourself, explain your interest in the role, highlight your qualifications, and show your enthusiasm for the company.",
  },
  {
    question: "What is the difference between soft and hard skills?",
    answer:
      "Hard skills are technical abilities gained through training, while soft skills are interpersonal traits like communication and teamwork.",
  },
];

const CareerAdviceSection = () => {
  return (
    <Container className="py-5">
      {/* Career Advice Section */}
      <h2 className="text-center fw-bold mb-4">Career Advice</h2>
      <Row className="g-4 mb-5">
        {videoData.map((video, index) => (
          <Col md={4} sm={6} key={index}>
            <Card className="shadow-sm border-0">
              <Card.Img variant="top" src={video.thumbnail} alt={video.title} />
              <Card.Body>
                <Card.Title className="text-center">{video.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* FAQ Section */}
      <h3 className="fw-bold mb-4">FAQ</h3>
      <Accordion>
        {faqData.map((faq, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default CareerAdviceSection;
