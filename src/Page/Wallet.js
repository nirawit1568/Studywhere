import {
  Button,
  Card,
  CardContent,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useSession } from "../contexts/userContext";
import wallet from "../img/wallet.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "5vw",
  },
  card: {
    // padding: theme.spacing(2),
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
    width: 450,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
  },
  price: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    width: 200,
  },
  field: {
    width: 450,
  },
}));

export default function Wallet() {
  const classes = useStyles();
  const [amount, setAmount] = React.useState(0);
  const { updates, user } = useSession();

  const topUp = React.useCallback(
    async (e) => {
      e.preventDefault();
      await updates(amount);
    },
    [updates, amount]
  );
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
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
          <TextField
            label="Amount"
            name="amount"
            type="number"
            InputProps={{ disableUnderline: true }}
            className={classes.field}
            variant="filled"
            size="small"
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={topUp}
          >
            Top Up
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
