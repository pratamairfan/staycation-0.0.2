import landingPage from "pages/LandingPage";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={landingPage} />
      </Router>
    </div>
  );
}

export default App;
