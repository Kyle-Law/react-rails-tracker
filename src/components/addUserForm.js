import React from "react";

export default function addUser() {
  return (
    <form action="">
      <label htmlFor="user">Add user:</label>
      <input type="text" id="user" />
      <button onClick={addUser}>Add User</button>
    </form>
  );
}
