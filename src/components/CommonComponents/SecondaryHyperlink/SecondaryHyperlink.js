import "./SecondaryHyperlink.scss";

const SecondaryHyperlink = ({ linkLabel, onButtonClick }) => {
  return (
    <div className="secondary-hyperlink" onClick={onButtonClick}>
      <label>{linkLabel}</label>
    </div>
  );
};

export default SecondaryHyperlink;
