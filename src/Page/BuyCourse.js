import React from "react";
import { Link } from "react-router-dom";
import course from "../img/Course4.jpg";
import buy from "../img/Money.png";

function BuyCourse(props) {
  return (
    <div className="buycourse">
      <div className="top">
        <div className="piccourse">
          <img src={course} alt="course-pic" />
        </div>
        <div className="detail">
          <h1>UI Design With Figma</h1>
          <ul>
            <li>
              <h4>ออกแบบ Ul ไปจนถึงการทำ Prototype ด้วย Figma</h4>
            </li>
          </ul>
          {/* <div className="box">
            <h5>4-8 ชั่วโมง</h5>
            <h5>UX/UI Design</h5>
            <h5>Python</h5>
          </div> */}
          <div className="price">
            <img src={buy} alt="price-course" />
            <h2>$ 20</h2>
          </div>
          <Link to="/payment">BUY COURSE</Link>
        </div>
      </div>
      <div className="bottom">
        <div className="description">
          <h2> Description</h2>
          <br></br>
          <h3>Create by : Olan Samritjiarapon</h3>
          <br></br>
          <h4>
            การออกแบบ User Interface (UI) สำหรับ Digital Product ในปัจจุบัน
            ต่างไปจากการออกแบบสิ่งพิมพ์ โปสเตอร์ หรือกราฟิกดีไซน์
            เพราะนอกจากเรื่องการออกแบบให้ Responsive ตอบสนองกับรูปแบบ Device ที่
            User มีแล้ว ยังต้องคำนึงการทำงานร่วมกันทั้งในทีมและต่างทีมอีกด้วย
          </h4>
        </div>
        {/* <div className="comment">
          <h2> Comments</h2>
          <p></p>
          <p></p>
        </div> */}
      </div>
    </div>
  );
}
export default BuyCourse;
