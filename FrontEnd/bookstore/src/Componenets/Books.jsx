import React, { useEffect } from "react";
import Card from "./Card";
function Book() {
  const [heading, setHeading] = React.useState([]);
  async function fetchData() {
    const res = await fetch(
      "https://www.googleapis.com/books/v1/users/113577878318576262704/bookshelves/4/volumes?maxResults=40"
    );
    res.json().then(res => setHeading(res.items));
  }

  useEffect(() => {
    fetchData();
  });

  function createCard(cardTerm) {
    return (
      <Card
        name={cardTerm.volumeInfo ? cardTerm.volumeInfo.title : undefined}
        img={
          cardTerm.volumeInfo.imageLinks
            ? cardTerm.volumeInfo.imageLinks.thumbnail
            : undefined
        }
        id={cardTerm.id}
      />
    );
  }
  return (
    <div className="container">
      <div className="row">{heading.map(createCard)}</div>
    </div>
  );
}

export default Book;
