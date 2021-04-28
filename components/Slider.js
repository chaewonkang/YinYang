const Slider = () => {
  return (
    <>
      <div className="slider_container">
        <span>This is Slider.</span>
      </div>
      <style jsx>{`
        .slider_container {
          border: 1px solid blue;
          background-color: blue;
          height: 90%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default Slider;
