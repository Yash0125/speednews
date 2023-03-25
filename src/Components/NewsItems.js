import React from "react";

const NewsItems=(props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    
    return (
      <div className="my-3" style={{minHeight:"500px"}}>
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://i-invdn-com.investing.com/news/LYNXNPEB7405M_L.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
            style={{minHeight:"414px",maxHeight:"414px", objectFit:"cover"}}
          />
          <div className="card-body" >
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-md btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItems;
