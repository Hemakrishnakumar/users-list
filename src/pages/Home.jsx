import React from "react";
import { useData } from "../context/UsersProvider";
import { useNavigate } from "react-router-dom";
import Student from "../components/Student";

const Home = () => {
  const { users, isLoading, addUser } = useData();
  const navigate = useNavigate();

  const newUser = {
    name: "Suresh",
    age: "23",
    email: "suresh@gmail.com",
  };

  return (
    <div className="container">
      <h2> List of Students</h2>
      <div className="box">
        {users.map((user, i) => (
          <Student key={i} student={user}></Student>
        ))}
      </div>
      <button className="btn" id="submit" onClick={(e) => navigate("/new")}>
        Add Student
      </button>
    </div>
  );
};

export default Home;
