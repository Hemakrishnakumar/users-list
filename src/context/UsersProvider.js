import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const UsersContext = createContext();

const BASE_URL = "http://localhost:9000/users";

const initialState = {
  users: [],
  error: "",
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "setUsers":
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case "addUser":
      return {
        ...state,
        isLoading: false,
        error: "",
        users: [...state.users, action.payload],
      };
    case "load":
      return {
        ...state,
        isLoading: true,
      };
    case "deleteUser":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case "error":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return initialState;
  }
}

const UsersProvider = ({ children }) => {
  const [{ users, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    getUsersData();
    async function getUsersData() {
      try {
        const res = await axios.get(BASE_URL);
        dispatch({ type: "setUsers", payload: res.data });
      } catch (error) {
        dispatch({ type: "error", payload: error || "something went wrong" });
      }
    }
  }, []);

  async function addUser(newUser) {
    try {
      const res = await axios.post(BASE_URL, JSON.stringify(newUser), {
        headers: { "Content-Type": "application/json" },
      });
      if (res.status === 201) dispatch({ type: "addUser", payload: res.data });
    } catch (error) {
      dispatch({ type: "error", payload: error || "something went wrong" });
    }
  }

  async function deleteUser(id) {
    try {
      const res = await axios.delete(`${BASE_URL}/${id}`);
      if (res.status === 200) dispatch({ type: "deleteUser", payload: id });
    } catch (error) {
      dispatch({ type: "error", payload: error || "something went wrong" });
    }
  }

  return (
    <UsersContext.Provider
      value={{ users, isLoading, error, addUser, deleteUser }}
    >
      {children}
    </UsersContext.Provider>
  );
};

function useData() {
  return useContext(UsersContext);
}

export { UsersProvider, useData };
