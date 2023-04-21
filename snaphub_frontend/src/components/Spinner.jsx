import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

function Spinner(props) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      {/* <Loader
        type="Circles"
        color="#00BFFF"
        height={50}
        width={200}
        className="m-5"
      /> */}
      <CirclesWithBar
        wrapperClass="m-5"
        height="80"
        width="200"
        color="#00BFF"
        visible={true}
        outerCircleColor="#00BFFF"
        innerCircleColor="#00BFFF"
        barColor="#EF4444"
        ariaLabel="circles-with-bar-loading"
      />
      <p className="text-lg text-center px-2"><b>{props.message}</b></p>
    </div>
  );
}

export default Spinner;
