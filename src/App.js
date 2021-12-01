import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Component/index';
import Login from './Component/Js/login';
import SingUp from './Component/Js/signup';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SingUp} />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
