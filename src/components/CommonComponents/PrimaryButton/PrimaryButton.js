import "./PrimaryButton.scss";

const PrimaryButton = ({buttonLabel, buttonWidth}) => {
  return (
    <div className="primary-button" style={{width:`${buttonWidth}`}}>
        <div className="button-label">{buttonLabel}</div>
    </div>
  )
}

export default PrimaryButton