import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import guy from "../img/guy.png";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CardCourse from "../Component/CardCourse";
import API, { graphqlOperation } from "@aws-amplify/api";
import { getCustomer, listCourses } from "../graphql/queries";
import { useSession } from "../contexts/userContext";
import { Link } from "react-router-dom";

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

export default function MyCourse() {
  const [value, setValue] = useState(0);
  const { user } = useSession();
  const classes = useStyles();
  const [course, setCourse] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const fetchMyCourse = async () => {
    try {
      const id = [];
      const data = await API.graphql(
        graphqlOperation(getCustomer, { id: user?.sub })
      );
      const list = data.data.getCustomer.course.items;
      await list.map((course) => id.push({ id: { eq: course.id } }));
      const data_c = await API.graphql({
        query: listCourses,
        variables: { filter: { or: id } },
      });
      const list_c = data_c.data.listCourses.items;
      setCourse(list_c);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (user) {
      fetchMyCourse();
    }
  }, [user]);

  return (
    <>
      <Card className={classes.card}>
        <CardContent className={classes.cardCon}>
          <Grid container>
            <Grid item xs={5}>
              <Typography variant="h4" component="h1" className={classes.hi}>
                HI{user ? user["custom:name"] : <></>}
              </Typography>
              <Typography>It’s good to see you again</Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/"
              >
                {"Learn even more >"}
              </Button>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.guy}>
                <img src={guy} className={classes.img} alt="hello" />
              </div>
            </Grid>
            <Grid item xs={3} container>
              <Grid item xs={3}>
                <div className={classes.boxArt}></div>
                <div className={classes.boxArt}></div>
              </Grid>
              <Grid item xs={9}>
                <Typography className={classes.textAct}>
                  {course.length} Activity in progress
                </Typography>
                <Typography className={classes.textAct}>
                  0 Activity Finished
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
          </Tabs>
          {course.map((data) => (
            <CardCourse
              key={data.id}
              data={data}
              show={false}
              bColor={true}
              view={true}
            />
          ))}
        </CardContent>
      </Card>
    </>
  );
}
