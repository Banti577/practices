import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const userContext = createContext();

export const useUsers = () => useContext(userContext);

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [IsLoader, setIsLoader] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoader(true);
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoader(false);
      }
    }

    fetchData();
  }, []);

  return (
    <userContext.Provider value={{ users, IsLoader, setUsers }}>
      {children}
    </userContext.Provider>
  );
};

export default UsersProvider;
