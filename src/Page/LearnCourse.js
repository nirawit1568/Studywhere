import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API, { graphqlOperation } from "@aws-amplify/api";
import { getCourse } from "../graphql/queries";
import ReactPlayer from "react-player";

function LearnCourse() {
  const { id } = useParams();
  const [course, setCourse] = useState([]);

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

  // console.log(course.video.items[0].path);

  return (
    <div className="learncourse">
      <div className="learn">
        <div className="video">
          <h1 style={{ marginBottom: 15 }}>{course?.title}</h1>
          <ReactPlayer
            className="react-player fixed-bottom"
            url={course?.video?.items[0]?.path}
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        {/* <div className="lesson">
          <h1>Lessons</h1>
          <div className="list">
            <img src={folder} alt="folder-list" />
            <p>Lesson 1 : .......</p>
          </div>
          <div className="list">
            <img src={folder} alt="folder2" />
            <p>Lesson 2 : .......</p>
          </div>
          <div className="list">
            <img src={folder} alt="folder3" />
            <p>Lesson 3 : .......</p>
          </div>
          <div className="list">
            <img src={folder} alt="folder4" />
            <p>Lesson 4 : .......</p>
          </div>
          <a href="/">Finished Course</a>
        </div> */}
      </div>
    </div>
  );
}
export default LearnCourse;
