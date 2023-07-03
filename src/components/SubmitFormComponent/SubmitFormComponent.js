import "./SubmitFormComponent.scss";
import LEFT_IMAGE from "../../assets/images/form_image_left.png";
import { SUBMIT_FORM_IMAGES } from "../../config/Constants";
import FormComponent from "./FormComponent/FormComponent";
import PrimaryButton from "../CommonComponents/PrimaryButton/PrimaryButton";

const SubmitFormComponent = () => {
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
          <FormComponent />
        </div>
      </div>
      <div className="right-image">
        <img src={SUBMIT_FORM_IMAGES.RIGHT_IMAGE} alt="form right" />
      </div>
        </div>
        <div className="button-section">
            <PrimaryButton buttonLabel="View My Profile" buttonWidth="389"/>
        </div>
    </div>
  );
};

export default SubmitFormComponent;
