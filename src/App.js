import "./App.css";
import Navbar from "./Component/Navbar.jsx";
import Header from "./Component/Header";
import Article from "./Component/Article";
import Contact from "./Component/Contact";
import BackToTop from "./Component/BackToTop";
import Header2 from "./Component/Header2";
import Article2 from "./Component/Article2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Navbar />
            <header className="App-header">
              <h3 className="main-judul">G647</h3>
              <Header />
              <Article />
              <Header2 />
              <Article2 />
              <Contact />
              <BackToTop />
            </header>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
