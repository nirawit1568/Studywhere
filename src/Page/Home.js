import React, { useState, useEffect } from "react";
import { Button, makeStyles } from "@material-ui/core";
import CardCourse from "../Component/CardCourse";
import { useSession } from "../contexts/userContext";
import API, { graphqlOperation } from "@aws-amplify/api";
import { listCourses } from "../graphql/queries";
import { createCustomer } from "../graphql/mutations";
const useStyles = makeStyles({
  button: {
    fontWeight: "bold",
  },
});

export default function Home() {
  const [selButton, setSelButton] = useState(1);
  const classes = useStyles();
  const { user } = useSession();
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const data = await API.graphql(graphqlOperation(listCourses));
      const list = data.data.listCourses.items;
      setCourse(list);
    } catch (e) {
      console.log(e);
    }
  };

  const upCustomer = async () => {
    try {
      const customer = await API.graphql(
        graphqlOperation(createCustomer, { input: { id: user?.sub } })
      );
      console.log(customer);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {/* <Button
        size="large"
        className={selButton === 1 ? classes.button : classes.but}
        onClick={upCustomer}
      >
        Create My course
      </Button> */}
      <div>
        <Button
          size="large"
          className={selButton === 1 ? classes.button : classes.but}
          onClick={() => setSelButton(1)}
        >
          All Courses
        </Button>
        <Button
          className={selButton === 2 ? classes.button : classes.but}
          size="large"
          onClick={() => setSelButton(2)}
        >
          Most popular
        </Button>
        <Button
          className={selButton === 3 ? classes.button : classes.but}
          size="large"
          onClick={() => setSelButton(3)}
        >
          The newest
        </Button>
      </div>
      {course.map((data) => (
        <CardCourse key={"548" + data.title} data={data} show={true} />
      ))}
      {/* <CardCourse show={true} /> */}
    </>
  );
}
