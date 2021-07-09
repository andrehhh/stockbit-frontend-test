import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies/:id" children={<SingleMovie />}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
