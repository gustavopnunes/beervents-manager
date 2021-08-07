import {Link, Route, Switch} from "react-router-dom";
import DrinksList from "./pages/DrinksList";
import Graduation from "./pages/Graduation";
import Marriage from "./pages/Marriage";
import Confraternization from "./pages/Confraternization"
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header>
        <h1>Events Manager</h1>
        <p>Choose your beers and add to your events by clicking the icons</p>
        <p>Browse through your events with the menu </p>
        <nav>
          <Link to =  "/marriage" > Wedding </Link>
          <Link to =  "/confraternization" > Confraternization </Link>
          <Link to =  "/graduation" > Graduation </Link>
        </nav>
      </Header>
      <Switch>
        <Route exact path = "/">
          <DrinksList />
        </Route>
        <Route path = "/marriage">
          <Marriage />
        </Route>
        <Route path = "/graduation">
          <Graduation />
        </Route>
        <Route path = "/confraternization">
          <Confraternization />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
