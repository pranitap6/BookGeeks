import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Add() {
  return (
    <div>
      <Header />
      <div className="addBook">
        <form id="booksform">
          <label for="fname">Book Title</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Book Name..."
          />
          <label for="reviews">Review</label>
          <textarea
            form="booksform"
            name="review"
            id="reviews"
            placeholder="Review..."
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Add;
