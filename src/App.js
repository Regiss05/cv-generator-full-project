import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Component/index';
import Login from './Component/Js/login';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Switch>
            <Route exact path="/login" component={Login} />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
