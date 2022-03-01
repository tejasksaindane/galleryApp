import React, { useState } from "react";
import Webcam from "react-webcam";
import "./WebcamCapture.css";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import db from "./firebase";
import firebase from "firebase";
import { useRef } from "react";
import { useCallback } from "react";
// import ImageIcon from "@material-ui/icons/Image";
import ShareIcon from "@material-ui/icons/Share";
import CameraIcon from "@material-ui/icons/Camera";
import MicIcon from "@material-ui/icons/Mic";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  rounded: {
    color: "#fff",
  },
}));

const WebcamCapture = () => {
  const classes = useStyles();
  const webcamref = useRef(null);
  const [image, setImage] = useState(null);
  const [photos, setPhotos] = useState(null);
  const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: "user",
  };

  const capture = useCallback(
    (e) => {
      const imageSrc = webcamref.current.getScreenshot();
      // console.log(imageSrc);
      setImage(imageSrc);
      setPhotos(imageSrc);
    },
    [webcamref]
  );

  const addImage = (e) => {
    e.preventDefault();
    db.collection("images").add({
      images: image,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // setImage([...image, imageSrc]);
  };

  return (
    <div className="webcam__container">
      <Link className="app__link" to="/Preview">
        <h1 className="app__title">HealthCare VideoChat </h1>
      </Link>
      <div className="web-screen">
        <div className="webscreen-one">
          {/* <Webcam
            className="webcam__design"
            audio={true}
            height={videoConstraints.height}
            // ref={webcamref}
            screenshotFormat="image/jpeg"
            width={videoConstraints.width}
            videoConstraints={videoConstraints}
          /> */}
        </div>
        <div className="webscreen-two">
          <Webcam
            className="webcam__design"
            audio={true}
            height={videoConstraints.height}
            // ref={webcamref}
            screenshotFormat="image/jpeg"
            width={videoConstraints.width}
            videoConstraints={videoConstraints}
          />
        </div>

        {/* <Webcam
          className="webcam__design"
          audio={true}
          height={videoConstraints.height}
          ref={webcamref}
          screenshotFormat="image/jpeg"
          width={videoConstraints.width}
          videoConstraints={videoConstraints}
        /> */}
      </div>

      {/* <img src={image} alt="" /> */}
      <div className="webcam__btns">
        <CameraIcon
          className="webcam__img"
          fontSize="large"
          onClick={addImage}
        />
        <RadioButtonUncheckedIcon
          className="webcam__radio"
          fontSize="large"
          onClick={capture}
        />
        <ShareIcon fontSize="large" className="webcam__img" />
        <MicIcon fontSize="large" className="webcam__img" />
      </div>
      {/* <div className="webcam__avatar"> */}
      <Avatar
        style={{ height: "70px", width: "70px" }}
        variant="rounded"
        className={classes.rounded}
        src="/broken-image.jpg"
        className="webcam__avtaralign"
      >
        <img className="webcam__avtaralign" src={photos} alt="" />
      </Avatar>
      {/* </div> */}
    </div>
  );
};

export default WebcamCapture;
