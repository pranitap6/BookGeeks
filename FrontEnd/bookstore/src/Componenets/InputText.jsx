import React from "react";
function InputText(props) {
  const [heading, setHeading] = React.useState();
  function handleChange(event) {
    const value = event.target.value;
    setHeading(value);
    //console.log(heading);
  }
  return (
    <form
      onSubmit={event => {
        props.AddItem(heading);
        event.preventDefault();
      }}
    >
      <label for="bookname">Name</label>
      <input
        type="text"
        onChange={handleChange}
        name="bookname"
        id="bookname"
      />
      <button type="submit" value="name" name="addbutton">
        Add
      </button>
    </form>
  );
}

export default InputText;
