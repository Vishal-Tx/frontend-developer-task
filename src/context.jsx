import { createContext } from "react";
import data from "./assets/data";
import useLocalStorage from "./Hooks/useLocalStorage";
import dayjs from "dayjs/esm/index.js";
import { nanoid } from "nanoid";

const postContext = createContext();

export const PostProvider = ({ children }) => {
  const [storedPosts, setStoredPosts] = useLocalStorage("posts", data);
  const [allUsers, setAllUsers] = useLocalStorage("allUsers", []);
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", null);

  const logoutUser = () => {
    setCurrentUser(null);
  };
  const handlePostDelete = async (id) => {
    const updatedPosts = storedPosts.filter((post) => post?.id !== id);
    console.log("updatedPosts", updatedPosts);
    setStoredPosts(updatedPosts);
  };

  const createPost = (message, emoji) => {
    const post = {
      id: nanoid(),
      name: currentUser.username,
      time: dayjs().format(),
      message,
      emoji,
      creator: {
        creatorEmail: currentUser.email,
        creatorUserName: currentUser.username,
      },
      isEdited: false,
    };
    setStoredPosts([...storedPosts, post]);
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
        handlePostDelete,
        createPost,
      }}
    >
      {children}
    </postContext.Provider>
  );
};
export default postContext;
