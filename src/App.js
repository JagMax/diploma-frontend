import Login from "./comps/Login";
import Profile from "./comps/Profile";
import Register from "./comps/Register";
import Doctors from "./comps/Doctors";
import DoctorsContextProvider from "./context/doctorsContext";
import "./index.css";
import Home from "./comps/Home";
import About from "./comps/About";
import NotFound from "./comps/NotFound";
import ReviewsContextProvider from "./context/reviewsContext";
import { userContext } from "./context/userContext";
import { useContext } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const user = useContext(userContext);
  console.log(user);

  return (
    <div className="App">
      <BrowserRouter>
        {user ? (
          user.isDoctor ? (
            <Route path="/">
              <Profile />
            </Route>
          ) : (
            <>
              <Switch>
                <DoctorsContextProvider>
                  <ReviewsContextProvider>
                    <Route exact path="/" component={Home} />
                    <Route path="/doctors" component={Doctors} />
                    <Route path="/about" component={About} />
                    <Route component={NotFound} />
                  </ReviewsContextProvider>
                </DoctorsContextProvider>
              </Switch>
            </>
          )
        ) : (
          <>
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>

              <Route path="/register">
                <Register />
              </Route>
            </Switch>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
