import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import money from "../img/Money.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.light,
    marginTop: theme.spacing(3),
    borderRadius: 20,
  },
  cardMedia: {
    borderRadius: 15,
    height: 150,
    width: 250,
  },
  cardCon: {
    width: "60%",
  },
  textDes: {
    lineHeight: "1.5em",
    height: "3em",
    overflow: "hidden",
    marginBottom: "1em",
  },
  endCard: {
    width: "20%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column ",
    alignItems: "center",
  },
  money: {
    display: "flex",
    marginBottom: theme.spacing(3),
    alignItems: "flex-end",
  },
  img: {
    width: 45,
    height: 45,
  },
  noShow: {
    display: "none",
  },
}));

export default function CardCourse({ data, show, bColor, view }) {
  const classes = useStyles();
  const { cover, title, description, author, price, id } = data;
  return (
    <Card
      className={classes.root}
      style={{ background: bColor ? "#fff" : "#F5F5F7" }}
    >
      <CardMedia className={classes.cardMedia} image={cover} title="image" />
      <CardContent className={classes.cardCon}>
        <Typography variant="h6">{title}</Typography>
        <Typography className={classes.textDes}>{description}</Typography>
        <Typography variant="subtitle2">Created by : {author}</Typography>
      </CardContent>
      <div className={classes.endCard}>
        <div className={show ? classes.money : classes.noShow}>
          <img src={money} className={classes.img} alt="money" />
          <Typography style={{ marginLeft: 2, fontWeight: "bold" }}>
            ${price}
          </Typography>
        </div>
        <div>
          {view ? (
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to={"/learn/" + id}
            >
              View Course
            </Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to={"/course/" + id}
            >
              View Course
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
