import { collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { FormGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";
import LEFT_IMAGE from "../../assets/images/form_image_left.png";
import RIGHT_IMAGE from "../../assets/lotties/form_image_right.json";
import { LOCAL_STORAGE, ROUTE_NAMES } from "../../config/Constants";
import { firestore } from "../../firebase_setup/firebase";
import PrimaryButton from "../CommonComponents/PrimaryButton/PrimaryButton";
import "./SubmitFormComponent.scss";
import { Player } from "@lottiefiles/react-lottie-player";

const SubmitFormComponent = () => {
  const navigate = useNavigate();

  const userRef = collection(firestore, "Users");

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
  });

  const formEditHandler = (event, field) => {
    let tempFormData = formData;
    tempFormData[field] = event.target.value;
    setFormData(tempFormData);
  };

  const formSubmitHandler = async () => {
    let validEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let checkValidation = formDataValidators;

    if (formData.company.trim() === "") {
      checkValidation.company = false;
    }
    if (formData.firstName.trim() === "") {
      checkValidation.firstName = false;
    }
    if (formData.lastName.trim() === "") {
      checkValidation.lastName = false;
    }
    if (!formData.email.match(validEmailRegex)) {
      checkValidation.email = false;
    }

    setFormDataValidators(checkValidation);

    // if(checkValidation.company && checkValidation.firstName && checkValidation.lastName && checkValidation.email){
    let computedPersona = getPersona();
    localStorage.setItem(LOCAL_STORAGE.COMPUTED_PERSONA, computedPersona);
    localStorage.setItem(LOCAL_STORAGE.USER_EMAIL, formData.email);
    await setDoc(doc(userRef), {
      firstName: formData.firstName,
      lastName: formData.lastName,
      company: formData.company,
      email: formData.email,
      persona: computedPersona,
    });
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
                <Form.Label>Work Email</Form.Label>
                <Form.Control
                  as="input"
                  type="email"
                  onChange={(event) => formEditHandler(event, "email")}
                  placeholder="Your work email address"
                  isInvalid={!formDataValidators.email}
                />
              </div>
            </FormGroup>
          </div>
          <div className="form-content">
            <p>
              🔮 Add your work email id, if you are interested to see other
              personalities from your company.
            </p>
          </div>
        </div>
        <div className="right-image">
          <Player
            className="quiz-lottie"
            src={RIGHT_IMAGE}
            alt="form right"
            loop
            autoplay
          />
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
