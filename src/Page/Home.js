import React, { useState, useEffect } from "react";
import { Button, makeStyles } from "@material-ui/core";
import CardCourse from "../Component/CardCourse";
import API, { graphqlOperation } from "@aws-amplify/api";
import { getCustomer, listCourses } from "../graphql/queries";
import { useSession } from "../contexts/userContext";
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
  let [cId, setCId] = useState();
  useEffect(() => {
    fetchCourse();
  }, [user]);

  const fetchCourse = async () => {
    try {
      if (user) {
        const id = [];
        const dataM = await API.graphql(
          graphqlOperation(getCustomer, { id: user?.sub })
        );
        const list_m = dataM.data.getCustomer.course.items;
        await list_m.map((course) => id.push(course.id));
        setCId(id);
        const data = await API.graphql(graphqlOperation(listCourses));
        const list = data.data.listCourses.items;
        setCourse(list);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
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
        <CardCourse
          key={"548" + data.title}
          data={data}
          show={true}
          view={cId.includes(data.id)}
        />
      ))}

      {/* <CardCourse show={true} /> */}
    </>
  );
}
