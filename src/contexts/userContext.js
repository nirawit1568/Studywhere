import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Auth from "@aws-amplify/auth";
import { useHistory } from "react-router-dom";

const userContext = createContext();

export const UserProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [updates, setUpdates] = useState(null);

  const history = useHistory();

  const handleLogout = useCallback(async () => {
    try {
      await Auth.signOut({ global: true });
      setIsLogin(false);
      history.push("/");
      console.log("Sign out");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }, [history]);

  const handleLogin = useCallback(
    async (username, password) => {
      try {
        const data = await Auth.signIn(username, password);
        setIsLogin(true);
        setUser(data.attributes);
        history.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await Auth.currentAuthenticatedUser();
        setUser(data.attributes);
      } catch (e) {
        console.log(e);
        setUser(null);
      }
    };
    getUser();
  }, [isLogin, updates]);
  const updatesWallet = useCallback(
    async (amount) => {
      if (user) {
        try {
          const data = await Auth.currentAuthenticatedUser();
          const result = await Auth.updateUserAttributes(data, {
            "custom:wallet": +user["custom:wallet"] + +amount + "",
          });
          setUpdates(Math.random() * 10);
          console.log(result);
        } catch (error) {
          console.log(error);
        }
      }
    },
    [user]
  );

  return (
    <userContext.Provider
      value={{
        user,
        updates: updatesWallet,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useSession = () => useContext(userContext);

export default userContext;
