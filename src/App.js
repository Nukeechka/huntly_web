import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import Home from "./Home";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import AboutPage from "./AboutPage";
import IntershipsPage from "./IntershipsPage";
import CareerAdvicePage from "./CareerAdvicePage";
import ResumeReviewPage from "./ResumeReviewPage";
import ContactUsPage from "./ContactUsPage";
import FindJobPage from "./FindJobPage";
import JobDetailsPage from "./JobDetailsPage";
import ProfileDetails from "./ProfileDetails";
import ProfileDetailsPage from "./ProfileDetailsPage";

const App = () => (
  <Router>
    <Navbar bg="light" expand="lg" className="py-3">
      <Container style={{ maxWidth: "1120px" }}>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          Huntly
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <Nav.Link as={Link} to="/about-us" className="mx-2">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/career-advice" className="mx-2">
              Career Advice
            </Nav.Link>
            <Nav.Link as={Link} to="/resume" className="mx-2">
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to="/internships" className="mx-2">
              Internships
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="mx-2 text-primary">
              Login
            </Nav.Link>
            <Button as={Link} to="/sign-up" variant="primary" className="mx-2">
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/internships" element={<IntershipsPage />} />
      <Route path="/career-advice" element={<CareerAdvicePage />} />
      <Route path="/resume" element={<ResumeReviewPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/find-job" element={<FindJobPage />} />
      <Route path="/job-details" element={<JobDetailsPage />} />
      <Route path="/profile" element={<ProfileDetailsPage />} />
    </Routes>
  </Router>
);

export default App;
