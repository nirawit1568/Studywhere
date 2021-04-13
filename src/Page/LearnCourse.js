import React from 'react';
import MenuBar from '../Component/MenuBar';
import video from '../img/video.png';
import folder from '../img/folder.png';
import send from '../img/send.png';

function LearnCourse () {
    return(
        <div className="learncourse">
            <MenuBar/>
            <div className="learn">
                    <div className="video">
                        <h1>Course - Name Course</h1>
                        <img src={video}/>
                    </div>
                    <div className="lesson">
                        <h1>Lessons</h1>
                        <div className="list">
                            <img src={folder}/><p>Lesson 1 : .......</p>
                        </div>
                        <div className="list">
                            <img src={folder}/><p>Lesson 2 : .......</p>
                        </div>
                        <div className="list">
                            <img src={folder}/><p>Lesson 3 : .......</p>
                        </div>
                        <div className="list">
                            <img src={folder}/><p>Lesson 4 : .......</p>
                        </div>
                        <a href="">Finished Course</a>
                    </div>
            </div>
            <div className="writecomment">
                <h2>Do you want comment this course?</h2>
                <div className="boxcomment">
                    <input type="text" className="inputcomment"></input>
                    <a href=""><img src={send}></img></a>
                </div>
            </div>
        </div>
    );
}
export default LearnCourse;