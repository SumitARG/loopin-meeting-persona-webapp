import "./FormComponent.scss";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
  });

  const formEditHandler = (event, field) => {
    let tempFormData = formData;
    tempFormData[field] = event.target.value;
    setFormData(tempFormData);
  };

  return (
    <div className="form-layout">
      <div>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          onChange={(event) => formEditHandler(event, "firstName")}
          placeholder="Enter your first name"
        />
      </div>
      <div>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          onChange={(event) => formEditHandler(event, "lastName")}
          placeholder="Enter your last name"
        />
      </div>
      <div>
        <Form.Label>Company</Form.Label>
        <Form.Control
          type="text"
          onChange={(event) => formEditHandler(event, "company")}
          placeholder="What is the name of your org"
        />
      </div>
      <div>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          onChange={(event) => formEditHandler(event, "email")}
          placeholder="Your email address"
        />
      </div>
    </div>
  );
};

export default FormComponent;
