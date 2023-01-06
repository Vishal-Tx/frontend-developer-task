import { createContext } from "react";
import data from "./assets/data";
import useLocalStorage from "./Hooks/useLocalStorage";

const postContext = createContext();

export const PostProvider = ({ children }) => {
  const [storedPosts, setStoredPosts] = useLocalStorage("posts", data);
  const [allUsers, setAllUsers] = useLocalStorage("allUsers", []);
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", null);

  const logoutUser = () => {
    setCurrentUser(null);
  };

  return (
    <postContext.Provider
      value={{
        storedPosts,
        setStoredPosts,
        allUsers,
        setAllUsers,
        currentUser,
        setCurrentUser,
        logoutUser,
      }}
    >
      {children}
    </postContext.Provider>
  );
};
export default postContext;
