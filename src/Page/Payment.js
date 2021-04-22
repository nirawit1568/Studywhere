import {
  Button,
  Card,
  CardContent,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
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

export default function Payment() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" component="h2">
            UI Design With Figma
          </Typography>
          <div className={classes.price}>
            <Typography variant="p">Total price</Typography>
            <Typography variant="h6" color="primary">
              $45
            </Typography>
          </div>
          <div className={classes.boxCard}>
            <Card className={classes.inCard}>
              <img src={wallet} width={30} />
              <Typography>My Wallet</Typography>
              <Typography>$ 3,500</Typography>
            </Card>
          </div>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
          >
            Pay Now
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
