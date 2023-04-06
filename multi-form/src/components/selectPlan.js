import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

const SelectPlan = ({ nextStep, handleFormData, prevStep, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (
      validator.isEmpty(values.arcade) ||
      validator.isEmpty(values.advanced) ||
      validator.isEmpty(values.pro)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };
  
  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Arcade</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="arcade"
                placeholder="Arcade"
                onChange={handleFormData("arcade")}
              />
              {error && (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Advanced</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="advanced"
                placeholder="advanced"
                onChange={handleFormData("advanced")}
              />
              {error && (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pro</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="pro"
                placeholder="pro"
                onChange={handleFormData("pro")}
              />
              {error && (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              )}
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default SelectPlan;
