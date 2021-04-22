import React from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import guy from "../img/guy.png";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CardCourse from "../Component/CardCourse";

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: "center",
    backgroundColor: theme.palette.primary.light,
    marginBottom: theme.spacing(5),
    borderRadius: 15,
  },
  cardBot: {
    backgroundColor: theme.palette.primary.light,
    marginBottom: theme.spacing(5),
    borderRadius: 15,
  },
  cardCon: {
    padding: theme.spacing(4),
  },
  hi: {
    color: "#4E4D4D",
    fontWeight: 700,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  guy: {
    marginTop: -theme.spacing(9),
    position: "absolute",
    width: 200,
    height: 200,
  },
  boxArt: {
    backgroundColor: "#F54B01",
    width: "100%",
    height: 20,
    borderRadius: 5,
    marginBottom: theme.spacing(4),
  },
  textAct: {
    textAlign: "left",
    marginBottom: theme.spacing(3.5),
    fontWeight: 700,
    fontSize: "100%",
    marginLeft: theme.spacing(2),
  },
}));

const data = [
  {
    media: "https://source.unsplash.com/random",
    title: "Python certification",
    description:
      "เรียนการเขียนโปรแกรมด้วยเทคโนโลยีล่าสุดของ Python แบบ Step By Step จากเริ่มต้นไปเป็นมือโปร",
    creator: "Olan Samritjiarapon",
    price: 85,
  },
  {
    media: "https://source.unsplash.com/random",
    title: "SQL essentials",
    description:
      "เรียนรู้การเขียน SQL Query ตั้งแต่ขั้นพื้นฐานไปจนถึงการใช้งานจริง เพื่อเตรียมความพร้อมขั้นพื้นฐานการเป็น Data Scientist!",
    creator: "Olan Samritjiarapon",
    price: 45,
  },
  {
    media: "https://source.unsplash.com/random",
    title: "UI Design With Figma",
    description:
      "เรียนรู้การเขียน SQL Query ตั้งแต่ขั้นพื้นฐานไปจนถึงการใช้งานจริง เพื่อเตรียมความพร้อมขั้นพื้นฐานการเป็น Data Scientist!",
    creator: "Olan Samritjiarapon",
    price: 25,
  },
];

export default function MyCourse() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Card className={classes.card}>
        <CardContent className={classes.cardCon}>
          <Grid container>
            <Grid item xs={5}>
              <Typography variant="h4" component="h1" className={classes.hi}>
                Hi USERNAME !
              </Typography>
              <Typography>It’s good to see you again</Typography>
              <Button variant="contained" color="primary">
                {"Learn even more >"}{" "}
              </Button>
            </Grid>
            <Grid xs={4}>
              <div className={classes.guy}>
                <img src={guy} className={classes.img} />
              </div>
            </Grid>
            <Grid xs={3} container>
              <Grid item xs={3}>
                <div className={classes.boxArt}></div>
                <div className={classes.boxArt}></div>
              </Grid>
              <Grid xs={9}>
                <Typography className={classes.textAct}>
                  4 Activity in progress
                </Typography>
                <Typography className={classes.textAct}>
                  8 Activity Finished
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* in Tab */}
      <Card className={classes.cardBot}>
        <CardContent>
          <Tabs
            value={value}
            indicatorColor="secondary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="My Course" />
            <Tab label="Finished" />
            <Tab label="In Progress" />
          </Tabs>
          {data.map((data) => (
            <CardCourse data={data} show={false} bColor={true} />
          ))}
        </CardContent>
      </Card>
    </>
  );
}
