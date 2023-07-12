import "./HeaderComponent.scss";
import COMPANY_LOGO from "../../assets/images/Vector.svg"
import COMPANY_NAME from "../../assets/images/Group.svg"
import { LOOPIN_REDIRCT_URL } from "../../config/Constants";

const HeaderComponent = () => {
  return (
    <div className="header" id="header" onClick={() => window.open(LOOPIN_REDIRCT_URL,"_blank")}>
        <img src={COMPANY_LOGO} alt="Logo" />
        <img src={COMPANY_NAME} alt="Name" />
    </div>
  )
}

export default HeaderComponent