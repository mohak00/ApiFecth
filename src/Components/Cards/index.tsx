import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";
type proptype = {
  download_url: string;
  author: string;
  id?: string;
};
const Cards = ({ download_url, author, id }: proptype) => {
  return (
    <div className="card">
      <Link to={`/detail-page/${id}`}>
        <div className="imageAndText">
          <img className="image" src={download_url} alt="default" />
          <div className="author">{author}</div>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
