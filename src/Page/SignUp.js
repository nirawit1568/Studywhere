import {
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useSession } from "../contexts/userContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "5vw",
  },
  sign: {
    textAlign: "right",
    marginRight: 5,
    // fontWeight: 700,
  },
  in: {
    textAlign: "left",
    fontWeight: 700,
    marginLeft: 5,
  },
  logo: {
    marginRight: 15,
  },
  head: {
    display: "flex",
    justifyContent: "center",
  },
}));

const initialState = {
  username: "",
  password: "",
  name: "",
  authCode: "",
  wallet: 1,
  signedUp: false,
};

function SignUp() {
  const classes = useStyles();
  const { login } = useSession();
  const [formState, setFormState] = useState(initialState);

  function onChange(e) {
    e.persist();
    setFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const { username, password, name, signedUp, authCode } = formState;
    if (!signedUp) {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email: username,
          "custom:name": name,
          "custom:wallet": "0",
        },
      })
        .then(() => {
          console.log("signed up");
          setFormState({ ...formState, signedUp: true });
        })
        .catch((err) => console.log(err));
    } else {
      Auth.confirmSignUp(username, authCode)
        .then(() => {
          console.log("confirmed sign up");
          login(username, password);
        })
        .catch((err) => console.log(err));
    }
  };

  const { signedUp } = formState;
  return (
    <Container maxWidth="xs">
      <Grid container spacing={5} className={classes.root}>
        <Grid className={classes.head}>
          <Typography variant="h4" className={classes.sign}>
            SIGN
          </Typography>
          <Typography variant="h4" className={classes.in} color="primary">
            UP
          </Typography>
        </Grid>
        {signedUp ? (
          <>
            <Grid item xs={10}>
              <TextField
                label="Confirm Code"
                name="authCode"
                InputProps={{ disableUnderline: true }}
                fullWidth
                type="text"
                variant="filled"
                size="small"
                value={formState.authCode}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={8}>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={onSubmit}
              >
                Confirm
              </Button>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={10}>
              <TextField
                label="Name"
                name="name"
                InputProps={{ disableUnderline: true }}
                fullWidth
                type="text"
                variant="filled"
                size="small"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                label="Email"
                InputProps={{ disableUnderline: true }}
                fullWidth
                type="email"
                variant="filled"
                size="small"
                name="username"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                label="Password"
                fullWidth
                variant="filled"
                type="password"
                size="small"
                name="password"
                onChange={onChange}
                InputProps={{ disableUnderline: true }}
              />
            </Grid>
            <Grid item xs={8}>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={onSubmit}
              >
                Sign Up
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
}
export default SignUp;
