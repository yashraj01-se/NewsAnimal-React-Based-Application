import React from "react";
import "./Newsitem.css";

const Newsitem = (props) => {
  let { Title, Description, imageurl, newsurl, author, date, source } = props;

  return (
    <div className="container my-3">
      <div
        className="card rounded-4 shadow-lg"
        style={{ width: "18rem", overflow: "hidden", height: "auto",cursor:"pointer" }} // Set height to auto for dynamic content
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: 0,
          }}
        >
          <span className="badge rounded-pill bg-info">{source.name}</span>
        </div>

        <img
          src={imageurl}
          alt="news"
          className="rounded-top"
          style={{
            width: "100%",
            height: "200px", // Fixed height for all images
            objectFit: "cover", // Ensures the image covers the area without stretching
          }}
        />
        <div className="card-body" style={{ minHeight: "150px" }}> {/* Set minimum height for card body */}
          <h5 className="card-title">{Title}</h5>

          <p className="card-text">{Description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "unknown"} on{" "}
              {new Date(date).toGMTString()}{" "}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsurl}
            target="_blank"
            className="btn btn-lr btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
