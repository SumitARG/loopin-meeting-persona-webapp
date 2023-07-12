import "./FooterComponent.scss";
import COMPANY_LOGO from "../../assets/images/loopin_logo.svg";
import { LOOPIN_REDIRCT_URL } from "../../config/Constants";

const FooterComponent = () => {
  return (
    <div className="footer">
      <img src={COMPANY_LOGO} alt="Logo" onClick={() => window.open(LOOPIN_REDIRCT_URL,"_blank")}/>
      <div className="footer-right">© LoopinHQ 2023</div>
    </div>
  );
};

export default FooterComponent;
