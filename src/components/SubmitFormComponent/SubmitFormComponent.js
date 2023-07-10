import "./SubmitFormComponent.scss";
import LEFT_IMAGE from "../../assets/images/form_image_left.png";
import {
  LOCAL_STORAGE,
  ROUTE_NAMES,
  SUBMIT_FORM_IMAGES,
} from "../../config/Constants";
import PrimaryButton from "../CommonComponents/PrimaryButton/PrimaryButton";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router";
import { FormGroup } from "react-bootstrap";

const SubmitFormComponent = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
  });

  const [formDataValidators, setFormDataValidators] = useState({
    firstName: true,
    lastName: true,
    company: true,
    email: true,
  })

  const formEditHandler = (event, field) => {
    let tempFormData = formData;
    tempFormData[field] = event.target.value;
    setFormData(tempFormData);
  };

  const formSubmitHandler = () => {

    let validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let checkValidation = formDataValidators;

    if(formData.company.trim() === ""){
      checkValidation.company = false;
    }
    if(formData.firstName.trim() === ""){
      checkValidation.firstName = false;
    }
    if(formData.lastName.trim() === ""){
      checkValidation.lastName = false;
    }
    if(!formData.email.match(validEmailRegex)){
      checkValidation.email = false;
    }

    setFormDataValidators(checkValidation);
    console.log(formDataValidators);

    // if(checkValidation.company && checkValidation.firstName && checkValidation.lastName && checkValidation.email){
      let computedPersona = getPersona();
      localStorage.setItem(LOCAL_STORAGE.COMPUTED_PERSONA, computedPersona);
      navigate(`/${ROUTE_NAMES.COMPUTED_PERSONA_ROUTE}`);
    // }
  };

  const getPersona = () => {
    let answers = localStorage.getItem(LOCAL_STORAGE.ANSWERS_STORAGE);
    answers = JSON.parse(answers);
    if (answers[1].includes("c)") && answers[2].includes("b)")) {
      return "The Captivating Creator";
    } else if (answers[2].includes("b)")) {
      return "The Dynamic Agenda Artist";
    } else if (answers[3].includes("c)")) {
      return "The Conflict Whisperer";
    } else if (
      answers[2].includes("a)") &&
      answers[4].includes("a)") &&
      answers[5].includes("a)")
    ) {
      return "The Outcome Orchestrator";
    } else if (answers[6].includes("a)")) {
      return "The Celebration Connoisseur";
    } else if (
      answers[1].includes("b)") &&
      answers[2].includes("a)") &&
      answers[5].includes("a)")
    ) {
      return "The Super Productive Prodigy";
    } else if (answers[6].includes("b)")) {
      return "The Creative Maverick";
    } else if (answers[5].includes("c)")) {
      return "The Chill Zen Master";
    } else if (answers[6].includes("c)")) {
      return "The Spontaneous Frame Jumper";
    } else {
      return "Issuficient Data! It would be great if you take the Quiz again 🚀";
    }
  };

  return (
    <div className="submit-form">
      <div className="top-section">
        <div className="left-image">
          <img src={LEFT_IMAGE} alt="form left" />
        </div>
        <div className="form">
          <div className="form-header">All Done !</div>
          <div className="form-content">
            <p>
              Time to find out your meeting persona type and access your custom
              profile filled with resources to help you be the champion of your
              next team meeting 🎳🏆.
            </p>{" "}
            <p>
              🔮 Add your work email id, if you are interested to see other
              personalities from your company.
            </p>
          </div>
          <div className="form-section">
            <FormGroup className="form-layout">
              <div>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(event) => formEditHandler(event, "firstName")}
                  placeholder="Enter your first name"
                  isInvalid={!formDataValidators.firstName}
                />
              </div>
              <div>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(event) => formEditHandler(event, "lastName")}
                  placeholder="Enter your last name"
                  isInvalid={!formDataValidators.lastName}
                />
              </div>
              <div>
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(event) => formEditHandler(event, "company")}
                  placeholder="What is the name of your org"
                  isInvalid={!formDataValidators.company}
                />
              </div>
              <div>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  as="input"
                  type="email"
                  onChange={(event) => formEditHandler(event, "email")}
                  placeholder="Your email address"
                  isInvalid={!formDataValidators.email}
                />
              </div>
            </FormGroup>
          </div>
        </div>
        <div className="right-image">
          <img src={SUBMIT_FORM_IMAGES.RIGHT_IMAGE} alt="form right" />
        </div>
      </div>
      <div className="button-section">
        <PrimaryButton
          buttonLabel="View My Profile"
          buttonWidth="389"
          onButtonClick={formSubmitHandler}
        />
      </div>
    </div>
  );
};

export default SubmitFormComponent;
