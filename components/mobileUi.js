const MobileUi = ({ children, show }) => {
  console.log(show);
  return (
    <div
      className="mobile"
      style={show === true ? { opacity: 1 } : { opacity: 0 }}
    >
      <div className="topBezel">
        <div className="dlc1"></div>
        <div className="dlc2"></div>
      </div>
      {/* <div className="bottomBezel"></div> */}
      {children}
    </div>
  );
};

export default MobileUi;
