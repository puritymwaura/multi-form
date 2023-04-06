
import React from "react";
import { Card } from "react-bootstrap";

const FinishingUp = ({ values }) => {

    //destructuring the object from values
  const { Name, email, phonenumber, arcade, advanced, pro, onlineservices, largerstorage, customizeprofile, arcademonthly } = values;
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <p>
            <strong>Name :</strong> {firstName}{" "}
          </p>
          <p>
            <strong>email :</strong> {lastName}{" "}
          </p>
          <p>
            <strong>phonenumber :</strong> {age}{" "}
          </p>
          <p>
            <strong>arcade :</strong> {email}{" "}
          </p>
          <p>
            <strong>advanced :</strong> {email}{" "}
            </p>
            <p>
            <strong>pro :</strong> {email}{" "}
            </p>
            <p>
            <strong>onlineservices :</strong> {email}{" "}
            </p>
            <p>
            <strong>largerstorage :</strong> {email}{" "}
            </p>
            <p>
            <strong>customizeprofile :</strong> {email}{" "}
            </p>
            <p>
            <strong>arcademonthly :</strong> {email}{" "}
            </p>
            <p>
            <strong>onlineservices :</strong> {email}{" "}
            </p>
            <p>
            <strong>largerstorage :</strong> {email}{" "}
            </p>
        </Card.Body>
      </Card>
      <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" type="submit">
                Submit
              </Button>
    </>
  );
};

export default FinishingUp;
