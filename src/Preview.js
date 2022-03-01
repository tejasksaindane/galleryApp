import React, { useEffect } from "react";
import db from "./firebase";
import { useState } from "react";
import "./Preview.css";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { Link } from "react-router-dom";

const Preview = () => {
  const [pictures, setPictures] = useState();
  const [picVal, setPicVal] = useState("");

  const handleChange = (name) => (event) => {
    const pics = event.target.files[0];
    name == "photo" && setPicVal(URL.createObjectURL(pics));
  };

  useEffect(() => {
    db.collection("images")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPictures(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            images: doc.data().images,
          }))
        );
      });
  }, [Preview]);
  // const Darr = pictures[1].images;
  return (
    <div className="preview__container">
      <div className="preview__title">
        <h1 className="preview__heading">Gallery</h1>
        <Link to="/">
          <PhotoCameraIcon fontSize="large" className="preview__cam" />
        </Link>
      </div>
      <div className="preview__file">
        {/* TODO : file handling in reactjs */}
        <input
          onChange={handleChange("photo")}
          type="file"
          name="photo"
          accept="image"
          placeholder="choose a file"
        />
        {/* run kar */}
        <img
          src={picVal ? picVal : ""}
          width="270px"
          height="300px"
          border-radius="5px"
        />
      </div>
      <div className="preview__card">
        <div className="preview__img">
          {/* <img src={Darr} alt="" /> */}
          {pictures?.map((picture) => (
            <img className="preview__imgOne" src={picture.images} />
          ))}
          {/* <image src={photos}></image> */}
        </div>
      </div>
    </div>
  );
};

export default Preview;
// {movies.map(movie => (
//   <VideoCard key={movie.id} movie={movie} />
// ))}
