
import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "bootstrap";

const FinishingUp = ({ values }) => {

    //destructuring the object from values
  const { Name, email, phonenumber, arcade, advanced, pro, onlineservices, largerstorage, customizeprofile, arcademonthly } = values;
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <p>
            <strong>Name :</strong> {Name}{" "}
          </p>
          
          <p>
            <strong>phonenumber :</strong> {phonenumber}{" "}
          </p>
          <p>
            <strong>arcade :</strong> {arcade}{" "}
          </p>
          <p>
            <strong>advanced :</strong> {advanced}{" "}
            </p>
            <p>
            <strong>pro :</strong> {pro}{" "}
            </p>
            <p>
            <strong>onlineservices :</strong> {onlineservices}{" "}
            </p>
            <p>
            <strong>largerstorage :</strong> {email}{" "}
            </p>
            <p>
            <strong>customizeprofile :</strong> {customizeprofile}{" "}
            </p>
            <p>
            <strong>arcademonthly :</strong> {arcademonthly}{" "}
            </p>
            <p>
            <strong>largerstorage :</strong> {largerstorage}{" "}
            </p>
        </Card.Body>
      </Card>
      <Button variant="primary" onClick={"prevStep"}>
                Previous
              </Button>

              <Button variant="primary" type="submit">
                Submit
              </Button>
    </>
  );
};

export default FinishingUp;
