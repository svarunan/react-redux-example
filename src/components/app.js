import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  	Redirect
} from "react-router-dom";

import Home from './home/';
import Music from './music/';
import Videos from './videos/';

function App() {
    return (
        <Router>
	      <div>
	        <ul>
	          <li>
	            <Link to="/">Home</Link>
	          </li>
	          <li>
	            <Link to="/music">Music Page</Link>
	          </li>
	          <li>
	            <Link to="/videos">Video Page</Link>
	          </li>
	          <li>
	            <Link to="/pics">Pics about to come</Link>
	          </li>
	        </ul>
	        <p>
				Root Component!
	        </p>
	        <Switch>
	          <Route path="/" exact component={Home} />
	          <Redirect from="/pics" to="/" />
	          <Route path="/music" component={Music} />
			  <Route path="/videos" component={Videos} />
	        </Switch>
	      </div>
	    </Router>
    );
}
export default App