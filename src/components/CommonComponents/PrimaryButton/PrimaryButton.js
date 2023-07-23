import "./PrimaryButton.scss";

const PrimaryButton = ({
  buttonLabel,
  buttonWidth,
  onButtonClick,
  disabled = false,
}) => {

  return (
    <div
      className={`primary-button ${disabled ? "disabled" : ""}`}
      style={{ width: `${buttonWidth}px` }}
      onClick={!disabled?onButtonClick:() => {}}
    >
      <div className="button-label">{buttonLabel}</div>
    </div>
  );
};

export default PrimaryButton;
