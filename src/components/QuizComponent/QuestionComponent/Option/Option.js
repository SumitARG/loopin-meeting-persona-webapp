import "./Option.scss";
import SELECTED_ICON from "../../../../assets/images/svg/option_selected.svg";

const Option = ({ content, id, isSelected, setSelected }) => {
  const optionSelectHandler = () => {
    setSelected(id);
  };

  return (
    <div className="option" onClick={optionSelectHandler}>
      <div className="option-content">{content}</div>
      <div className="selection-indicator">
        {
          <img
            src={SELECTED_ICON}
            alt="selected"
            style={{ display: !isSelected ? "none" : "block" }}
          />
        }
      </div>
    </div>
  );
};

export default Option;
