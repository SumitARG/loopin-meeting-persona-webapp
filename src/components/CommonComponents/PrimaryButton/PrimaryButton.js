import "./PrimaryButton.scss";

const PrimaryButton = ({buttonLabel, buttonWidth, onButtonClick}) => {
  return (
    <div className="primary-button" style={{width:`${buttonWidth}px`}} onClick={onButtonClick}>
        <div className="button-label">{buttonLabel}</div>
    </div>
  )
}

export default PrimaryButton