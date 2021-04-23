import "./App.css";
import BuyCourse from "./Page/BuyCourse";
import LearnCourse from "./Page/LearnCourse";
import SignIn from "./Page/SignIn";
import { Switch, Route } from "react-router-dom";
import Home from "./Page/Home";
import SignUp from "./Page/SignUp";
import MenuBar from "./Component/MenuBar";
import CustomTheme from "./Component/Theme";
import { Container } from "@material-ui/core";
import MyCourse from "./Page/MyCourse";
import Payment from "./Page/Payment";
function App() {
  return (
    <CustomTheme>
      <MenuBar />
      <Container style={{ marginTop: 25 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/course/id/learn">
            <LearnCourse />
          </Route>
          <Route exact path="/course/id">
            <BuyCourse />
          </Route>
          <Route exact path="/my-course">
            <MyCourse />
          </Route>
          <Route exact path="/payment">
            <Payment />
          </Route>
        </Switch>
      </Container>
    </CustomTheme>
  );
}

export default App;
