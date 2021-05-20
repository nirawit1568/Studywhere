import API, { graphqlOperation } from "@aws-amplify/api";
import {
  Backdrop,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  makeStyles,
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { useSession } from "../contexts/userContext";
import { createOwnCourse } from "../graphql/mutations";
import wallet from "../img/wallet.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "5vw",
  },
  card: {
    padding: theme.spacing(2),
    width: 650,
    background: theme.palette.primary.light,
  },
  boxCard: {
    display: "flex",
    justifyContent: "center",
  },
  inCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 250,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(1),
  },
  price: {
    marginTop: theme.spacing(2),
  },
  button: {
    width: 200,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function Payment({ course }) {
  const classes = useStyles();
  const history = useHistory();
  const { user, updates } = useSession();
  const [load, setLoad] = useState(false);
  const [open, setOpen] = useState(false);

  const payNow = async () => {
    try {
      setOpen(false);
      setLoad(true);
      await API.graphql(
        graphqlOperation(createOwnCourse, {
          input: { id: course.id, customerID: user?.sub },
        })
      );
      setLoad(false);
      updates(course.price, true);
      history.push("/my-course");
    } catch (e) {
      console.log(e);
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Backdrop className={classes.backdrop} open={load}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" component="h2">
            {course.title}
          </Typography>
          <div className={classes.price}>
            <Typography>Total price</Typography>
            <Typography variant="h6" color="primary">
              ${course.price}
            </Typography>
          </div>
          <div className={classes.boxCard}>
            <Card className={classes.inCard}>
              <img src={wallet} width={30} alt="wallet" />
              <Typography>My Wallet</Typography>
              {user ? (
                <Typography>$ {user["custom:wallet"]}</Typography>
              ) : (
                <></>
              )}
            </Card>
          </div>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={handleClickOpen}
          >
            Pay Now
          </Button>
        </CardContent>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Want to buy {course.name} course for $ {course.price} ?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={payNow} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
