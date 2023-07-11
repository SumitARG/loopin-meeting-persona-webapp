import "./HeaderComponent.scss";
import COMPANY_LOGO from "../../assets/images/Vector.svg"
import COMPANY_NAME from "../../assets/images/Group.svg"

const HeaderComponent = () => {
  return (
    <div className="header" id="header">
        <img src={COMPANY_LOGO} alt="Logo" />
        <img src={COMPANY_NAME} alt="Name" />
    </div>
  )
}

export default HeaderComponent