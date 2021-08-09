import {Link, Route, Switch} from "react-router-dom";
import DrinksList from "./pages/DrinksList";
import Graduation from "./pages/Graduation";
import Marriage from "./pages/Marriage";
import Confraternization from "./pages/Confraternization"
import Header from "./components/Header";
import Footer from "./components/Footer"
import {Toaster} from "react-hot-toast"
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
      <Toaster />
      <Header>
        <Link className = "logo" to = "/"><h1>Beervents Manager</h1></Link>
        <p>You choose the beers and the parties. </p>
          <p>We make sure everyone gets drunk. </p>
        <Nav />
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
      <Footer>
        <p>made with <s>love</s> beers by Greg - Kenzie Academy Brasil</p>
      </Footer>
    </div>
  );
}

export default App;
