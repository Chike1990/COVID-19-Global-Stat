import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CountryCase from './pages/CountryCase';

function App() {
  return (
    <div className="App">
      <div className="overlay" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/country/:date/:id" component={CountryCase} />
      </Switch>
    </div>
  );
}

export default App;
