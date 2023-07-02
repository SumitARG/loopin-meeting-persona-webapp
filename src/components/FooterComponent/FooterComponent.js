import "./FooterComponent.scss";
import COMPANY_LOGO from "../../assets/images/loopin_logo.svg";

const FooterComponent = () => {
  return (
    <div className="footer">
      <img src={COMPANY_LOGO} alt="Logo" />
      <div className="footer-right">© LoopinHQ 2023</div>
    </div>
  );
};

export default FooterComponent;
