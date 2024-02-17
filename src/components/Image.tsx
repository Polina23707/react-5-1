import React from "react";

interface ImageType {
  url: string;
}

const Image: React.FC<ImageType> = ({url}) => {
  return <img src={url} className="card-img" alt="..."></img>
}

export default Image;