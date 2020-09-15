import React from "react";
import { newRecord } from "../actions";
import { connect } from "react-redux";

function AddRecord({ newRecord, user }) {
  function addNewRecord(e) {
    e.preventDefault();
    const portfolio = document.getElementById("portfolio").value;
    const emotion = document.getElementById("emotion").value;
    const description = document.getElementById("description").value;
    newRecord({ user_id: user.id, portfolio, emotion, description });
  }

  return (
    <div className="add-record-container">
      <h1>Add Record</h1>
      <form action="" className="add-record-form">
        <label htmlFor="portfolio">Portfolio:</label>
        <input type="number" name="portfolio" id="portfolio" />
        <label htmlFor="emotion">Emotion:</label>
        <select defaultValue="3" id="emotion" name="emotion">
          <option value="1">I'm Dumb :(</option>
          <option value="2">Sad</option>
          <option value="3">Neutral</option>
          <option value="4">Yayy</option>
          <option value="5">I'm a Genius!</option>
        </select>
        <label htmlFor="description">Description: </label>
        <textarea type="text" id="description" />
        <button onClick={addNewRecord}>Add Record</button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => ({
  users: state.users,
  user: state.user,
});

const mapDispatchToProps = () => ({
  newRecord,
});

export default connect(mapStateToProps, mapDispatchToProps())(AddRecord);
