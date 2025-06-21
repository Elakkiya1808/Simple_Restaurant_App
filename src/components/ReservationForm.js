import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles.css';
import DinerSelect from './DinerSelect';
import TimeDropdown from './TimeDropdown';
import patio from '../assets/images/reserve.jpeg';
import chef from '../assets/images/reserve2.jpg';
import food from '../assets/images/reserve3.jpg';
import calendarIcon from '../assets/icons/calendar.png';
import personIcon from '../assets/icons/person.png';
import glassIcon from '../assets/icons/glass.png';
import clockIcon from '../assets/icons/clock.png';
import { useNavigate } from 'react-router-dom';

function ReservationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    seating: '',
    date: '',
    diners: '',
    occasion: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    requests: '',
  });
const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.seating) newErrors.seating = "Please select seating";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.diners) newErrors.diners = "Please select number of diners";
    if (!formData.occasion) newErrors.occasion = "Please select an occasion";
    if (!formData.time) newErrors.time = "Please select a time";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
      setErrors({});
    }
  };

  const handleSubmitFinal = (e) => {
    e.preventDefault();
    if (validateStep1() && validateStep2()) {
      console.log('Reservation submitted:', formData);
      setShowSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setStep(1);
      setFormData({
        seating: '',
        date: '',
        diners: '',
        occasion: '',
        time: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        requests: '',
      });
       setTimeout(() => {
      navigate('/'); // change to '/home' or your route if different
    }, 2000);
    }
  };

  // Auto-hide success message
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <>
    <div className="reservation-section py-5" style={{ backgroundColor: '#4d6153', color: 'white' }}>
      <Container >
        <h2 className="reservation-title text-start">Reservations</h2>

        {/*  Success banner */}
        {showSuccess && (
          <div className="text-center mb-4">
            <div className="alert alert-success py-3 px-4 fw-bold fs-5 rounded">
              Your Reservation has been confirmed. Check your email.
            </div>
          </div>
        )}

        <Form onSubmit={step === 1 ? handleNextStep : handleSubmitFinal} className="reservation-form p-4">

          {/* Step 1 */}
          {step === 1 && (
            <>
              <Row className="mb-4 justify-content-center radio-row">
                <Col xs="auto">
                  <Form.Check
                    type="radio"
                    id="indoor"
                    name="seating"
                    value="Indoor"
                    label="Indoor seating"
                    onChange={handleChange}
                    className="custom-radio"
                    checked={formData.seating === 'Indoor'}
                  />
                </Col>
                <Col xs="auto">
                  <Form.Check
                    type="radio"
                    id="outdoor"
                    name="seating"
                    value="Outdoor"
                    label="Outdoor seating"
                    onChange={handleChange}
                    className="custom-radio"
                    checked={formData.seating === 'Outdoor'}
                  />
                </Col>
              </Row>
              {errors.seating && (
                <div className="text-danger ms-1">
                  <i className="bi bi-exclamation-circle-fill me-1"></i>
                  {errors.seating}
                </div>
              )}

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="formDate">
                    <Form.Label>Date</Form.Label>
                    <div className="custom-input">
                      <img src={calendarIcon} alt="calendar" className="input-icon" />
                      <Form.Control
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        isInvalid={!!errors.date}
                      />
                    </div>
                    {errors.date && (
                      <div className="invalid-feedback d-block">
                        <i className="bi bi-exclamation-circle-fill me-1"></i>
                        {errors.date}
                      </div>
                    )}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formDiners">
                    <Form.Label>Number of Diners</Form.Label>
                    <div className={`custom-input`}>
                      <img src={personIcon} alt="person" className="input-icon" />
                      <DinerSelect onChange={handleChange} value={formData.diners} />
                    </div>
                    {errors.diners && (
                      <div className="invalid-feedback d-block mt-1">
                        <i className="bi bi-exclamation-circle-fill me-1"></i>
                        {errors.diners}
                      </div>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="formOccasion">
                    <Form.Label>Occasion</Form.Label>
                    <div className="custom-input">
                      <img src={glassIcon} alt="glass" className="input-icon" />
                      <Form.Select name="occasion" onChange={handleChange} value={formData.occasion} isInvalid={!!errors.occasion}>
                        <option value="" disabled hidden>Occasion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Engagement</option>
                      </Form.Select>
                    </div>
                    {errors.occasion && (
                      <div className="invalid-feedback d-block">
                        <i className="bi bi-exclamation-circle-fill me-1"></i>
                        {errors.occasion}
                      </div>
                    )}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formTime">
                    <Form.Label>Time</Form.Label>
                    <div className={`custom-input`}>
                      <img src={clockIcon} alt="clock" className="input-icon" />
                      <TimeDropdown value={formData.time} onChange={handleChange} />
                    </div>
                    {errors.time && (
                      <div className="text-danger mt-1">
                        <i className="bi bi-exclamation-circle-fill me-1"></i>
                        {errors.time}
                      </div>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <div className="text-center mt-4">
                <Button type="submit" className="btn btn-warning px-4 py-2 fw-bold">
                  Reserve Table
                </Button>
              </div>
            </>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <>
              <div className="p-5" style={{ backgroundColor: '#4d6153', color: 'white' }}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>First Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        isInvalid={!!errors.firstName}
                      />
                      <Form.Control.Feedback type="invalid">
                        <i className="bi bi-exclamation-circle-fill me-1"></i>
                        {errors.firstName}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        <i className="bi bi-exclamation-circle-fill me-1"></i>
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <div className="summary-grid">
                      <div className="summary-row">
                        <div className="summary-item">
                          <img src={calendarIcon} alt="calendar" className="input-icon-2" />
                          {formData.date}
                        </div>
                        <div className="summary-item">
                          <img src={personIcon} alt="diners" className="input-icon-2" />
                          {formData.diners}
                        </div>
                      </div>

                      <div className="summary-row">
                        <div className="summary-item">
                          <img src={clockIcon} alt="time" className="input-icon-2" />
                          {formData.time}
                        </div>
                        <div className="summary-item">
                          <img src={glassIcon} alt="occasion" className="input-icon-2" />
                          {formData.occasion}
                        </div>
                      </div>

                      <div className="summary-seating fw-bold mt-2">
                        {formData.seating} seating
                      </div>
                    </div>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>Last Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                        isInvalid={!!errors.lastName}
                      />
                      <Form.Control.Feedback type="invalid">
                        <i className="bi bi-exclamation-circle-fill me-1"></i>
                        {errors.lastName}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Phone Number *</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="1234567890"
                        isInvalid={!!errors.phone}
                      />
                      <Form.Control.Feedback type="invalid">
                        <i className="bi bi-exclamation-circle-fill me-1"></i>
                        {errors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Special Requests</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="requests"
                        value={formData.requests}
                        onChange={handleChange}
                        placeholder="Comment"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Check
                  required
                  type="checkbox"
                  className="text-white mt-3"
                  label={<span>You agree to our friendly <a href="#" className="text-light">privacy policy</a></span>}
                />
              </div>

              <div className="text-center mt-4">
                <Button type="submit" className="btn btn-warning px-4 py-2 fw-bold">
                  Confirm Reservation
                </Button>
              </div>
            </>
          )}
        </Form>

       
      </Container>
    </div>
     {/* Images below */}
      <div style={{ backgroundColor: 'white' }}>
        <Container className="py-5 ">
          <Row className="text-center">
            <Col><img src={patio} className="img-fluid rounded" alt="patio" /></Col>
            <Col><img src={chef} className="img-fluid rounded" alt="chef" /></Col>
            <Col><img src={food} className="img-fluid rounded" alt="food" /></Col>
          </Row>
        </Container>
        </div>
        </>
  );
}

export default ReservationForm;
