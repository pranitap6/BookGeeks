import React from "react";
import History from "./History";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="navigation">
      <Link to="/Books">
        <button
          type="button"
          class="btn"
          data-toggle="button"
          name="myBook"
          style={{ marginRight: 45 }}
        >
          myBook
        </button>
      </Link>
      <Link to="/Add">
        <button
          type="submit"
          class="btn"
          data-toggle="button"
          name="toRead"
          style={{ marginLeft: 100 }}
        >
          toRead
        </button>
      </Link>
    </div>
  );
}

export default Nav;
