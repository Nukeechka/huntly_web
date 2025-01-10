import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import avatart from "./assets/avatart.png";

const ProfileDetails = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
      <Container>
        <div className="bg-white rounded shadow-sm p-4">
          <Row className="align-items-center mb-4">
            <Col md={2} className="text-center">
              <img
                src={avatart}
                alt="Profile"
                className="img-fluid rounded-circle"
              />
            </Col>
            <Col md={10}>
              <h4 className="fw-bold mb-0">Alexei Ivanov</h4>
              <p className="text-muted mb-0">UI/UX Designer</p>
              <p className="text-muted">Almaty, Kazakhstan</p>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <h5 className="fw-bold">About</h5>
              <p>
                I'm a UI/UX Designer with a passion for creating intuitive and
                visually appealing digital experiences. With experience in both
                design and research, I focus on understanding user needs and
                translating them into clean, user-centered designs. I love
                collaborating with cross-functional teams to build products that
                not only look great but also provide an exceptional user
                experience. In my free time, I enjoy sketching, staying updated
                with the latest design trends, and experimenting with new design
                tools. I'm currently seeking opportunities to bring my
                creativity and skills to innovative projects.
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Table className="mt-3">
                <thead>
                  <tr>
                    <th>Employment Status</th>
                    <th>Full Name</th>
                    <th>Job Title</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Not Employed</td>
                    <td>Alexei Ivanov</td>
                    <td>UI/UX Designer</td>
                    <td>Almaty, Kazakhstan</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>

          <Row className="my-4">
            <Col md={12}>
              <h5 className="fw-bold">Resume</h5>
              <Button variant="outline-primary" className="mt-2">
                <i className="bi bi-file-earmark-arrow-down me-2"></i> Alexei
                Resume.Pdf
              </Button>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <h5 className="fw-bold">Learning & Achievements</h5>
              <Row className="mt-3 g-3">
                <Col md={4} sm={12}>
                  <div className="d-flex align-items-center justify-content-center bg-light p-3 rounded w-100">
                    <img
                      src="https://about.coursera.org/static/blueCoursera-646f855eae3d677239ea9db93d6c9e17.svg"
                      alt="Coursera"
                      className="img-fluid"
                    />
                  </div>
                </Col>
                <Col md={4} sm={12}>
                  <div className="d-flex align-items-center justify-content-center bg-light p-3 rounded w-100">
                    <img
                      src="https://logowik.com/content/uploads/images/udemy-new-20212512.jpg"
                      alt="Udemy"
                      className="img-fluid"
                    />
                  </div>
                </Col>
                <Col md={4} sm={12}>
                  <div className="d-flex align-items-center justify-content-center bg-light p-3 rounded w-100">
                    <img
                      src="https://cdn.icon-icons.com/icons2/3914/PNG/512/edx_logo_icon_248968.png"
                      alt="edX"
                      className="img-fluid"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ProfileDetails;
