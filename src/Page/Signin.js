import {
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState, useCallback } from "react";
// import imgG from "../img/google.png";
// import imgF from "../img/facebook.png";
import { Link } from "react-router-dom";
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
  qText: {
    marginRight: 10,
  },
}));

const initialState = {
  username: "",
  password: "",
};

function SignIn() {
  const classes = useStyles();
  const { login } = useSession();
  const [formState, setFormState] = useState(initialState);

  function onChange(e) {
    e.persist();
    setFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
  }

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      await login(formState.username, formState.password);
    },
    [login, formState]
  );

  return (
    <Container maxWidth="xs">
      <Grid container spacing={5} className={classes.root}>
        <Grid className={classes.head}>
          <Typography variant="h4" className={classes.sign}>
            SIGN
          </Typography>
          <Typography variant="h4" className={classes.in} color="primary">
            IN
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <TextField
            label="Email"
            name="username"
            InputProps={{ disableUnderline: true }}
            fullWidth
            variant="filled"
            size="small"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={10}>
          <TextField
            label="Password"
            name="password"
            fullWidth
            variant="filled"
            type="password"
            size="small"
            InputProps={{ disableUnderline: true }}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={8}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleLogin}
          >
            Sign in
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="overline" className={classes.qText}>
            Don’t have an account yet ?
          </Typography>
          <Typography
            color="primary"
            variant="overline"
            component={Link}
            to="/signup"
          >
            Sign up
          </Typography>
          {/* <Grid item xs={12}>
            <Typography>Sign in with</Typography>
          </Grid>
          <Link>
            <img src={imgF} width={36} className={classes.logo} alt="imgnsas" />
          </Link>
          <Link>
            <img src={imgG} width={36} alt="maskdfj" />
          </Link> */}
        </Grid>
      </Grid>
    </Container>
  );
}
export default SignIn;
