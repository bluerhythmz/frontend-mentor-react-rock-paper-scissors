import triangle from "../images/bg-triangle.svg";

const Picker = () => {
  return (
    <main className="picker">
      <div className="picker__img-wrapper">
        <img src={triangle} alt="" className="picker__img" />
      </div>
      <div className="picker__choices">
        <div className="choice --paper">
          <div className="choice__inner --paper-inner"></div>
        </div>
        <div className="choice --scissors">
          <div className="choice__inner"></div>
        </div>
        <div className="choice --rock">
          <div className="choice__inner"></div>
        </div>
      </div>
    </main>
  );
};

export default Picker;
