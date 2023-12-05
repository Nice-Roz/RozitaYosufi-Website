import "./Navbar.css";
const Languageoption = (props) => {
  return (
    <>
      <div className="dropDown">
        <select onChange={props.onChange}>
          <option>Languages</option>
          <option value={"en"}>English</option>
          <option value={"tr"}>Turkey</option>
          <option value={"gr"}>German</option>
        </select>
      </div>
    </>
  );
};
export default Languageoption;
