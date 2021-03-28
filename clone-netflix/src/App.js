import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen.jsx";
import LoginScreen from "./components/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/userSlice";
import { useEffect } from "react";
import ProfileScreen from "./components/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]); //runs on componentmount

  return (
    <div className="app">
      <Router>
        {" "}
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>{" "}
            <Route exact path="/">
              <HomeScreen />
            </Route>{" "}
          </Switch>
        )}{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
