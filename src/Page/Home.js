import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import CardCourse from "../Component/CardCourse";
const useStyles = makeStyles({
  button: {
    fontWeight: "bold",
  },
});

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

export default function Home() {
  const [selButton, setSelButton] = React.useState(1);
  const classes = useStyles();
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
      {data.map((data) => (
        <CardCourse data={data} show={true} />
      ))}
      {/* <CardCourse show={true} /> */}
    </>
  );
}
