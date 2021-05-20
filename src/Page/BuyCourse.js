import React, { useState, useEffect } from "react";
import buy from "../img/Money.png";
import { useParams } from "react-router-dom";
import API, { graphqlOperation } from "@aws-amplify/api";
import { getCourse } from "../graphql/queries";
import { Button, Container } from "@material-ui/core";
import Payment from "./Payment";

function BuyCourse() {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  const [pay, setPay] = useState(0);
  console.log(id);
  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const data = await API.graphql(graphqlOperation(getCourse, { id: id }));
      const list = data.data.getCourse;
      setCourse(list);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {pay ? (
        <Payment course={course} />
      ) : (
        <Container maxWidth="md">
          <div className="buycourse">
            <div className="top">
              <div className="piccourse">
                <img src={course.cover} alt="course-pic" />
              </div>
              <div className="detail">
                <h1>{course.title}</h1>
                <div className="price">
                  <img src={buy} alt="price-course" />
                  <h2>$ {course.price}</h2>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setPay(1)}
                >
                  BUY COURSE
                </Button>
              </div>
            </div>
            <div className="bottom">
              <div className="description">
                <h2> Description</h2>
                <br></br>
                <h3>Create by : {course.author}</h3>
                <br></br>
                <h4>{course.description}</h4>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
export default BuyCourse;
