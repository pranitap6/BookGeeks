import React, { useEffect } from "react";
function Reviews({ match }) {
  const [heading, setHeading] = React.useState({
    volumeInfo: ""
  });
  async function fetchData() {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${match.params.id}`
    );
    res.json().then(res => setHeading(res));
    console.log(heading);
    console.log(heading.volumeInfo.title);
  }

  useEffect(() => {
    fetchData();
  });
  return (
    <div>
      <div className="container" style={{ color: "#e5e5e5" }}>
        <h2 style={{ marginBottom: 20 }}>{heading.volumeInfo.title}</h2>
        <p style={{ textAlign: "justify" }}>{heading.volumeInfo.description}</p>
      </div>
    </div>
  );
}

export default Reviews;
