import React from "react";
import { Link } from "react-router-dom";
function Card(props) {
  return (
    <div className="col-sm-2" style={{ marginBottom: 20 }}>
      <div className="card cardDesign">
        <img class="card-img-top" src={props.img} alt="Card" />
        <div class="card-body">
          <Link to={`/Books/${props.id}`} className="stretched-link card-title">
            <h5 class="Booktitle">{props.name}</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
