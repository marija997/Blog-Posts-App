const Heading = ({ text }) => {
  return (
    <div className={`heading`}>
      <div className={`heading-line left`}></div>
      <h1 className={`text`}>{text}</h1>
      <div className={`heading-line right`}></div>
    </div>
  );
};

export default Heading;
