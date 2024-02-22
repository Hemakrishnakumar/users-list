import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/UsersProvider";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const { addUser } = useData();
  function submitHandler(e) {
    e.preventDefault();
    if (age <= 0 || !name || !email) return;
    const newStd = {
      name,
      email,
      age,
    };
    addUser(newStd);
    navigate("/");
  }

  return (
    <div className="container">
      <h2>Enter Student Details</h2>
      <div id="form" className="box">
        <div>
          <label>Enter Name : </label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email : </label>
          <input
            required
            type="mail"
            value={email}
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Age : </label>
          <input
            required
            type="number"
            value={age}
            placeholder="eg. 10"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <button className="btn" onClick={() => navigate("/")}>
            Back to menu
          </button>
          <button
            className="btn"
            id="submit"
            type="button"
            onClick={submitHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
