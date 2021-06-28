import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './containers/Home/index';
import SignUp from './containers/Signup';
import SignIn from './containers/Signin/index';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/signin" component={SignIn} />
         <Route path="/signup" component={SignUp} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
