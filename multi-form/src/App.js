import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import React, { useContext } from 'react';
import PersonalInfo from './components/personalInfo';
import SelectPlan from './components/selectPlan';
import FinishingUp from './components/finishingUp';
import PickAddOns from './components/pickAddOns';


function App() {
   //state for steps
   const [step, setStep] = useState(1);

    //state for form data
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    phonenumber: "",
    Advanced: "",
    Pro: "",
    Onlineservice1: "",
    Largerstorage: "",
    customizeprofile: "",
    Arcademonthly: "",
    Onlineservice2: "",
    Largerstorage: "",
    Total: "",
  })

   // function for going to next step by increasing step state by 1
   const nextStep = () => {
    setStep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setStep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
    // input value from the form
    const { value } = e.target;

   //updating for data state taking previous state and then adding new value to create new object
   setFormData(prevState => ({
    ...prevState,
    [input]: value
  }));
}

// javascript switch case to show different form in each step
switch (step) {
  // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the form
  case 1:
    return (
      <div className="App">
        <Container>
          <Row>
            <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
              <PersonalInfo nextStep={nextStep} handleFormData={handleInputData} values={formData} />
            </Col>
          </Row>
        </Container>
      </div>
    );

    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the form
    case 2:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <SelectPlan
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

        // case 3 to show stepthree form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 3:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                <PickAddOns nextStep ={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );

      case 4:
        return (
          <div className="App">
            <Container>
              <Row>
                <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                  <FinishingUp values={formData}  />
                </Col>
              </Row>
            </Container>
          </div>
        ); 
        
            // default case to show nothing
    default:
      return (
        <div className="App">paragraph
        </div>
      );
  }
}
export default App;
 


