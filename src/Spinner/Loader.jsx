import "./Loader.css"; // Import the CSS file

const Loader = () => {
  return (
    <div className="flex justify-center items-center m-auto">
      <div className="loader-container flex justify-center">
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Loader;
