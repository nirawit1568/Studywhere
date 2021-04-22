import { Button, Box } from "@material-ui/core";
import React from "react";
import logo from "../img/logo.png";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  gButton: {
    marginLeft: "auto",
    width: "50vw",
    display: "flex",
    justifyContent: "space-around",
    marginTop: "2.3vw",
  },
  button: {
    width: "30%",
    height: "80%",
  },
  logoW: {
    display: "flex",
    width: "100%",
    height: "100%",
    textDecoration: "none",
    color: "#000",
  },
}));

function MenuBar() {
  const classes = useStyles();
  return (
    <div className="menubar">
      <Link to="/" className={classes.logoW}>
        <img src={logo} className="logo" alt="logo" />
        <p className="studywhere">
          <b>Study</b>Where
        </p>
      </Link>
      <div className={classes.gButton}>
        <Button className={classes.button} component={Link} to="/my-course">
          MY Course
        </Button>
        <Button className={classes.button} variant="contained" color="primary">
          Sign in
        </Button>
      </div>
    </div>
  );
}
export default MenuBar;
