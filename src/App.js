import {Route, Switch} from 'react-router-dom'
import Login from './components/Login';
import Admin from './components/Admin';
import Report from './components/Report';
import ReportDetails from './components/ReportDetails';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  return (
   <Switch>
    <Route exact path='/' component={Quiz}/>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/reports' component={Report}/>
    <Route exact path='/report-details' component={ReportDetails}/>
    <Route exact path='/admin' component={Admin}/>
   </Switch>
  );
}

export default App;
