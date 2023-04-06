import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

const PersonalInfo = ({ nextStep, handleFormData, values }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (validator.isEmpty(values.Name)) {
      errors.Name = "This field is required";
    }

    if (validator.isEmpty(values.email)) {
      errors.email = "This field is required";
    }

    if (validator.isEmpty(values.phonenumber)) {
      errors.phonenumber = "This field is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      nextStep();
    }
  };

  return (
    <div>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                style={{ border: errors.Name ? "2px solid red" : "" }}
                name="Name"
                value={values.Name}
                type="text"
                placeholder="Name"
                onChange={handleFormData}
              />
              {errors.Name && (
                <Form.Text style={{ color: "red" }}>
                  {errors.Name}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={{ border: errors.email ? "2px solid red" : "" }}
                name="email"
                value={values.email}
                type="text"
                placeholder="Email"
                onChange={handleFormData}
              />
              {errors.email && (
                <Form.Text style={{ color: "red" }}>
                  {errors.email}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                style={{ border: errors.phonenumber ? "2px solid red" : "" }}
                name="phonenumber"
                value={values.phonenumber}
                type="text"
                placeholder="Phone Number"
                onChange={handleFormData}
              />
              {errors.phonenumber && (
                <Form.Text style={{ color: "red" }}>
                  {errors.phonenumber}
                </Form.Text>
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PersonalInfo;
