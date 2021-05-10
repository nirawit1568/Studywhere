import API, { graphqlOperation } from "@aws-amplify/api";
import {
  Button,
  Card,
  CardContent,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useSession } from "../contexts/userContext";
import { createCustomer, createOwnCourse } from "../graphql/mutations";
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
}));

export default function Payment({ course }) {
  const classes = useStyles();
  const { user } = useSession();

  const payNow = async () => {
    try {
      const myCourse = await API.graphql(
        graphqlOperation(createOwnCourse, {
          input: { id: course.id, customerID: user?.sub },
        })
      );
      console.log(myCourse);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container maxWidth="sm" className={classes.root}>
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
            onClick={payNow}
          >
            Pay Now
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
