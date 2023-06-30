import "./Option.scss";
import SELECTED_ICON from "../../../../assets/images/option_selected.svg";

const Option = ({ content, id, isSelected, setSelected }) => {
  const optionSelectHandler = () => {
    setSelected(id);
  };

  return (
    <div className="option" onClick={optionSelectHandler}>
      {content}
      {
        <img
          src={SELECTED_ICON}
          alt="selected"
          style={{ display: !isSelected ? "none" : "block" }}
        />
      }
    </div>
  );
};

export default Option;
