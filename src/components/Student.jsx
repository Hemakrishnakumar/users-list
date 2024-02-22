import React from "react";
import { useData } from "../context/UsersProvider";

const Student = ({ student }) => {
  const { deleteUser } = useData();
  return (
    <div className="student">
      <h3>{student.name}</h3>
      <p>{student.age}</p>
      <button className="btn" onClick={(e) => deleteUser(student.id)}>
        Delete
      </button>
    </div>
  );
};

export default Student;
