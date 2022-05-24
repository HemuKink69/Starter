import { HomePage } from "./views/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route exact path="/temp">
            <h1>Hello World</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
