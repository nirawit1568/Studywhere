import {
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
  CircularProgress,
  Backdrop,
  Snackbar,
} from "@material-ui/core";
import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useSession } from "../contexts/userContext";
import { Alert } from "@material-ui/lab";

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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
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
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  function onChange(e) {
    e.persist();
    setFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const { username, password, name, signedUp, authCode } = formState;
    if (!signedUp) {
      setLoading(true);
      await Auth.signUp({
        username,
        password,
        attributes: {
          email: username,
          "custom:name": name,
          "custom:wallet": "0",
          "custom:course": "no",
        },
      })
        .then(() => {
          setLoading(false);
          setErr(null);
          console.log("signed up");
          setFormState({ ...formState, signedUp: true });
        })
        .catch((err) => {
          setLoading(false);
          setErr("Enter a password of more than 8 characters.");
          console.log(err);
        });
    } else {
      setLoading(true);
      Auth.confirmSignUp(username, authCode)
        .then(async () => {
          setLoading(false);
          console.log("confirmed sign up");
          login(username, password);
        })
        .catch((err) => {
          setLoading(false);
          setErr("Error code");
          console.log(err);
        });
    }
  };

  const { signedUp } = formState;
  return (
    <Container maxWidth="xs">
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
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
      <Snackbar open={err} autoHideDuration={3000}>
        <Alert severity="error">{err}</Alert>
      </Snackbar>
    </Container>
  );
}
export default SignUp;
