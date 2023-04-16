import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

const PickAddOns = ({ nextStep, handleFormData, prevStep, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (
      validator.isEmpty(values.onlineservices) ||
      validator.isEmpty(values.largestorage) ||
      validator.isEmpty(values.customizeprofile)
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
              <Form.Label>onlineservices</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                placeholder="onlineservices"
                onChange={()=>handleFormData("onlineservices")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>largestorage</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                placeholder="largestorage"
                onChange={handleFormData("largestorage")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>customizeprofile</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                placeholder="customizeprofile"
                onChange={handleFormData("customizeprofile")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
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

export default PickAddOns;
