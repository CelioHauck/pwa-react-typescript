import React, { useRef } from "react";
import Webcam from "react-webcam";

const Camera = () => {
  const camRef = useRef(null);
  return (
    <>
      <div style={{ position: "relative" }}>
        <Webcam
          ref={camRef}
          audio={false}
          id="inputVideo"
          screenshotFormat="image/png"
        />
      </div>
    </>
  );
};

export default Camera;
