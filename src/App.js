import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LeagueDetail from './Components/LeagueDetail/LeagueDetail';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path='/details/:idLeague'>
                <LeagueDetail></LeagueDetail>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
