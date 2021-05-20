import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Auth from "@aws-amplify/auth";
import { useHistory } from "react-router-dom";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { createCustomer } from "../graphql/mutations";
import API from "@aws-amplify/api";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const userContext = createContext();

export const UserProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [updates, setUpdates] = useState(null);
  const [err, setErr] = useState(false);
  const history = useHistory();

  const handleClose = () => {
    setErr(false);
  };
  const handleLogout = useCallback(async () => {
    try {
      await Auth.signOut({ global: true });
      setUser(null);
      history.push("/signin");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }, [history]);

  const handleLogin = useCallback(
    async (username, password) => {
      try {
        const data = await Auth.signIn(username, password);
        if (data.attributes["custom:course"] === "no") {
          console.log(data.attributes);
          await API.graphql(
            graphqlOperation(createCustomer, {
              input: { id: data.attributes?.sub },
            })
          );
          await Auth.updateUserAttributes(data, {
            "custom:course": "has",
          });
          const us = await Auth.signIn(username, password);
          setUser(us.attributes);
        } else {
          setUser(data.attributes);
        }
        history.push("/");
      } catch (error) {
        setErr(true);
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
  }, [updates]);
  const updatesWallet = useCallback(
    async (amount, pay) => {
      if (user) {
        try {
          const data = await Auth.currentAuthenticatedUser();
          if (pay) {
            await Auth.updateUserAttributes(data, {
              "custom:wallet": +user["custom:wallet"] - +amount + "",
            });
          } else {
            await Auth.updateUserAttributes(data, {
              "custom:wallet": +user["custom:wallet"] + +amount + "",
            });
          }
          setUpdates(Math.random() * 10);
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
      <Snackbar open={err} autoHideDuration={5000} onClose={handleClose}>
        <Alert severity="error">Entered the wrong password or email.</Alert>
      </Snackbar>
    </userContext.Provider>
  );
};

export const useSession = () => useContext(userContext);

export default userContext;
