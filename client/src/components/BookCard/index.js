import React from "react";
import "./style.css";

function BookCard(props) {
    return (
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="card-body">
                <p className="card-text"><small className="text-muted">Text of Interest</small></p>
                <h5 className="card-title">{props.quote}</h5>
                <p className="card-text">{props.synopsis}</p>
            </div>
          </div>
          <div className="col-md-4">
            <p className="card-text"><small className="text-muted">Cover Art</small></p>
            <img className="card-img" alt="book-cover" style={{ backgroundImage: `url("${props.bookImage}")`}} />
          </div>
        </div>

        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="card-body">
                <p className="card-text"><small className="text-muted">Original Publisher</small></p>
                <p className="card-text">{props.originalPublisher}</p>
                <p className="card-text"><small className="text-muted">Current Publisher</small></p>
                <p className="card-text">{props.currentPublisher}</p>
                
            </div>
          </div>
          <div className="col-md-4">
            <p className="card-text"><small className="text-muted">Year Published</small></p>
            <p className="card-text">{props.yearPublished}</p>
          </div>
        </div>
      </div>
    )
};

export default BookCard;