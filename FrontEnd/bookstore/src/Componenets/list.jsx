import React, { useEffect } from "react";
import InputText from "./InputText";
import History from "./History";
function List(props) {
  const [Book, setBook] = React.useState([]);

  //Delete on Check
  async function handleCheck(event) {
    const item = event.target.value;
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: item })
    };
    const response = await fetch("http://localhost:9000/test", requestOptions);
    const data = await response.text();
    console.log(data);
  }
  //Post Data
  async function handleSubmit(name) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name })
    };
    const response = await fetch("http://localhost:9000/test", requestOptions);
    const data = await response.text();
    console.log(data);
  }
  //GET API data
  async function fetchData() {
    const res = await fetch("http://localhost:9000/test");
    res.json().then(res => setBook(res));
    // console.log(Book);
  }
  useEffect(() => {
    fetchData();
  });
  return (
    <div className="row">
      <div className="list col-sm-6">
        <table>
          <tr>
            <th>BookName</th>
            <th>Check</th>
          </tr>
          {Book.map(book => {
            return (
              <tr>
                <td>{book.name}</td>
                <td>
                  <input
                    name="item"
                    value={book.name}
                    onChange={handleCheck}
                    type="checkbox"
                  />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="grid col-sm-0">
        <InputText AddItem={handleSubmit} />
      </div>
    </div>
  );
}

export default List;
