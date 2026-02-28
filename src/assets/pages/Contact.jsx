import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

// import '../Styles/contact.css'; // Optional custom styles

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      try {
        // Replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setFormErrors(errors);
    }
  };

  // Contact information cards data
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="contact-icon" />,
      title: 'Visit Us',
      details: ['123 Fashion Street', 'New York, NY 10001', 'United States'],
      className: 'info-card-location'
    },
    {
      icon: <FaPhone className="contact-icon" />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      className: 'info-card-phone'
    },
    {
      icon: <FaEnvelope className="contact-icon" />,
      title: 'Email Us',
      details: ['info@dresshaven.com', 'support@dresshaven.com'],
      className: 'info-card-email'
    },
    {
      icon: <FaClock className="contact-icon" />,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM - 8PM', 'Saturday: 10AM - 6PM', 'Sunday: 12PM - 5PM'],
      className: 'info-card-hours'
    }
  ];

  return (
    <div className="contact-page-wrapper">
      {/* Hero Section */}
      <section className="contact-hero-section py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="contact-hero-title display-4 fw-bold mb-3">
                Get In Touch
              </h1>
              <p className="contact-hero-subtitle lead text-muted">
                Have questions about our dresses? We're here to help you find the perfect outfit!
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Information Cards */}
      <section className="contact-info-section py-5">
        <Container>
          <Row>
            {contactInfo.map((info, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <Card className={`contact-info-card h-100 border-0 shadow-sm ${info.className}`}>
                  <Card.Body className="text-center p-4">
                    <div className="info-icon-wrapper mb-3">
                      {info.icon}
                    </div>
                    <h3 className="h5 fw-bold mb-3">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p className="text-muted mb-1" key={idx}>{detail}</p>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="contact-form-card border-0 shadow">
                <Card.Body className="p-5">
                  <Row>
                    <Col lg={6} className="mb-4 mb-lg-0">
                      <h2 className="h3 fw-bold mb-4">Send Us a Message</h2>
                      
                      {submitSuccess && (
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                          <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon.
                        </div>
                      )}

                      <Form onSubmit={handleSubmit}>
                        <Row>
                          <Col md={6} className="mb-3">
                            <Form.Group controlId="formName">
                              <Form.Label className="fw-semibold">Full Name *</Form.Label>
                              <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                isInvalid={!!formErrors.name}
                                className="form-control-lg"
                              />
                              <Form.Control.Feedback type="invalid">
                                {formErrors.name}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>

                          <Col md={6} className="mb-3">
                            <Form.Group controlId="formEmail">
                              <Form.Label className="fw-semibold">Email Address *</Form.Label>
                              <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                isInvalid={!!formErrors.email}
                                className="form-control-lg"
                              />
                              <Form.Control.Feedback type="invalid">
                                {formErrors.email}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={6} className="mb-3">
                            <Form.Group controlId="formPhone">
                              <Form.Label className="fw-semibold">Phone Number</Form.Label>
                              <Form.Control
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Enter your phone number"
                                className="form-control-lg"
                              />
                            </Form.Group>
                          </Col>

                          <Col md={6} className="mb-3">
                            <Form.Group controlId="formSubject">
                              <Form.Label className="fw-semibold">Subject</Form.Label>
                              <Form.Control
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                placeholder="What is this about?"
                                className="form-control-lg"
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        <Form.Group className="mb-4" controlId="formMessage">
                          <Form.Label className="fw-semibold">Message *</Form.Label>
                          <Form.Control
                            as="textarea"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={5}
                            placeholder="How can we help you?"
                            isInvalid={!!formErrors.message}
                            className="form-control-lg"
                          />
                          <Form.Control.Feedback type="invalid">
                            {formErrors.message}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Button
                          variant="primary"
                          type="submit"
                          size="lg"
                          className="w-100 submit-btn"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Sending...
                            </>
                          ) : (
                            'Send Message'
                          )}
                        </Button>
                      </Form>
                    </Col>

                    <Col lg={6}>
                      <div className="contact-sidebar ps-lg-4">
                        <h3 className="h5 fw-bold mb-4">Why Choose Us?</h3>
                        
                        <div className="benefits-list mb-4">
                          <div className="benefit-item d-flex mb-3">
                            <div className="benefit-icon me-3">
                              <span className="badge bg-primary rounded-circle p-2">✓</span>
                            </div>
                            <div>
                              <h4 className="h6 fw-bold mb-1">Expert Fashion Advice</h4>
                              <p className="text-muted small">Get personalized styling tips from our fashion experts</p>
                            </div>
                          </div>

                          <div className="benefit-item d-flex mb-3">
                            <div className="benefit-icon me-3">
                              <span className="badge bg-primary rounded-circle p-2">✓</span>
                            </div>
                            <div>
                              <h4 className="h6 fw-bold mb-1">Quick Response</h4>
                              <p className="text-muted small">We typically respond within 24 hours</p>
                            </div>
                          </div>

                          <div className="benefit-item d-flex mb-3">
                            <div className="benefit-icon me-3">
                              <span className="badge bg-primary rounded-circle p-2">✓</span>
                            </div>
                            <div>
                              <h4 className="h6 fw-bold mb-1">Size & Fit Guidance</h4>
                              <p className="text-muted small">Get help with sizing and fit recommendations</p>
                            </div>
                          </div>

                          <div className="benefit-item d-flex mb-3">
                            <div className="benefit-icon me-3">
                              <span className="badge bg-primary rounded-circle p-2">✓</span>
                            </div>
                            <div>
                              <h4 className="h6 fw-bold mb-1">Order Assistance</h4>
                              <p className="text-muted small">Help with orders, returns, and exchanges</p>
                            </div>
                          </div>
                        </div>

                        {/* Map Section */}
                        <div className="map-container mt-4">
                          <h3 className="h5 fw-bold mb-3">Find Us</h3>
                          <div className="map-placeholder bg-light p-3 rounded">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-73.98510768458437!3d40.74875897932781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                              width="100%"
                              height="250"
                              style={{ border: 0, borderRadius: '8px' }}
                              allowFullScreen=""
                              loading="lazy"
                              title="Store Location"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq-section py-5">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="h3 fw-bold">Frequently Asked Questions</h2>
              <p className="text-muted">Quick answers to common questions</p>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="faq-card border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <h4 className="h6 fw-bold mb-3">How do I find my size?</h4>
                  <p className="text-muted small">Check our detailed size guide with measurements for each dress. We also offer virtual fitting consultations.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="faq-card border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <h4 className="h6 fw-bold mb-3">What is your return policy?</h4>
                  <p className="text-muted small">We offer 30-day returns on all unworn dresses with original tags. Contact us for assistance.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;