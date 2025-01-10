import React, { useState } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (!formData.terms)
      newErrors.terms = "You must agree to the Terms of Service.";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setErrors({});
      setSuccess(true);
      console.log("Form Submitted Successfully:", formData);
    } else {
      setErrors(formErrors);
      setSuccess(false);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Body>
          <h3 className="text-center mb-4">
            Welcome to <span className="text-primary">Huntly!</span>
          </h3>
          <p className="text-center text-muted mb-4">
            Sign up to discover top jobs and internships. Start your journey
            today!
          </p>

          {/* Success Message */}
          {success && (
            <Alert variant="success">Account created successfully!</Alert>
          )}

          <Form onSubmit={handleSubmit}>
            {/* Username Field */}
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                isInvalid={!!errors.username}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Email Field */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Password Field */}
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Terms Checkbox */}
            <Form.Group className="mb-3" controlId="terms">
              <Form.Check
                type="checkbox"
                label="I agree to the Terms of Service and acknowledge you've read our Privacy Policy."
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                isInvalid={!!errors.terms}
              />
              <Form.Control.Feedback type="invalid">
                {errors.terms}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Submit Button */}
            <Button type="submit" variant="primary" className="w-100">
              Create an account
            </Button>
          </Form>

          <p className="text-center mt-3">
            Already a hunter?{" "}
            <Link to="/login" className="text-primary">
              Log in
            </Link>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SignUp;
