import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./navigation/Navbar";
import Landing from "./pages/Landing";
import Gallery from "./pages/Gallery";
import Show from "./pages/Show";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./navigation/Footer";


export default function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <div className="main-container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/gallery" component={Gallery} />
            <Route path="/gallery/:slug" component={Show} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

